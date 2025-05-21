import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { addDays } from "date-fns";
import { CalendarPicker } from "@/components/BookingElements/CalendarPicker";
import { BookingFormModal } from "@/components/BookingElements/BookingFormModal";
import { getBookedDates } from "@/lib/helpers/getBookedDates";
import { formatBlockedDates } from "@/lib/helpers/formatBlockedDates";
import { MyDateRange } from "@/components/BookingElements/CalendarPicker";
import { getNextAvailableDate } from "@/lib/helpers/getNextAvailableDate";
import { Prices } from "@/components/BookingElements/Prices";
import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";
import { SuccessBookingModal } from "@/components/SuccessSubmitModal";

const BookingPage = ({
    initialDisabledDates,
}: {
    initialDisabledDates: string[];
}) => {
    const [disabledDates, setDisabledDates] = useState<Date[]>(
        initialDisabledDates.map((d) => new Date(d))
    );
    const [rentType, setRentType] = useState<"daily" | "nightly">("daily");
    const nextAvailableDate = getNextAvailableDate(
        disabledDates.map((d) => new Date(d))
    );
    const [dateRange, setDateRange] = useState<MyDateRange[]>([
        {
            startDate: nextAvailableDate,
            endDate: nextAvailableDate,
            key: "selection",
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const t = useCommonTranslation();

    useEffect(() => {
        const loadDates = async () => {
            const booked = await getBookedDates();
            const formatted = formatBlockedDates(booked);
            setDisabledDates(formatted);
        };

        loadDates();
    }, []);

    useEffect(() => {
        const nextAvailable = getNextAvailableDate(
            disabledDates.map((d) => new Date(d))
        );

        if (nextAvailable) {
            setDateRange([
                {
                    startDate: nextAvailable,
                    endDate: nextAvailable,
                    key: "selection",
                },
            ]);
        }
    }, [rentType, disabledDates]);

    const handleBookingSuccess = async () => {
        const updated = await getBookedDates();
        const formatted = formatBlockedDates(updated);
        setDisabledDates(formatted);
        setIsModalOpen(false);
        setShowSuccessModal(true);
    };

    const handleSelect = (ranges: any) => {
        const selection = ranges?.selection;
        if (!selection) return;

        const selectedStart = selection.startDate;
        const selectedEnd = selection.endDate;

        if (rentType === "daily") {
            // Always force a single-day selection
            setDateRange([
                {
                    startDate: selectedStart,
                    endDate: selectedStart,
                    key: "selection",
                },
            ]);
        } else {
            // Allow a full range for nightly
            setDateRange([
                {
                    startDate: selectedStart,
                    endDate: selectedEnd ?? selectedStart, // fallback in case endDate is undefined
                    key: "selection",
                },
            ]);
        }
    };
    return (
        <>
            <Head>
                <title>Book Your Stay | Check Availability & Prices</title>
                <meta
                    name="description"
                    content="Select your dates, view pricing, and easily book your stay at our cozy property. Choose between daily or nightly rates."
                />
                <meta
                    property="og:title"
                    content="Book Your Stay | Check Availability & Prices"
                />
                <meta
                    property="og:description"
                    content="Select your dates, view pricing, and easily book your stay at our cozy property."
                />
                <meta property="og:type" content="website" />
            </Head>

            <div>
                <div className="mx-7 my-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="md:flex-[1] md:px-6">
                        <Prices />
                    </div>
                    <div className="flex flex-row justify-center gap-4 md:flex-[0_0_200px]">
                        <label
                            htmlFor="rentType"
                            className="text-[#596e79] font-medium mt-1 block "
                        >
                            {t("prices.typeOfRent")}
                        </label>
                        <select
                            id="rentType"
                            className="px-4 py-1 border rounded-md"
                            value={rentType}
                            onChange={(e) =>
                                setRentType(
                                    e.target.value as "daily" | "nightly"
                                )
                            }
                        >
                            <option value="daily">{t("prices.daily")}</option>
                            <option value="nightly">
                                {t("prices.nightly")}
                            </option>
                        </select>
                    </div>
                    <div className="md:flex-[2] shadow-md pb-12">
                        <CalendarPicker
                            dateRange={dateRange}
                            handleSelect={handleSelect}
                            disabledDates={disabledDates.map(
                                (d) => new Date(d)
                            )}
                            onBookClick={() => setIsModalOpen(true)}
                            rentType={rentType}
                        />
                    </div>
                </div>

                {isModalOpen && (
                    <BookingFormModal
                        dateRange={dateRange[0]}
                        onClose={() => setIsModalOpen(false)}
                        typeOfRent={rentType}
                        onBookingSuccess={handleBookingSuccess}
                    />
                )}
                {showSuccessModal && (
                    <SuccessBookingModal
                        isOpen={showSuccessModal}
                        onClose={() => setShowSuccessModal(false)}
                        title={t("bookingSuccessTitle")}
                    >
                        <p>{t("bookingSuccessMessage")}</p>
                        <p>{t("bookingSuccessSignature")}</p>
                    </SuccessBookingModal>
                )}
            </div>
        </>
    );
};

export default BookingPage;

export async function getStaticProps({ locale }: { locale: string }) {
    try {
        const bookings = await getBookedDates();
        const disabledDates = formatBlockedDates(bookings);
        const translations = await serverSideTranslations(locale, ["common"]);

        return {
            props: {
                initialDisabledDates: disabledDates.map((date) =>
                    date.toISOString()
                ),
                ...translations,
            },
        };
    } catch (error) {
        const translations = await serverSideTranslations(locale, ["common"]);

        return {
            props: {
                disabledDates: [],
                ...translations,
            },
        };
    }
}
