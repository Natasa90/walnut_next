import { FaPhoneAlt } from "react-icons/fa";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

export const ContactUsExtra = () => {
    const t = useCommonTranslation();
    return (
        <div className="flex flex-col justify-center items-center">
            <button
                className="pointer-events-auto flex items-center gap-3 bg-gradient-to-r from-green-700 to-lime-600 hover:from-green-800 hover:to-lime-700 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-base transition-transform hover:scale-105 active:scale-95"
                onClick={() => (window.location.href = "tel:+381603065700")}
            >
                <FaPhoneAlt className="animate-pulse-on-hover" />
                <span>{t("callUs")}</span>
            </button>
            <div className="w-full h-[400px] mt-6 rounded-2xl overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1262.5291462781302!2d21.0772590543248!3d44.65233313833302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srs!4v1747816557353!5m2!1sen!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};
