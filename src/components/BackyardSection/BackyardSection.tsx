import { HomePageCard } from "../HomePageCard/HomePageCard";
import { CustomLink } from "../CustomLink";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const BackyardSection = () => {
    return (
        <section className="w-full flex flex-col-reverse md:flex-col items-center gap-8 my-5 px-4 md:px-16">
            <HomePageCard
                title="Enjoy our beautiful backyard"
                subTitle="– Let's get the roaster rollin'! –"
                image1={{
                    src: "/images/Backyard/Backyard7.webp",
                    alt: "Walnut Pool House Swimming Pool",
                }}
                paragraph1=" Soak up the sun by the private pool, grill up something
                    delicious in the outdoor kitchen or try your hand at some
                    corn hole."
                paragraph2="There's a playground for the little ones and cozy
                    patio spots for evening chats by the fire. Whether it's a
                    laid-back BBQ or a lively summer gathering—our backyard is
                    made for making memories!"
                link={
                    <CustomLink
                        href="/booking"
                        title="Check Availability"
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
                        title="Contact us!"
                        leftIcon={<FaPhoneAlt />}
                        rightIcon={<MdArrowForwardIos />}
                    />
                }
            />
        </section>
    );
};
