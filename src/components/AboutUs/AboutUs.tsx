import { playfair } from "@/lib/fonts";
import { useTranslation } from "next-i18next";

export const AboutUs = () => {
	const { t } = useTranslation("common"); 

  return (
    <div className="p-6 max-w-4xl mx-auto text-lg leading-relaxed">
      <h1 className={`${playfair.className} text-3xl font-bold mb-4`}>{t("aboutUs.title")}</h1>
      <p className="mb-4">
       {t("aboutUs.intro")}
      </p>
      <p className="mb-4">
			{t("aboutUs.description")}
      </p>
      <p className="mb-4">
			{t("aboutUs.comforts")}
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>{t("aboutUs.features.pool")}</li>
				<li>{t("aboutUs.features.patio")}</li>       
				<li>{t("aboutUs.features.bbq")}</li>       
				<li>{t("aboutUs.features.firePit")}</li> 
				<li>{t("aboutUs.features.playground")}</li>  
				<li>{t("aboutUs.features.backyard")}</li>    
				<li>{t("aboutUs.features.petFriendly")}</li>      
      </ul>
      <p className="mb-4">
			<li>{t("aboutUs.closing")}</li>  
      </p>
      <p className="mb-4">
			<li>{t("aboutUs.extra")}</li>  
      </p>
      <p className="mb-4">
      <li>{t("aboutUs.note")}</li>  
      </p>
      <p className="mb-4">
      <li>{t("aboutUs.final")}</li>  
      </p>
    </div>
  );
}
