import { HomePageCard } from "../HomePageCard/HomePageCard";
import { MdArrowForwardIos } from "react-icons/md";
import { CustomLink } from "../CustomLink";
import { useTranslation } from "react-i18next";

export const HomeInfo = () => {
	const { t, ready } = useTranslation("common");

  if (!ready) return null;

    return (
        <section className="flex flex-col-reverse md:flex-col items-center gap-8 my-5 md:px-16">
            <HomePageCard
                title={t("home.homeInfo2.title")}
                subTitle={t("home.homeInfo2.subtitle")}
                paragraph1={t("home.homeInfo2.p1")}
                paragraph2={t("home.homeInfo2.p2")}
                paragraph3={t("home.homeInfo2.p3")}
                link={
                    <CustomLink
                        href="/about"
                        title={t("home.homeInfo2.linkText")}
                        rightIcon={<MdArrowForwardIos />}
                    />
                }
                image1={{
                    src: "/images/Living_room/Livingroom17.webp",
                    alt: "Walnut House Living Room",
                }}
                image2={{
                    src: "/images/Kitchen/Kitchen_indoor1.webp",
                    alt: "Walnut House Indoor Kitchen",
                }}
                image3={{
                    src: "/images/Gallery_sleep/Gallery.webp",
                    alt: "Walnut House Bedroom",
                }}
            />
        </section>
    );
};
