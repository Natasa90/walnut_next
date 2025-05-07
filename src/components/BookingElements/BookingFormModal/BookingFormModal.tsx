import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { supabase } from "@/lib/Supabase";

interface BookingFormModalProps {
    dateRange: { startDate: Date; endDate: Date };
    onClose: () => void;
}

interface FormValues {
    fullName: string;
    email?: string;
    phone: string;
    message?: string;
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
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name field is required"),
        email: Yup.string().email("Invalid email format").nullable(),
        phone: Yup.string().required("Phone Number field is required"),
        message: Yup.string().nullable(),
    });

    const handleSubmit = async (values: FormValues) => {
        const { data, error } = await supabase.from("bookings").insert([
            {
                full_name: values.fullName,
                email: values.email,
                phone: values.phone,
                message: values.message,
                start_date: dateRange.startDate,
                end_date: dateRange.endDate,
            },
        ]);

        if (error) {
            alert("Something went wrong. Please try again later.");
        } else {
            alert("Booking successfull! We'll contact you soon. Thank you!");
            onClose();
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
                </Formik>
            </div>
        </div>
    );
};
