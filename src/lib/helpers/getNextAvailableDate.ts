export const getNextAvailableDate = (
  start: Date, 
  disabledDates: Date[] = []
): Date => {
  let date = new Date(start);
  while (
    disabledDates.some(
      (disabledDate) => disabledDate.toDateString() === date.toDateString()
    )
  ) {
    date.setDate(date.getDate() + 1);
  }
  return date;
};
