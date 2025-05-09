import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/Supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed."}); 
	}

	const { fullName, email, phone, message } = req.body; 

	try {
		const { error } = await supabase.from("inquiries").insert([
			{
				name: fullName,
				email,
				phone, 
				message
			}
		]);

		if (error) {
			console.error("Supabase error:", error);
			return res.status(500).json({ message: "Database insert failed." })

		}
		return res.status(200).json({ Message: "Success" }); 

	} catch (error) {
		console.error("Error sending inquiry:", error); 
		return res.status(500).json({ message: "Failed to submit inquiry" });
	}
}