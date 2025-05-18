import { HomePageCard } from "../HomePageCard/HomePageCard";
import { CustomLink } from "../CustomLink";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const BackyardSection = () => {
	const { t } = useTranslation("common"); 
    return (
        <section className="w-full flex flex-col-reverse md:flex-col items-center gap-8 my-5 md:px-16">
            <HomePageCard
                title={t("home.homeInfo3.title")}
                subTitle={t("home.homeInfo3.subtitle")}
                image1={{
                    src: "/images/Backyard/Backyard7.webp",
                    alt: "Walnut Pool House Swimming Pool",
                }}
                paragraph1={t("home.homeInfo3.p1")}
                paragraph2={t("home.homeInfo3.p2")}
                link={
                    <CustomLink
                        href="/booking"
                        title={t("home.homeInfo.linkText")}
                        leftIcon={<FaRegCalendarCheck />}
                        rightIcon={<MdArrowForwardIos />}
                    />
                }
                image2={{
                    src: "/images/Backyard/Firepit8.webp",
                    alt: "Walnut Pool House Firepit",
                }}
                image3={{
                    src: "/images/Backyard/Backyard3.webp",
                    alt: "Walnut Pool A-frame House",
                }}
                link2={
                    <CustomLink
                        href="/contact"
                        title={t("home.homeInfo3.linkText")}
                        leftIcon={<FaPhoneAlt />}
                        rightIcon={<MdArrowForwardIos />}
                    />
                }
            />
        </section>
    );
};
