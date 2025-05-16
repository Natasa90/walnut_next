import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const ContactUsExtra = () => {
	const { t } = useTranslation("common");
    return (
        <button
            className="pointer-events-auto flex items-center gap-3 bg-gradient-to-r from-green-700 to-lime-600 hover:from-green-800 hover:to-lime-700 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-base transition-transform hover:scale-105 active:scale-95"
            onClick={() => (window.location.href = "tel:+1234567890")}
        >
            <FaPhoneAlt className="animate-pulse-on-hover" />
            <span>{t("callUs")}</span>
        </button>
    );
};
