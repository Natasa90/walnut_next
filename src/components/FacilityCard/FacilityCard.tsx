import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { FacilityCardProps } from "@/types/Types";

export const FacilityCard: FC<FacilityCardProps> = ({ title, icon }) => {
	const t = useCommonTranslation();
    return (
        <div className="flex flex-col items-center justify-center h-38 bg-white rounded-xl shadow-xl hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer gap-3">
            <FontAwesomeIcon
                icon={icon}
								size="2xl"
                className="text-gray-500 mb-2" 
            />
            <p className="text-sm text-center font-medium text-gray-800">
                {t(title)}
            </p>
        </div>
    );
};
