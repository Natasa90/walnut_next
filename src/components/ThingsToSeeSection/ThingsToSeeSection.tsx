import { FC } from "react";
import { ThingsToSeeCard } from "../ThingsToSeeCard";
import { thingsToSee } from "@/lib/const/thingsTooSee";
import { playfair } from "@/lib/fonts";

export const ThingsToSeeSection: FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-300 border-t-4">
      <h2 className={`${playfair.className} text-2xl text-center mb-5`}>
        Things to See Near Our Cottage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {thingsToSee.map((item, index) => (
          <ThingsToSeeCard
            key={index}
            title={item.title}
            location={item.location}
            significance={item.significance}
            whatToSee={item.whatToSee}
            bonus={item.bonus}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};
