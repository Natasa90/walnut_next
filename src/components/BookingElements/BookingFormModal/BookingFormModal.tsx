import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { pricePerNight } from "@/lib/const/prices";
import { differenceInCalendarDays } from "date-fns";
import { BookingFormModalProps, FormValues } from "@/types/Types";
import { generateBookingPDF } from "@/lib/helpers/getPdf";

export const BookingFormModal = ({
    dateRange,
    onClose,
    typeOfRent,
    onBookingSuccess,
}: BookingFormModalProps) => {
    const t = useCommonTranslation();

    const initialValues: FormValues = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        typeOfRent,
        numOfPersons: 2,
        totalPrice: typeOfRent === "daily" ? 150 : 0,
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required(t("bookingForm.fullNameReq")),
        email: Yup.string().email(t("bookingForm.invalidEmail")).nullable(),
        phone: Yup.string()
            .matches(/^\+?\d+$/, t("bookingForm.invalidPhone"))
            .test(
                "len",
                t("bookingForm.phoneMin"),
                (val) => !!val && val?.replace(/\D/g, "").length >= 10
            )
            .required(t("bookingForm.phoneReq")),
        message: Yup.string().nullable(),
        numOfPersons: Yup.number().nullable(),
    });

    const handleSubmit = async (values: FormValues) => {
        let totalPrice = 0;

        if (values.typeOfRent === "nightly") {
            const persons = values.numOfPersons;
            const nights =
                differenceInCalendarDays(
                    dateRange.endDate,
                    dateRange.startDate
                ) + 1;
            totalPrice = pricePerNight[persons] * nights;
        } else {
            totalPrice = 150;
        }

        values.totalPrice = totalPrice;

        const bookingData = {
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
            message: values.message,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            typeOfRent: values.typeOfRent,
            numOfPersons: values.numOfPersons,
            totalPrice: totalPrice,
        };

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit Booking.");
            }
            onBookingSuccess();
            generateBookingPDF(bookingData);
        } catch (error) {
            alert(t("bookingForm.bookingFailed"));
        }
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 px-5">
            <div className="bg-white border border-gray-400 rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl mb-4 text-black text-center">
                    {t("bookingForm.resDetails")}
                </h2>
                <div className="mb-4 text-center text-gray-700">
                    <p>
                        {t("bookingForm.rentalType")}{" "}
                        <strong>
                            {t(`bookingForm.rentalTypes.${typeOfRent}`)}
                        </strong>{" "}
                        {typeOfRent === "nightly" ? (
                            <>
                                {t("bookingForm.selectedDates")}:{" "}
                                {format(dateRange.startDate, "dd-MM-yyyy")}{" "}
                                {t("bookingForm.to")}{" "}
                                {format(dateRange.endDate, "dd-MM-yyyy")}
                            </>
                        ) : (
                            <>
                                {t("bookingForm.selectedDate")}:{" "}
                                {format(dateRange.startDate, "dd-MM-yyyy")}
                            </>
                        )}
                    </p>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => {
                        let totalPrice = 0;

                        if (values.typeOfRent === "nightly") {
                            const persons = values.numOfPersons;
                            const nights =
                                differenceInCalendarDays(
                                    dateRange.endDate,
                                    dateRange.startDate
                                ) + 1;
                            totalPrice = pricePerNight[persons] * nights;
                        } else {
                            totalPrice = 150;
                        }

                        return (
                            <Form className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        {t("bookingForm.fullName")}
                                    </label>
                                    <Field
                                        name="fullName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                    />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        {t("bookingForm.email")}
                                    </label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        {t("bookingForm.phone")}
                                    </label>
                                    <Field
                                        name="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                        onInput={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            e.target.value =
                                                e.target.value.replace(
                                                    /[^\d+]/g,
                                                    ""
                                                );
                                        }}
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        {t("bookingForm.message")}
                                    </label>
                                    <Field
                                        name="message"
                                        as="textarea"
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79] resize-none"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                {values.typeOfRent === "nightly" && (
                                    <div>
                                        <label className="block mb-1 text-black font-medium">
                                            {t("bookingForm.numOfPersons")}
                                        </label>
                                        <Field
                                            name="numOfPersons"
                                            as="select"
                                            className="text-black w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                        >
                                            <option value={2}>
                                                {t(
                                                    "bookingForm.personsOption1"
                                                )}
                                            </option>
                                            <option value={4}>
                                                {t(
                                                    "bookingForm.personsOption2"
                                                )}
                                            </option>
                                        </Field>
                                        <ErrorMessage
                                            name="numOfPersons"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                )}

                                <div className="text-black mt-4 text-lg font-semibold">
                                    <p>
                                        <strong>
                                            {t("bookingForm.totalPrice")}{" "}
                                        </strong>
                                        €{totalPrice.toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
                                        onClick={onClose}
                                    >
                                        {t("bookingForm.back")}
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-[#596e79] hover:bg-[#596e45] text-white rounded-md transition-colors"
                                    >
                                        {t("bookingForm.book")}
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};
