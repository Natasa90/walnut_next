import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/Supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == "POST") {

	const { fullName, email, phone, message, startDate, endDate, typeOfRent, numOfPersons, totalPrice } = req.body; 

	try {
		const { data, error } = await supabase.from("bookings").insert([
			{
				full_name: fullName,
				email,
				phone,
				message,
				start_date: startDate,
				end_date: endDate,
				rent: typeOfRent,
				persons: numOfPersons,
				total_price: totalPrice,
			}
		]);

		if (error) {
			console.error("Supabase error:", error);
			return res.status(500).json({ message: "Database insert failed." })

		}
		return res.status(200).json({ message: "Booking successfull! We'll contact you soon. Thank you!"})

		} catch (error) {
			console.error ("Unexpected error submitting booking:", error); 
			return res.status(500).json({ message: "Failed to submit booking." })
		}
	}

if (req.method === "GET") {
		const { page = 1, limit = 20 } = req.query;

		const from = (+page - 1) * +limit;
		const to = from + +limit - 1;

		const { data, error } = await supabase
			.from("bookings")
			.select("*")
			.order("start_date", { ascending: true })
			.range(from, to);

		if (error) {
			console.error("Supabase fetch error:", error);
			return res.status(500).json({ message: "Failed to fetch bookings." });
		}

		return res.status(200).json({ bookings: data });
	
	}	

	return res.status(405).json({ message: "Method not allowed." });
}
