import { useTranslation } from "react-i18next";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

export const SocialNetworks = () => {
    const { t } = useTranslation("common");
    return (
        <div className="flex flex-wrap mb-6 justify-center cursor-pointer">
            <a
                href="https://www.instagram.com/walnut_pool_house?igsh=dGNnbHlzdXJrMWdn" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <div
                    className="flex items-center space-x-3 shadow-xl p-6 m-4 bg-amber-50 rounded-3xl border border-amber-200 hover:shadow-2xl transition-shadow duration-300"
                    style={{
                        animation: "pulse-scale 1.5s ease-in-out infinite",
                    }}
                >
                    <p className="text-lg font-medium text-gray-800">
                        {t("socialNetworks.instagram")}
                    </p>
                    <FaArrowRight className="text-gray-500 text-lg" />
                    <FaInstagram className="text-pink-600 text-4xl" />
                </div>
            </a>
        </div>
    );
};
