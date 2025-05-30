import Image from "next/image";
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

export const AptTriSove = () => {
    const t = useCommonTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // 👈 Show earlier
            className="flex justify-center my-10 cursor-pointer"
        >
            <a
                href="https://www.instagram.com/apartman_tri_sove?igsh=cjkwN3BiZWpqNXU0"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <div className="flex flex-col items-center shadow-xl p-6 bg-amber-50 rounded-3xl border border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        {t("aptTriSoveModal")}
                    </h2>
                    <div className="flex flex-col lg:flex-row w-full gap-4 mb-6">
                        <div className="w-full lg:w-1/3 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt2.webp"
                                alt="Apartment 1"
                                width={100}
                                height={75}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/3 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt4.webp"
                                alt="Apartment 2"
                                width={100}
                                height={75}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/3 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt5.webp"
                                alt="Apartment 3"
                                width={100}
                                height={75}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="text-lg font-medium text-gray-800">
                            {t("aptTriSoveInsta")}
                        </p>
                        <FaArrowRight className="text-gray-500 text-lg" />
                        <FaInstagram className="text-pink-600 text-3xl" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};
