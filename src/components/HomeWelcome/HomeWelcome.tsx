import Image from "next/image";
import { useRouter } from "next/router";
import { Typewriter } from "react-simple-typewriter";
import { MdArrowForwardIos } from "react-icons/md";

export const HomeWelcome = () => {
    const router = useRouter();
    const handleBooking = () => {
        router.push("/booking");
    };
    return (
        <div className="relative bg-cover rounded-xl bg-center h-[84vh] flex items-center justify-center text-center m-4">
            {/* The actual image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/home-cover1.webp"
                    alt="A-frame retreat home cover image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>

            {/* Text and other content */}
            <div className="relative p-8 text-white max-w-xl z-10">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide">
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
                <button
                    onClick={handleBooking}
                    className="border text-white px-5 py-3 rounded-lg font-medium transition"
                >
                    <div className="cursor-pointer flex items-center gap-4">
                        <p className="italic text-bold">Book Now!</p>
                        <MdArrowForwardIos />
                    </div>
                </button>
            </div>
        </div>
    );
};
