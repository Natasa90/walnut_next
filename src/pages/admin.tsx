import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/Supabase";
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
  const [password, setPassword] = useState<string>(""); // State to store password input
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // State to check if password is correct
  const [error, setError] = useState<string>(""); // State to show error message if password is wrong
  const page = useRef(1); // Keep track of the current page
  const limit = 20; // Number of items per page

  const storedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ""; // Get the password from environment variables

  useEffect(() => {
    // Initial fetch of bookings if authenticated
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  const fetchBookings = async () => {
    if (loading || !hasMore) return; // Prevent multiple fetches at the same time

    setLoading(true);

    // Fetch bookings from Supabase with pagination
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("start_date", { ascending: true })
      .range((page.current - 1) * limit, page.current * limit - 1);

    if (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
      return;
    }

    // Check if there are more bookings to load
    if (data && data.length < limit) {
      setHasMore(false); // No more bookings
    }

    // Add the new bookings to the existing ones
    setBookings((prev) => [...prev, ...data]);

    page.current += 1; // Increment the page number for the next fetch
    setLoading(false);
  };

  // Infinite scroll handler to detect when user reaches the bottom
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
    if (bottom) {
      fetchBookings();
    }
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === storedPassword) {
      setIsAuthenticated(true);
      setError(""); // Clear error if password is correct
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  // If not authenticated, show the password prompt
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handlePasswordSubmit}
          className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-2xl text-black mb-4">Admin Dashboard</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter admin password"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            required
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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

  // Show the dashboard after authentication
  return (
    <div
      className="admin-dashboard p-6"
      onScroll={handleScroll}
      style={{ height: "80vh", overflowY: "auto" }} // Add a scrollable area
    >
      <h1 className="text-2xl text-white mb-6">Admin Dashboard - Bookings Overview</h1>

      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="p-4 border border-gray-300 rounded">
            <div className="font-semibold">{booking.full_name}</div>
            <div className="text-gray-600">{booking.email}</div>
            <div className="text-gray-600">Phone: {booking.phone}</div>
            <div>
              <strong>From:</strong> {format(new Date(booking.start_date), "dd/MM/yyyy")}
            </div>
            <div>
              <strong>To:</strong> {format(new Date(booking.end_date), "dd/MM/yyyy")}
            </div>
            <div>{booking.message && <strong>Message:</strong>} {booking.message}</div>
          </li>
        ))}
      </ul>

      {loading && <div className="text-center mt-4">Loading...</div>}
      {!hasMore && <div className="text-center mt-4">No more bookings to load</div>}
    </div>
  );
};

export default AdminDashboard;
