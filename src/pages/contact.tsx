import Head from "next/head";
import { ContactForm } from "@/components/ContactForm";
import { ContactText } from "@/components/ContactText";

const ContactPage = () => {
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
                    content="Contact Us | Get in Touch with HabitDesk"
                />
                <meta
                    property="og:description"
                    content="Have questions or want to book directly? Feel free to contact us!"
                />
                <meta property="og:type" content="website" />
            </Head>
            <div className="flex flex-wrap mt-6">
                <ContactText />
                <ContactForm />
            </div>
        </>
    );
};

export default ContactPage;
