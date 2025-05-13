import Head from "next/head";
import { AboutUs } from "@/components/AboutUs";
import StickyCTA from "@/components/StickyCTA/StickyCTA";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Our Family & Property | HabitDesk</title>
                <meta
                    name="description"
                    content="Learn more about the family behind HabitDesk and the story of our beautiful property. Discover our mission and values."
                />
                <meta
                    property="og:title"
                    content="About Our Family & Property | HabitDesk"
                />
                <meta
                    property="og:description"
                    content="Learn more about the family behind HabitDesk and the story of our beautiful property."
                />
                <meta property="og:type" content="website" />
            </Head>
            <div>
                <AboutUs />
                <StickyCTA />
            </div>
        </>
    );
};

export default AboutPage;
