export const getNextAvailableDate = (disabledDates: Date[]): Date => {
	const today = new Date();
	let nextDate = new Date(today);

	while (disabledDates.some(
			(d) => d.toDateString() === nextDate.toDateString()
	)) {
			nextDate.setDate(nextDate.getDate() + 1);
	}

	return nextDate;
};
