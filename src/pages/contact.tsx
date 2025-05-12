import { ContactForm } from "@/components/ContactForm";
import { ContactText } from "@/components/ContactText";

const ContactPage = () => {
    return (
        <div className="flex flex-wrap mt-6">
            <ContactText />
            <ContactForm />
        </div>
    );
};

export default ContactPage;
