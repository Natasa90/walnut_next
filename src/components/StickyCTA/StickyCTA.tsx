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
        fixed bottom-0 left-0 right-0
        transition-transform duration-300
        ${show ? "translate-y-0" : "translate-y-full"}
        bg-gray-700 text-white py-4 text-center z-50 shadow-lg
        md:hidden
      `}
        >
            <button className="px-6 py-2 bg-gray-300 text-black rounded-md font-bold">
                <div className="flex items-center gap-4">
                    <p>Call us!</p>
                    <FaPhoneAlt />
                </div>
            </button>
        </div>
    );
};

export default StickyCTA;
