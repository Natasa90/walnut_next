import { useState } from "react";
import { addDays } from "date-fns";
import { CalendarPicker } from "@/components/BookingElements/CalendarPicker";
import { BookingFormModal } from "@/components/BookingElements/BookingFormModal";
import { getBookedDates } from "@/lib/helpers/getBookedDates";
import { formatBlockedDates } from "@/lib/helpers/formatBlockedDates";

type BookingPageProps = {
  disabledDates: string[]; 
};

const BookingPage = ({ disabledDates }: BookingPageProps) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };


    return (
        <div className="border-t p-10">
                <CalendarPicker
                    dateRange={dateRange}
                    handleSelect={handleSelect}
										disabledDates={disabledDates.map((d) => new Date(d))}
                    onBookClick={() => setIsModalOpen(true)} 
                />
            {isModalOpen && (
                <BookingFormModal
                    dateRange={dateRange[0]}
                    onClose={() => setIsModalOpen(false)}
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
