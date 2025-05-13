import Image from "next/image";
import { FC } from "react";

interface ThingsToSeeCardProps {
  title: string;
  location: string;
  significance: string;
  whatToSee: string;
  bonus?: string;
  imageSrc: string;
}

export const ThingsToSeeCard: FC<ThingsToSeeCardProps> = ({
  title,
  location,
  significance,
  whatToSee,
  bonus,
  imageSrc,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out mb-6 md:mb-8">
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-t-xl"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#8B4513] mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{location}</p>
        <p className="text-gray-800 text-sm">{significance}</p>
        <p className="text-gray-700 text-sm mt-2">{whatToSee}</p>
        {bonus && (
          <p className="text-sm text-[#8B4513] mt-2 italic">Bonus: {bonus}</p>
        )}
      </div>
    </div>
  );
};
