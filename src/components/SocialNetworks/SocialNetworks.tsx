import { useI18nReady } from "@/lib/hooks/useI18nReady";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

export const SocialNetworks = () => {
	const { t, loading } = useI18nReady("common");

  if (loading) return <div>Loading...</div>;
    return (
        <div className="flex flex-wrap justify-center cursor-pointer shadow-md pb-4">
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
                        {t("Networks")}
                    </p>
                    <FaArrowRight className="text-gray-500 text-lg" />
                    <FaInstagram className="text-pink-600 text-4xl" />
                </div>
            </a>
        </div>
    );
};
