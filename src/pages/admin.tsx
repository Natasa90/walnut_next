import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";

interface Booking {
    id: number;
    full_name: string;
    email?: string;
    phone: string;
    start_date: string;
    end_date: string;
    message?: string;
}

const AdminDashboard = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [password, setPassword] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const page = useRef(1);
    const limit = 20;

    const storedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";

    useEffect(() => {
        if (isAuthenticated) {
            fetchBookings();
        }
    }, [isAuthenticated]);

    const fetchBookings = async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        try {
            const res = await fetch(
                `/api/bookings?page=${page.current}&limit=${limit}`
            );
            const { bookings } = await res.json();

            if (bookings.length < limit) setHasMore(false);
            setBookings((prev) => [...prev, ...bookings]);
            page.current += 1;
        } catch (err) {
            console.error("Error fetching bookings:", err);
        }

        setLoading(false);
    };

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const bottom =
            e.currentTarget.scrollHeight ===
            e.currentTarget.scrollTop + e.currentTarget.clientHeight;
        if (bottom) {
            fetchBookings();
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === storedPassword) {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Incorrect password. Please try again.");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex justify-center items-center h-screen">
                <form
                    onSubmit={handlePasswordSubmit}
                    className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
                >
                    <h2 className="text-2xl text-black mb-4">
                        Admin Dashboard
                    </h2>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter admin password"
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                        required
                    />
                    {error && (
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div
            className="admin-dashboard p-6"
            onScroll={handleScroll}
            style={{ height: "80vh", overflowY: "auto" }}
        >
            <h1 className="text-2xl text-white mb-6">
                Admin Dashboard - Bookings Overview
            </h1>

            <ul className="space-y-4">
                {bookings.map((booking) => (
                    <li
                        key={booking.id}
                        className="p-4 border border-gray-300 rounded"
                    >
                        <div className="font-semibold">{booking.full_name}</div>
                        <div className="text-gray-600">{booking.email}</div>
                        <div className="text-gray-600">
                            Phone: {booking.phone}
                        </div>
                        <div>
                            <strong>From:</strong>{" "}
                            {format(new Date(booking.start_date), "dd/MM/yyyy")}
                        </div>
                        <div>
                            <strong>To:</strong>{" "}
                            {format(new Date(booking.end_date), "dd/MM/yyyy")}
                        </div>
                        <div>
                            {booking.message && <strong>Message:</strong>}{" "}
                            {booking.message}
                        </div>
                    </li>
                ))}
            </ul>

            {loading && <div className="text-center mt-4">Loading...</div>}
            {!hasMore && (
                <div className="text-center mt-4">No more bookings to load</div>
            )}
        </div>
    );
};

export default AdminDashboard;
