import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { CustomLink } from "../CustomLink";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { playfair } from "@/lib/fonts";

export const HomeWelcome = () => {
    return (
        <div className="relative rounded-xl h-[84vh] flex items-center justify-center text-center m-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/home-cover1.webp"
                    alt="A-frame retreat home cover image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    loading="eager"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative p-8 text-white max-w-xl z-10">
                <h1 className={`${playfair.className} text-4xl md:text-5xl font-semibold mb-4 tracking-wide}`}>
                    <Typewriter
                        words={["Relax.", "Unwind.", "Breathe.", "Recharge."]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={120}
                        delaySpeed={2000}
                    />
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Escape to nature in our charming A-frame retreat nestled in
                    Brezane.
                </p>
								<CustomLink
                    href="/booking"
                    title="Check Availability"
										leftIcon={<FaRegCalendarCheck/>}
                    rightIcon={<MdArrowForwardIos />}
                />
            </div>
        </div>
    );
};
