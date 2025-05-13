import Head from "next/head";
import { Gallery } from "@/components/Gallery";
import { playfair } from "@/lib/fonts";
import StickyCTA from "@/components/StickyCTA/StickyCTA";

const GalleryPage = () => {
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

            <div className="text-center">
                <h1 className={`${playfair.className} text-3xl font-bold my-6`}>
                    Gallery
                </h1>
                <Gallery />
                <StickyCTA />
            </div>
        </>
    );
};

export default GalleryPage;
