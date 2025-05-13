import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { playfair } from "@/lib/fonts";

export const HomeInfo = () => {
    return (
        <div className="flex flex-wrap shadow-md">
            <div className="flex flex-col p-6 justify-center items-center gap-2">
                <h2 className={`${playfair.className} text-2xl`}>
                    Walnut Pool House
                </h2>
                <h3 className="italic text-gray-500">
                    - Where Nature Meets Refined Living -
                </h3>
                <p className="mt-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </p>
                <Link href="/about">
                    <Link href="/booking">
                        <div className="cursor-pointer transition-transform hover:scale-105 flex justify-center items-center gap-3 bg-gradient-to-r from-gray-600 to-green-600 hover:from-gray-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-md w-64">
                            <span>Learn more</span>
                            <MdArrowForwardIos className="text-sm" />
                        </div>
                    </Link>
                </Link>
            </div>
            <div className="m-4">
                <Image
                    src="/images/home_info.jpeg"
                    alt="Walnut House Front"
                    width={2500}
                    height={100}
                    className="rounded-xl"
                />
            </div>
        </div>
    );
};
