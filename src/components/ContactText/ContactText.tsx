import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactText = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-auto px-4 items-center gap-2">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Get in Touch!
            </h2>
            <p className="mb-6 text-center">
                We’d love to hear from you! Whether you have questions about our
                rental property, need more information, or just want to chat
                before booking, feel free to reach out. Use the form below to
                contact us directly, and we'll get back to you as soon as
                possible.
            </p>
            {/*<Link href="/">
                <p className="flex bg-white rounded-2xl p-4 text-black w-70 items-center justify-center gap-4 hover:bg-gray-100">
                    <IoChevronBack size={24} />
                    Back to Home Page
                </p>
            </Link>

            {/* Link to Booking Page 
            <Link href="/booking">
                <p className="flex bg-white rounded-2xl p-4 text-black w-70 items-center justify-center gap-4 hover:bg-gray-100">
                    <IoChevronBack size={24} />
                    Book Now!
                </p>
            </Link>

            <div className="text-center bg-white p-4 rounded-xl">
                <a
                    href="tel:+603065700"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
                >
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    Call Us
                </a>
            </div>
						*/}
						
        </div>
    );
};
