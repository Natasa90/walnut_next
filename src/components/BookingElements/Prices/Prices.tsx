import Link from "next/link";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { FaPhone, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export const Prices = () => {
    const t = useCommonTranslation();
    return (
        <div className="prices-container p-4 max-w-md mx-auto bg-amber-50 rounded-3xl shadow">
            <h2 className="text-xl font-bold mb-4">{t("prices.title")}</h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
                <li>{t("prices.nightForTwo")}</li>
                <li>{t("prices.nightForFour")}</li>
                <li>{t("prices.dailySwimming")}</li>
            </ul>
            <p className="text-gray-700">{t("prices.description")}</p>
            <div className="mt-6 p-4 bg-white border border-yellow-300 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-yellow-700">
                    <FaInfoCircle className="text-xl" />
                    <h3 className="text-lg font-semibold">
                        {t("pricingNotice.title")}
                    </h3>
                </div>

                <div className="text-gray-800 space-y-2 text-sm leading-relaxed">
                    <p>{t("pricingNotice.p1")}</p>
                    <p>{t("pricingNotice.p2")}</p>
                    <p>{t("pricingNotice.p3")}</p>
                    <p>{t("pricingNotice.p4")}</p>

                    <div className="flex items-center gap-2 mt-2">
                        <FaPhone className="text-yellow-600" />
                        <p>{t("pricingNotice.phone")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-yellow-600" />
                        <p>{t("pricingNotice.email")}</p>
                    </div>

                    <p>
                        {t("pricingNotice.form")}{" "}
                        <Link
                            href="/contact"
                            className="text-yellow-700 underline hover:text-yellow-800"
                        >
                            {t("pricingNotice.linkToForm")}
                        </Link>
                    </p>
                    <p className="mt-4 italic text-gray-600">
                        {t("pricingNotice.closing")}
                    </p>
                    <p className="font-medium">
                        {t("pricingNotice.signature")}
                    </p>
                </div>
            </div>
        </div>
    );
};
