import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { HomePageCard } from "../HomePageCard";
import { MdArrowForwardIos } from "react-icons/md";
import { CustomLink } from "../CustomLink";

export const HomeInfo = () => {
	const t = useCommonTranslation();

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
                    src: "/images/Backyard/Backyard6.webp",
                    alt: "Walnut Pool House Swimming Pool",
                }}
                image2={{
                    src: "/images/Backyard/Backyard3.webp",
                    alt: "Walnut Pool A-frame House",
                }}
                image3={{
                    src: "/images/Backyard/Backyard8.webp",
                    alt: "Walnut House Backyard Firepit",
                }}
            />
        </section>
    );
};
