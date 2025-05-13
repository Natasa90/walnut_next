import { HomeWelcome } from "@/components/HomeWelcome";
import { HomeInfo } from "@/components/HomeInfo";
import StickyCTA from "@/components/StickyCTA/StickyCTA";
import { facilities } from "@/lib/const/facilities";
import { FacilityCard } from "@/components/FacilityCard/FacilityCard";
import { playfair } from "@/lib/fonts";
import { BackyardSection } from "@/components/BackyardSection";
import { ThingsToSeeSection } from "@/components/ThingsToSeeSection";
import { ButtonsBookingContact } from "@/components/ButtonsBookContact";
import { FacilitiesSection } from "@/components/FacilitiesSection";

export default function Home() {
    return (
        <>
            <HomeWelcome />
            <HomeInfo />
            <StickyCTA />
            <FacilitiesSection />
            <BackyardSection imageSrc="/images/exterior2.webp" />
            <ButtonsBookingContact />
            <ThingsToSeeSection />
        </>
    );
}
