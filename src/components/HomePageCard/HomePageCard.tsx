import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Image from "next/image";
import { HomePageCardProps } from "@/types/Types";

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
            <div className="flex flex-col shadow-xl p-8 my-6 bg-amber-50 rounded-3xl shadow-lg border border-amber-200 max-w-3xl">
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
                <div className="flex flex-col justify-center items-center mt-6 gap-8">
                    {[image1, image2, image3].map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={800}
                                height={600}
                                className="rounded-3xl w-[600px] h-[400px] object-cover shadow-lg"
                            />
                        </motion.div>
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
