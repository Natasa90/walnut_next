import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name field is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("tEmail field is required"),
        phone: Yup.string().required("Phone Number field is required"),
        message: Yup.string().required("Your Message field is required"),
    });

    const handleSubmit = async (
        values: any,
        { resetForm }: { resetForm: () => void }
    ) => {
        try {
            const response = await fetch("/api/inquiries", {
							method: "POST", 
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(values),
						}); 

						if (!response.ok) {
							throw new Error ("Failed to submit inquiry.")
						}

						alert ("Your message has been sent. We will contact you soon.");
						resetForm(); 
        } catch (error) {
            alert("Sending failed. Please try again.");
        }
    };

    return (
        <div className="bg-[#dfd3c3] p-6 rounded-2xl space-y-4 w-11/12 md:w-1/2 mx-auto">
            <p className="text-xl font-semibold text-[#596e79] mb-2">
                Contact Us
            </p>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div>
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="bg-[#f0ece2] p-4 rounded-xl text-gray-700 w-full"
                            />
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="bg-[#f0ece2] p-4 rounded-xl text-gray-700 w-full"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        <div>
                            <Field
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="bg-[#f0ece2] p-4 rounded-xl text-gray-700 w-full"
                            />
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        <div>
                            <Field
                                as="textarea"
                                name="message"
                                placeholder="Message"
                                className="bg-[#f0ece2] p-4 rounded-xl text-gray-700 h-28 text-start w-full"
                            />
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-red-500 text-xs mt-1"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#596e79] hover:bg-[#596e45] p-4 rounded-xl w-full"
                        >
                            <p className="text-center text-white font-semibold text-lg">
                                {isSubmitting ? "Sending..." : "Send"}
                            </p>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
