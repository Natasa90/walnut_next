import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

export const ButtonsBookingContact = () => {
    return (
        <div className="flex flex-col items-center gap-6 justify-center mb-12">
            <Link href="/booking">
                <div className="cursor-pointer transition-transform hover:scale-105 flex justify-center items-center gap-3 bg-gradient-to-r from-gray-600 to-green-600 hover:from-gray-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-md w-64">
                    <FaRegCalendarCheck className="text-lg" />
                    <span>Check availability for Booking</span>
                    <MdArrowForwardIos className="text-sm" />
                </div>
            </Link>

            <Link href="/contact">
                <div className="cursor-pointer transition-transform hover:scale-105 flex justify-center items-center gap-3 bg-gradient-to-r from-zinc-700 to-lime-600 hover:from-zinc-800 hover:to-lime-700 text-white font-semibold py-4 px-8 rounded-full shadow-md w-64">
                    <FaPhoneAlt className="text-lg" />
                    <span>Contact us!</span>
                    <MdArrowForwardIos className="text-sm" />
                </div>
            </Link>
        </div>
    );
};
