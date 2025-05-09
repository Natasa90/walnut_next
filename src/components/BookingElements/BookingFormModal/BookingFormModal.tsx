import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { pricePerNight } from "@/lib/const/prices";

interface BookingFormModalProps {
    dateRange: { startDate: Date; endDate: Date };
    onClose: () => void;
}

export interface FormValues {
    fullName: string;
    email?: string;
    phone: string;
    message?: string;
    typeOfRent: string;
    numOfPersons: number;
    totalPrice: number;
}

export const BookingFormModal = ({
    dateRange,
    onClose,
}: BookingFormModalProps) => {
    const initialValues: FormValues = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        typeOfRent: "daily",
        numOfPersons: 1,
        totalPrice: 0,
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name field is required"),
        email: Yup.string().email("Invalid email format").nullable(),
        phone: Yup.string().required("Phone Number field is required"),
        message: Yup.string().nullable(),
        typeOfRent: Yup.string().required("Please select a type of rent"),
        numOfPersons: Yup.number().nullable(),
    });

    const handleSubmit = async (values: FormValues) => {
        if (values.typeOfRent === "night" && !values.numOfPersons) {
            alert("Please select a number of persons.");
            return;
        }

        let totalPrice = 0;

        if (values.typeOfRent === "night") {
            const persons = values.numOfPersons;
            if (pricePerNight[persons]) {
                totalPrice =
                    (pricePerNight[persons] *
                        (dateRange.endDate.getTime() -
                            dateRange.startDate.getTime())) /
                    (1000 * 3600 * 24);
            } else {
                alert("Invalid number of persons selected for night rent.");
                return;
            }
        } else {
            const numberOfDays = Math.floor(
                (dateRange.endDate.getTime() - dateRange.startDate.getTime()) /
                    (1000 * 3600 * 24)
            );
            totalPrice = 150 * numberOfDays;
        }

        values.totalPrice = totalPrice;

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    typeOfRent: values.typeOfRent,
                    numOfPersons: values.numOfPersons,
                    totalPrice: totalPrice,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit Booking.");
            }

            alert("Booking successful! We'll contact you soon. Thank you!");
            onClose();
        } catch (error) {
            alert("Submitting Booking Failed. Try again!");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl mb-4 text-black text-center">
                    Reservation Details
                </h2>

                <div className="mb-6 text-center text-gray-700">
                    <div>
                        <strong>From:</strong>{" "}
                        {format(dateRange.startDate, "dd-MM-yyyy")}
                    </div>
                    <div>
                        <strong>To:</strong>{" "}
                        {format(dateRange.endDate, "dd-MM-yyyy")}
                    </div>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => {
                        let totalPrice = 0;

                        if (values.typeOfRent === "night") {
                            const persons = values.numOfPersons;
                            if (pricePerNight[persons]) {
                                totalPrice =
                                    (pricePerNight[persons] *
                                        (dateRange.endDate.getTime() -
                                            dateRange.startDate.getTime())) /
                                    (1000 * 3600 * 24);
                            }
                        } else {
                            const numberOfDays = Math.floor(
                                (dateRange.endDate.getTime() -
                                    dateRange.startDate.getTime()) /
                                    (1000 * 3600 * 24)
                            );
                            totalPrice = 150 * numberOfDays;
                        }

                        return (
                            <Form className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        Full Name*
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
                                        Email
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
                                        Phone*
                                    </label>
                                    <Field
                                        name="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        Message
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

                                <div>
                                    <label className="block mb-1 text-black font-medium">
                                        Select Type of Rent:*
                                    </label>
                                    <Field
                                        name="typeOfRent"
                                        as="select"
                                        className="text-black w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                    >
                                        <option value="daily">Daily Rent</option>
                                        <option value="night">Night Rent</option>
                                    </Field>
                                    <ErrorMessage
                                        name="typeOfRent"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                {values.typeOfRent === "night" && (
                                    <div>
                                        <label className="block mb-1 text-black font-medium">
                                            Select Number of Persons:*
                                        </label>
                                        <Field
                                            name="numOfPersons"
                                            as="select"
                                            className="text-black w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#596e79]"
                                        >
                                            <option value={1}>1 person</option>
                                            <option value={2}>2 persons</option>
                                            <option value={3}>3 persons</option>
                                            <option value={4}>4 persons</option>
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
                                        <strong>Total Price: </strong>€
                                        {totalPrice.toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
                                        onClick={onClose}
                                    >
                                        Back
                                    </button>

                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-[#596e79] hover:bg-[#596e45] text-white rounded-md transition-colors"
                                    >
                                        Book
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
