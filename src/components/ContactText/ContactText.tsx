import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

export const ContactText = () => {
	const t = useCommonTranslation();

    return (
        <div className="flex flex-col max-w-2xl mx-auto px-4 items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
               {t("contactForm.contactHeader")}
            </h2>
            <p className="mb-6 p-6 text-justify">
                {t("contactForm.contactPageText")}
            </p>
        </div>
    );
};
