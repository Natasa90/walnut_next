import Head from "next/head";
import { GetStaticProps } from "next";
import { loadTranslation } from "@/lib/helpers/loadTranslation";
import { ContactForm } from "@/components/ContactForm";
import { ContactText } from "@/components/ContactText";
import { ContactUsExtra } from "@/components/ContactUsExtra";
import { SuccessModal } from "@/components/SuccessSubmitModal";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

const ContactPage = () => {
    const t = useCommonTranslation();

    return (
        <>
            <Head>
                <title>Contact Us | Get in Touch with HabitDesk</title>
                <meta
                    name="description"
                    content="Have questions or want to book directly? Feel free to contact us—our family is happy to help you with anything you need!"
                />
                <meta
                    property="og:title"
                    content="Contact Us | Get in Touch with Walnut Pool House"
                />
                <meta
                    property="og:description"
                    content="Have questions or want to book directly? Feel free to contact us!"
                />
                <meta property="og:type" content="website" />
            </Head>
            <div className="p-6">
                <ContactText />
                <ContactForm />
                <ContactUsExtra />
            </div>
        </>
    );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async (context) => {
    return loadTranslation(context);
};
