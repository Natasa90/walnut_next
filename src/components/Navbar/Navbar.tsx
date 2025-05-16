import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { LanguageSwitcher } from "../LanguageSwitcher";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/booking", label: "Booking" },
    { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="shadow-md">
            <div className="mx-4 md:mx-10 px-4 py-3 flex justify-between items-center relative">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/images/Logo.png"
                            alt="Walnut House Logo"
                            width={100}
                            height={80}
                            className="rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6 sm:w-[100px] sm:h-[100px]"
                        />
                        {/* Title hidden on small screens */}
                        <p
                            className={`${playfair.className} ml-4 mb-1 text-2xl hidden lg:block`}
                        >
                            Walnut Pool House
                        </p>
                    </div>
                </Link>

                {/* Desktop links */}
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

                {/* Hamburger menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl absolute top-10 right-4"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <FaTimes size={36} /> : <FaBars size={36} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <>
                    {/* Overlay to block the background */}
                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Mobile menu itself */}
                    <div className="md:hidden fixed top-20 right-4 w-48 bg-white/60 backdrop-blur-lg rounded-lg shadow-lg p-4 z-50 animate-slide-in opacity-0">
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
