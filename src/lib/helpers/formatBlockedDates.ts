export const formatBlockedDates = (
  bookings: { start_date: string; end_date: string }[]
): Date[] => {
  return bookings.flatMap(({ start_date, end_date }) => {
    const start = new Date(start_date);
    const end = new Date(end_date);
    const datesBetween = [];

    let current = new Date(start);
    while (current <= end) {
      datesBetween.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return datesBetween;
  });
};
