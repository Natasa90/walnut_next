import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { playfair } from "@/lib/fonts";

export const ContactText = () => {
    const t = useCommonTranslation();

    return (
        <div className="flex flex-col items-center">
             <h1 className={`${playfair.className} text-3xl font-bold mb-8`}>
                {t("contactForm.contactHeader")}
            </h1>
            <p className="text-justify mb-6">{t("contactForm.contactPageText")}</p>
        </div>
    );
};
