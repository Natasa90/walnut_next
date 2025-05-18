import { playfair } from "@/lib/fonts";
import { useTranslation } from "next-i18next";
import { SocialNetworks } from "../SocialNetworks";
import { CustomLink } from "../CustomLink";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AptTriSove } from "../AptTriSove";

export const AboutUs = () => {
    const { t } = useTranslation("common");

    return (
        <div className="text-justify text-lg leading-relaxed">
            <h1 className={`${playfair.className} text-3xl font-bold mb-4`}>
                {t("aboutUs.title")}
            </h1>
            <p className="mb-4">{t("aboutUs.intro")}</p>
            <p className="mb-4">{t("aboutUs.description")}</p>
            <p className="mb-4">{t("aboutUs.comforts")}</p>
            <ul className="list-disc list-inside mb-4">
                <li>{t("aboutUs.features.pool")}</li>
                <li>{t("aboutUs.features.patio")}</li>
                <li>{t("aboutUs.features.bbq")}</li>
                <li>{t("aboutUs.features.firePit")}</li>
                <li>{t("aboutUs.features.playground")}</li>
                <li>{t("aboutUs.features.backyard")}</li>
                <li>{t("aboutUs.features.petFriendly")}</li>
            </ul>
            <p className="mb-4">{t("aboutUs.closing")}</p>
            <p className="mb-4">{t("aboutUs.extra")}</p>
						<p className="mb-4">{t("aboutUs.aptTriSove")}</p>
						<AptTriSove />
            <p className="mb-4">{t("aboutUs.note")}</p>
            <p className="mb-8">{t("aboutUs.final")}</p>
            <CustomLink
                href="/booking"
                title={t("home.homeInfo.linkText")}
                leftIcon={<FaRegCalendarCheck />}
                rightIcon={<MdArrowForwardIos />}
            />
						<div className="mt-4">
            <SocialNetworks />
						</div>
        </div>
    );
};
