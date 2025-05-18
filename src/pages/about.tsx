import Head from "next/head";
import { GetStaticProps } from 'next';
import { loadTranslation } from "@/lib/helpers/loadTranslation";
import { AboutUs } from "@/components/AboutUs";
import StickyCTA from "@/components/StickyCTA/StickyCTA";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Our Family & Property | HabitDesk</title>
                <meta
                    name="description"
                    content="Learn more about the family behind Walnut Pool House and the story of our beautiful property. Discover our mission and values."
                />
                <meta
                    property="og:title"
                    content="About Our Family & Property | Walnut Pool House"
                />
                <meta
                    property="og:description"
                    content="Learn more about the family behind Walnut Pool House and the story of our beautiful property."
                />
                <meta property="og:type" content="website" />
            </Head>
            <div className="p-6">
                <AboutUs />
                <StickyCTA />
            </div>
        </>
    );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return loadTranslation(context);
};