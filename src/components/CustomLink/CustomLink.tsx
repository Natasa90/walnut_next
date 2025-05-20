import { FC } from "react";
import Link from "next/link";
import { CustomLinkProps } from "@/types/Types";

export const CustomLink: FC<CustomLinkProps> = ({
    href,
    title,
    leftIcon,
    rightIcon,
}) => {
    return (
        <div className="flex items-center justify-center">
            <Link href={href}>
                <div className="border border-gray-400 cursor-pointer transition-transform hover:scale-105 flex justify-center items-center gap-3 bg-gradient-to-r from-zinc-700 to-lime-600 hover:from-zinc-800 hover:to-lime-700 text-white font-semibold py-4 rounded-full shadow-md w-64">
                    <span className="text-lg">{leftIcon}</span>
                    <span>{title}</span>
                    <span className="text-sm">{rightIcon}</span>
                </div>
            </Link>
        </div>
    );
};
