import { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { CalendarPicker } from "@/components/BookingElements/CalendarPicker";
import { BookingFormModal } from "@/components/BookingElements/BookingFormModal";
import { getBookedDates } from "@/lib/helpers/getBookedDates";
import { formatBlockedDates } from "@/lib/helpers/formatBlockedDates";
import { MyDateRange } from "@/components/BookingElements/CalendarPicker";

type BookingPageProps = {
    disabledDates: string[];
};

const BookingPage = ({ disabledDates }: BookingPageProps) => {
    const [rentType, setRentType] = useState<"daily" | "nightly">("nightly");
    const [dateRange, setDateRange] = useState<MyDateRange[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
		useEffect(() => {
			const today = new Date();
			const tomorrow = addDays(today, 1);
		
			setDateRange([
				{
					startDate: today,
					endDate: rentType === "daily" ? today : tomorrow,
					key: "selection",
				},
			]);
		}, [rentType]);

		const handleSelect = (ranges: any) => {
			const selection = ranges?.selection;
			if (!selection) return;
		
			if (rentType === "daily") {
				const selectedDate = selection.startDate;
		
				setDateRange([
					{
						startDate: selectedDate,
						endDate: selectedDate,
						key: "selection", 
					},
				]);
			} else {
				setDateRange([selection]);
			}
		};
    return (
        <div>
            <div className="flex items-center gap-4 mx-7 my-6">
                <label
                    htmlFor="rentType"
                    className="text-[#596e79] font-medium"
                >
                    Type of Rent:
                </label>
                <select
                    id="rentType"
                    className="px-2 py-1 border rounded-md"
                    value={rentType}
                    onChange={(e) =>
                        setRentType(e.target.value as "daily" | "nightly")
                    }
                >
                    <option value="daily">Daily</option>
                    <option value="nightly">Nightly</option>
                </select>
            </div>
            <CalendarPicker
                dateRange={dateRange}
                handleSelect={handleSelect}
                disabledDates={disabledDates.map((d) => new Date(d))}
                onBookClick={() => setIsModalOpen(true)}
                rentType={rentType}
            />
            {isModalOpen && (
                <BookingFormModal
                    dateRange={dateRange[0]}
                    onClose={() => setIsModalOpen(false)}
										typeOfRent={rentType}
                />
            )}
        </div>
    );
};

export default BookingPage;

export async function getServerSideProps() {
    try {
        const bookings = await getBookedDates();
        const disabledDates = formatBlockedDates(bookings);

        return {
            props: {
                disabledDates: disabledDates.map((date) => date.toISOString()),
            },
        };
    } catch (error) {
        console.error("SSR error:", error);
        return {
            props: {
                disabledDates: [],
            },
        };
    }
}
