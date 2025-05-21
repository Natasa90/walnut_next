import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

export const SocialNetworks = () => {
	const t = useCommonTranslation();
    return (
        <div className="flex flex-wrap justify-center cursor-pointer shadow-md pb-4">
            <a
                href="https://www.instagram.com/walnut_pool_house?igsh=dGNnbHlzdXJrMWdn" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <div
                    className="flex items-center space-x-2 shadow-xl p-5 mb-7 bg-amber-50 rounded-3xl border border-amber-200 hover:shadow-2xl transition-shadow duration-300"
                    style={{
                        animation: "pulse-scale 1.5s ease-in-out infinite",
                    }}
                >
                    <p className="text-md font-medium text-gray-800">
                        {t("Networks")}
                    </p>
                    <FaArrowRight className="text-gray-500 text-sm" />
                    <FaInstagram className="text-pink-600 text-2xl" />
                </div>
            </a>
        </div>
    );
};
