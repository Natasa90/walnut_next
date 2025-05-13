import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const StickyCTA = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                fixed bottom-4 left-0 right-0 flex justify-center
                transition-transform duration-300
                ${show ? "translate-y-0" : "translate-y-full"}
                z-50 md:hidden pointer-events-none
            `}
        >
            <button
                className="pointer-events-auto flex items-center gap-3 bg-gradient-to-r from-green-700 to-lime-600 hover:from-green-800 hover:to-lime-700 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-base transition-transform hover:scale-105 active:scale-95"
                onClick={() => window.location.href = 'tel:+1234567890'}
            >
                <FaPhoneAlt className="animate-pulse-on-hover" />
                <span>Call us!</span>
            </button>
        </div>
    );
};

export default StickyCTA;
