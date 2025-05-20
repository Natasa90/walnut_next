import { FC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { GalleryCard } from "@/components/GalleryElements/GalleryCard";
import { playfair } from "@/lib/fonts";
import path from "path";
import { gallerySections } from "@/lib/const/gallerySections";
import StickyCTA from "@/components/StickyCTA/StickyCTA";
import { imageLoader } from "@/lib/helpers/imageLoader";
import { useTranslation } from "next-i18next";
import { CustomLink } from "@/components/CustomLink";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

interface GalleryPageProps {
    sections: {
        title: string;
        folder: string;
        imagePaths: string[];
    }[];
}
const GalleryPage: FC<GalleryPageProps> = ({ sections }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>Photo Gallery | Explore Our Cozy Rental Home</title>
                <meta
                    name="description"
                    content="Take a look at our beautiful rental property—view the rooms, outdoor spaces, and cozy corners that make it feel like home."
                />
                <meta
                    property="og:title"
                    content="Photo Gallery | Explore Our Cozy Rental Home"
                />
                <meta
                    property="og:description"
                    content="View images of our charming rental house including rooms and outdoor areas."
                />
                <meta property="og:type" content="website" />
            </Head>

            <div className="text-center px-4">
                <h1 className={`${playfair.className} text-3xl font-bold my-6`}>
                    {t("gallery.title")}
                </h1>
                <p className="text-justify px-4 mb-6">{t("gallery.p")}</p>
                <div className="space-y-12">
                    {sections.map(({ title, imagePaths, folder }) => (
                        <GalleryCard
                            key={folder}
                            title={t(title)}
                            imagePaths={imagePaths}
                        />
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
								className="mb-8"
            >
                <CustomLink
                    href="/booking"
                    title={t("home.homeInfo.linkText")}
                    leftIcon={<FaRegCalendarCheck />}
                    rightIcon={<MdArrowForwardIos />}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
                className="pb-10 shadow-md"
            >
                <CustomLink
                    href="/contact"
                    title={t("home.homeInfo3.linkText")}
                    leftIcon={<FaPhoneAlt />}
                    rightIcon={<MdArrowForwardIos />}
                />
            </motion.div>
            <StickyCTA />
        </>
    );
};
export default GalleryPage;

export const getStaticProps: GetStaticProps = async (context) => {
	const basePath = path.join(process.cwd(), "public/images");

	const sectionsWithImages = gallerySections.map((section) => ({
			...section,
			imagePaths: imageLoader(basePath, section.folder),
	}));

	return {
			props: {
					sections: sectionsWithImages,
			},
	};
};