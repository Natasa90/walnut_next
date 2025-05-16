import Head from "next/head";
import { GetStaticProps } from 'next';
import { loadTranslation } from "@/lib/helpers/loadTranslation";
import { HomeWelcome } from "@/components/HomeWelcome";
import { HomeInfo } from "@/components/HomeInfo";
import StickyCTA from "@/components/StickyCTA/StickyCTA";
import { BackyardSection } from "@/components/BackyardSection";
import { ThingsToSeeSection } from "@/components/ThingsToSeeSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Welcome to Walnut Pool House | Your Dream Rental Home Awaits
                </title>
                <meta
                    name="description"
                    content="Discover your perfect rental home with Walnut Pool House! Explore facilities, images, and nearby attractions—book your stay today!"
                />
                <meta
                    property="og:title"
                    content="Welcome to Walnut Pool House | Your Dream Rental Home Awaits"
                />
                <meta
                    property="og:description"
                    content="Take a look at our stunning rental home, see the facilities, and plan your visit today!"
                />
                <meta property="og:type" content="website" />
            </Head>
            <HomeWelcome />
            <HomeInfo />
            <StickyCTA />
            <FacilitiesSection />
            <BackyardSection imageSrc="/images/exterior2.webp" />
            <ThingsToSeeSection />
        </>
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
  return loadTranslation(context);
};