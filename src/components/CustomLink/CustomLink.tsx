import { FC, ReactNode } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

interface CustomLinkProps {
    href: string;
    title: string;
    leftIcon?: ReactNode;
    rightIcon: ReactNode;
}

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
