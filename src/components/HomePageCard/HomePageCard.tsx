import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Image from "next/image";

interface CustomImageProps {
    src: string;
    alt: string;
}

interface HomePageCardProps {
    title: string;
    subTitle?: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    link: ReactNode;
    link2?: ReactNode;
    image1: CustomImageProps;
    image2: CustomImageProps;
    image3: CustomImageProps;
}

export const HomePageCard: FC<HomePageCardProps> = ({
    title,
    subTitle,
    paragraph1,
    paragraph2,
    paragraph3,
    link,
    image1,
    image2,
    image3,
    link2,
}) => {
    return (
        <div className="flex flex-wrap my-6 justify-center">
            <div className="flex flex-col shadow-xl p-8 m-4 bg-amber-50 rounded-3xl shadow-lg border border-amber-200 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.6 }}
                    className={`${playfair.className} text-3xl text-center mb-2`}
                >
                    {title}
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, x: -50, skewY: 10 }}
                    whileInView={{ opacity: 1, x: 0, skewY: 0 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.6 }}
                    className={`${playfair.className} text-xl text-gray-700 text-center mb-8`}
                >
                    {subTitle}
                </motion.h3>
                <div className="text-gray-700 space-y-2 leading-relaxed text-[17px] text-justify mb-2">
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <p>{paragraph3}</p>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.6 }}
                        className="mt-6 text-center"
                    >
                        {link}
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                    {[image1, image2, image3].map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={600}
                            className="rounded-3xl p-4 w-[600px] h-[400px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    ))}
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.6 }}
                        className="mt-6 text-center"
                    >
                        {link2}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
