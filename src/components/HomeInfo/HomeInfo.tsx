import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export const HomeInfo = () => {
    return (
        <div className="flex flex-wrap">
            <div className="flex flex-col p-6 justify-center items-center gap-2">
                <h2 className="text-2xl">Walnut Pool House</h2>
                <h3 className="italic text-gray-500">- Where Nature Meets Refined Living -</h3>
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
                    <div className="mt-4 cursor-pointer flex justify-center items-center bg-gray-700  hover:bg-gray-500 text-white py-5 px-10 rounded-xl gap-4">
                        <p>Learn more </p>
                        <MdArrowForwardIos />
                    </div>
                </Link>
            </div>
            <div className="m-4">
                <Image
                    src="/images/home_info.jpeg"
                    alt="Walnut House Front"
                    width={2500}
                    height={100}
                />
            </div>
        </div>
    );
};
