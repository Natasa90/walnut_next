import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { playfair } from "@/lib/fonts";
import { facilities } from "@/lib/const/facilities";
import { FacilityCard } from "../FacilityCard";

export const FacilitiesSection = () => {
	const t = useCommonTranslation();
    return (
        <section className="flex flex-col items-center mx-5 mt-4">
            <h2 className={`${playfair.className} text-center text-3xl text-gray-700`}>
                {t("home.facilities.facilitiesTitle")}
            </h2>
            <div className="flex flex-wrap mt-8">
                {facilities.map((facility, index) => (
                    <div key={index} className="w-1/2 px-2 mb-4">
                        <FacilityCard
                            key={index}
                            title={facility.title}
                            icon={facility.icon}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
