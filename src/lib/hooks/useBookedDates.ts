import { useState, useEffect } from "react";

export const useBookedDates = () => {
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookedDates = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/booked-dates");
                if (!res.ok) {
                    throw new Error("Failed to fetch booked dates");
                }
                const data = await res.json();

                const blockedDates = data.flatMap(
                    (booking: { start_date: string; end_date: string }) => {
                        const start = new Date(booking.start_date);
                        const end = new Date(booking.end_date);

                        const datesBetween = [];
                        let current = new Date(start);
                        while (current <= end) {
                            datesBetween.push(new Date(current));
                            current.setDate(current.getDate() + 1);
                        }
                        return datesBetween;
                    }
                );
                setDisabledDates(blockedDates);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchBookedDates();
    }, []);

    return { disabledDates, loading, error };
};
