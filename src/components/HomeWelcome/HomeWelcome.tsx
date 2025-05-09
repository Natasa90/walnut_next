import { useRouter } from "next/router";

export const HomeWelcome = () => {
    const router = useRouter();
    const handleBooking = () => {
        router.push("/booking");
    };
    return (
        <div
            className="relative bg-cover bg-center h-[84vh] flex items-center justify-center text-center"
            style={{ backgroundImage: "url('/images/home-cover1.jpg')" }}
        >
            <div className="p-8 text-white max-w-xl">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide">
                    Relax. <br /> Unwind.
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Escape to nature in our charming A-frame retreat nestled in
                    Brezane.
                </p>
                <button
                    onClick={handleBooking}
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                    Book Now!
                </button>
            </div>
        </div>
    );
};
