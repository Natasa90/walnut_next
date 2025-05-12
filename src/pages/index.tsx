import { HomeWelcome } from "@/components/HomeWelcome";
import { HomeInfo } from "@/components/HomeInfo";
import StickyCTA from "@/components/StickyCTA/StickyCTA";

export default function Home() {
    return (
        <>
            <HomeWelcome />
            <HomeInfo />
						<StickyCTA />
        </>
    );
}
