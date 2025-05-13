import Image from "next/image";
import { FC } from "react";
import { playfair } from "@/lib/fonts";

interface BackyardSectionProps {
    imageSrc: string;
}

export const BackyardSection: FC<BackyardSectionProps> = ({ imageSrc }) => {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-center gap-8 my-5 px-4 md:px-16">
            <div className="flex-1 text-center md:text-left">
						<h2 className={`${playfair.className} text-2xl`}>
                    Enjoy our beautiful backyard!
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed my-4">
                    Soak up the sun by the private pool, grill up something
                    delicious in the outdoor kitchen or try your hand at some
                    corn hole. There's a playground for the little ones and cozy
                    patio spots for evening chats by the fire. Whether it's a
                    laid-back BBQ or a lively summer gathering—our backyard is
                    made for making memories!
                </p>
            </div>
            <div className="flex-1">
                <Image
                    src={imageSrc}
                    alt="Walnut Pool House backyard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
            </div>
        </section>
    );
};
