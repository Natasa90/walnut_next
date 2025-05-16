import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { CustomLink } from "../CustomLink";
import { playfair } from "@/lib/fonts";

export const HomeInfo = () => {
    return (
        <div className="flex flex-wrap shadow-md my-6">
            <div className="flex flex-col p-6 justify-center items-center gap-2">
                <h2 className={`${playfair.className} text-2xl`}>
                    Walnut Pool House
                </h2>
                <h3 className="italic text-gray-900">
                    - Where Nature Meets Refined Living -
                </h3>
                <p className="my-6">
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
                <CustomLink
                    href="/about"
                    title="More about us"
                    rightIcon={<MdArrowForwardIos />}
                />
            </div>
            <div className="flex flex-col m-4">
                <Image
                    src="/images/Kitchen/Kitchen_indoor1.webp"
                    alt="Walnut House Front"
                    width={600}
                    height={400}
                    className="rounded-3xl p-4"
                />
								<Image
                    src="/images/Living_room/Livingroom17.webp"
                    alt="Walnut House Living Room"
                    width={800}
                    height={600}
                    className="rounded-3xl p-4"
                />
            </div>
        </div>
    );
};
