import { FC } from "react";
import { ThingsToSeeCard } from "../ThingsToSeeCard";
import { thingsToSee } from "@/lib/const/thingsTooSee";
import { playfair } from "@/lib/fonts";
import { useTranslation } from "react-i18next";

export const ThingsToSeeSection: FC = () => {
    const { t } = useTranslation("common");
    const thingKeys = [
        "viminacium",
        "milenaPavlovicBarili",
        "cacalica",
        "silverLake",
        "tumaneMonastery",
        "golubacFortress",
    ];
    return (
        <section className="w-full py-12 px-4 bg-gray-300 border-t-3 border-gray-400">
            <h2 className={`${playfair.className} text-2xl text-center mb-5`}>
                {t("home.thingsToSee.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {thingsToSee.map((item, index) => {
                    const key = thingKeys[index];
                    return (
                        <ThingsToSeeCard
                            key={index}
                            title={t(`home.thingsToSee.${key}.title`)}
                            location={t(`home.thingsToSee.${key}.location`)}
                            significance={t(`home.thingsToSee.${key}.significance`)}
                            whatToSee={t(`home.thingsToSee.${key}.whatToSee`)}
                            bonus={t(`home.thingsToSee.${key}.bonus`)}
                            imageSrc={item.imageSrc}
                            href={item.href}
                        />
                    );
                })}
            </div>
        </section>
    );
};
