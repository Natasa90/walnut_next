import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";

export const Navbar = () => {
    const router = useRouter();
    const { t } = useTranslation("common");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: t("nav.home") },
        { href: "/about", label: t("nav.about") },
        { href: "/gallery", label: t("nav.gallery") },
        { href: "/booking", label: t("nav.booking") },
        { href: "/contact", label: t("nav.contact") },
    ];

    return (
        <nav className="shadow-md">
            <div className="mx-4 md:mx-10 px-4 py-3 flex justify-between items-center relative">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/images/Logo_trans.webp"
                            alt="Walnut House Logo"
                            width={100}
                            height={80}
                            className="rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6 sm:w-[100px] sm:h-[100px]"
                        />
                        <p
                            className={`${playfair.className} ml-4 mb-1 text-2xl hidden lg:block`}
                        >
                            Walnut Pool House
                        </p>
                    </div>
                </Link>
                <div className="hidden md:flex gap-6 mt-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${
                                playfair.className
                            } hover:scale-110 transition duration-200 text-sm md:text-base lg:text-xl ${
                                router.pathname === link.href
                                    ? "font-semibold text-red-500"
                                    : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl absolute top-10 right-4"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <FaTimes size={36} /> : <FaBars size={36} />}
                </button>
            </div>
            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Mobile menu itself */}
                    <div className="md:hidden fixed top-20 right-4 w-48 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-4 z-50 animate-slide-in opacity-0">
                        <div className="flex flex-col items-start gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`w-full text-left hover:underline transition duration-200 ${
                                        router.pathname === link.href
                                            ? "font-semibold"
                                            : ""
                                    }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <LanguageSwitcher />
                    </div>
                </>
            )}
        </nav>
    );
};
