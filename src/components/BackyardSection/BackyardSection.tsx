import { useI18nReady } from "@/lib/hooks/useI18nReady";
import { HomePageCard } from "../HomePageCard";
import { CustomLink } from "../CustomLink";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const BackyardSection = () => {
	const { t, loading } = useI18nReady("common");

  if (loading) return <div>Loading...</div>;
    return (
        <section className="w-full flex flex-col-reverse md:flex-col items-center gap-8 mt-5 md:px-16">
            <HomePageCard
                title={t("home.homeInfo3.title")}
                subTitle={t("home.homeInfo3.subtitle")}
                image1={{
                    src: "/images/Backyard/Backyard2.webp",
                    alt: "Walnut Pool House Swimming Pool At Night",
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
                    src: "/images/Backyard/Backyard10.webp",
                    alt: "Walnut Pool House Firepit",
                }}
                image3={{
                    src: "/images/Backyard/Backyard4.webp",
                    alt: "Walnut Pool A-frame House Sun Down",
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
