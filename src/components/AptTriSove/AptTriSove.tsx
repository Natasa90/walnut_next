import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const AptTriSove = () => {
    const { t } = useTranslation("common");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col items-center justify-center mb-8 cursor-pointer"
        >
            <a
                href="https://www.instagram.com/apartman_tri_sove?igsh=cjkwN3BiZWpqNXU0"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <div className="flex flex-col items-center shadow-xl p-8 m-6 bg-amber-50 rounded-3xl border border-amber-200 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        {t("aptTriSove")}
                    </h2>

                    {/* Slightly larger images */}
                    <div className="flex space-x-3 mb-6">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt2.webp"
                                alt="Apartment 1"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt4.webp"
                                alt="Apartment 2"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                            <Image
                                src="/images/Apt/Apt5.webp"
                                alt="Apartment 3"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    {/* Follow us section */}
                    <div className="flex items-center space-x-3">
                        <p className="text-lg font-medium text-gray-800">
                            {t("socialNetworks.instagram")}
                        </p>
                        <FaArrowRight className="text-gray-500 text-lg" />
                        <FaInstagram className="text-pink-600 text-3xl" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};
