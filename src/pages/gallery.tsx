import { Gallery } from "@/components/Gallery";
import { playfair } from "@/lib/fonts";
import StickyCTA from "@/components/StickyCTA/StickyCTA";

const GalleryPage = () => {
    return (
        <div className="text-center">
					<h1 className={`${playfair.className} text-3xl font-bold my-6`}>Gallery</h1>
            <Gallery />
						<StickyCTA /> 
        </div>
    );
};

export default GalleryPage;
