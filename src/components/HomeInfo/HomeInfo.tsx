import { HomePageCard } from "../HomePageCard/HomePageCard";
import { MdArrowForwardIos } from "react-icons/md";
import { CustomLink } from "../CustomLink";

export const HomeInfo = () => {
    return (
        <section className="w-full flex flex-col-reverse md:flex-col items-center gap-8 my-5 px-4 md:px-16">
            <HomePageCard
                title="Walnut Pool House"
                subTitle="– Where Nature Meets Refined Living –"
                paragraph1="Welcome to Walnut Pool House – a charming frame wooden retreat nestled in the
                        peaceful village of Brezane, near Požarevac. Surrounded
                        by a serene walnut forest, this cozy getaway blends
                        nature’s calm with the comfort of modern living ✨."
                paragraph2="Whether you’re seeking a tranquil escape, a relaxed
                        family gathering, a sunny afternoon by the pool, or a
                        laid-back barbecue with friends – we’ve got you covered.
                        Our space is designed for small groups looking to
                        unwind, reconnect, and enjoy the quiet beauty of the
                        countryside."
                paragraph3="We would be more than happy to welcome you and show you
                        exactly why we fell in love with this place – and why we
                        think you will too 💛."
                link={
                    <CustomLink
                        href="/about"
                        title="More about us"
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
