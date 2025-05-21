import jsPDF from "jspdf";

export const generateBookingPDF = (bookingData: {
  fullName: string;
  email?: string;
  phone: string;
  message?: string;
  startDate: Date;
  endDate: Date;
  typeOfRent: string;
  numOfPersons: number;
  totalPrice: number;
}) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Booking Confirmation", 20, 20);
  doc.setFontSize(12);

  const lines = [
    `Name: ${bookingData.fullName}`,
    `Email: ${bookingData.email || "N/A"}`,
    `Phone: ${bookingData.phone}`,
    `Message: ${bookingData.message || "N/A"}`,
    `Rental Type: ${bookingData.typeOfRent}`,
    `Dates: ${bookingData.typeOfRent === "nightly"
      ? `${bookingData.startDate.toDateString()} - ${bookingData.endDate.toDateString()}`
      : bookingData.startDate.toDateString()}`,
    `Number of Persons: ${bookingData.numOfPersons}`,
    `Total Price: €${bookingData.totalPrice.toFixed(2)}`
  ];

  lines.forEach((line, index) => {
    doc.text(line, 20, 40 + index * 10);
  });

  doc.save("booking-confirmation.pdf");
};