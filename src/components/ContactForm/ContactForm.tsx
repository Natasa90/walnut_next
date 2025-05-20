import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

export const ContactForm = () => {
	const t = useCommonTranslation();

    const validationSchema = Yup.object({
        fullName: Yup.string().required(t("bookingForm.fullNameReq")),
        email: Yup.string()
            .email(t("bookingForm.invalidEmail"))
            .required(t("bookingForm.emailReq")),
        phone: Yup.string().required(t("bookingForm.phoneReq")),
        message: Yup.string().required(t("bookingForm.messageReq")),
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

						alert (t("contactForm.messageSent"));
						resetForm(); 
        } catch (error) {
            alert("Sending failed. Please try again.");
        }
    };

    return (
        <div className="bg-[#dfd3c3] p-6 rounded-2xl space-y-4 w-11/12 md:w-1/2 mx-auto mb-6">
            <p className="text-xl font-semibold text-[#596e79] mb-2">
                {t("contactForm.contactUs")}
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
                                placeholder={t("contactForm.fullNamePlaceholder")}
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
                                placeholder={t("contactForm.emailPlaceholder")}
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
                                placeholder={t("contactForm.phonePlaceholder")}
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
                                placeholder={t("contactForm.messagePlaceholder")}
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
                                {isSubmitting ? (t("contactForm.sendingBtn")) : (t("contactForm.sendBtn"))}
                            </p>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
