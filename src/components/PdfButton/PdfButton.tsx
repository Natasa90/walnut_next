import { jsPDF } from "jspdf";

interface BookingData {
  fullName: string;
  email?: string;
  phone: string;
  message?: string;
  startDate: string;
  endDate: string;
  typeOfRent: string;
  numOfPersons: number;
  totalPrice: number;
}

export const PdfButton = ({ booking }: { booking: BookingData }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Booking Confirmation", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${booking.fullName}`, 20, 40);
    doc.text(`Email: ${booking.email || "N/A"}`, 20, 50);
    doc.text(`Phone: ${booking.phone}`, 20, 60);
    doc.text(`Message: ${booking.message || "N/A"}`, 20, 70);
    doc.text(`Rental Type: ${booking.typeOfRent}`, 20, 80);

    const dateRangeText =
      booking.typeOfRent === "nightly"
        ? `${new Date(booking.startDate).toDateString()} - ${new Date(booking.endDate).toDateString()}`
        : new Date(booking.startDate).toDateString();

    doc.text(`Dates: ${dateRangeText}`, 20, 90);
    doc.text(`Number of Persons: ${booking.numOfPersons}`, 20, 100);
    doc.text(`Total Price: €${booking.totalPrice.toFixed(2)}`, 20, 110);
    doc.save("booking-confirmation.pdf");
  };

  return (
    <button
      onClick={generatePdf}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Download Booking PDF
    </button>
  );
};

