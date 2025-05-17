import { playfair } from "@/lib/fonts";
import { facilities } from "@/lib/const/facilities";
import { FacilityCard } from "../FacilityCard/FacilityCard";

export const FacilitiesSection = () => {
    return (
        <section className="flex flex-col items-center my-5 shadow-md pb-12">
            <h2 className={`${playfair.className} text-center text-2xl`}>
                Facilities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
                {facilities.map((facility, index) => (
                    <FacilityCard
                        key={index}
                        title={facility.title}
                        icon={facility.icon}
                    />
                ))}
            </div>
        </section>
    );
};
