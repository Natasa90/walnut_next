import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./CalendarPicker.module.css";

export type MyDateRange = {
    startDate: Date;
    endDate: Date;
    key: string;
};

interface CalendarPickerProps {
    dateRange: MyDateRange[];
    handleSelect: (ranges: any) => void;
    disabledDates?: Date[];
    onBookClick: () => void;
    rentType: "daily" | "nightly";
}

export const CalendarPicker = ({
    dateRange,
    handleSelect,
    disabledDates,
    onBookClick,
    rentType,
}: CalendarPickerProps) => {
    return (
        <div className="flex flex-col bg-[#dfd3c3] text-center p-8 rounded-2xl w-11/12 md:w-1/2 mx-auto">
            <h1 className="text-2xl font-semibold text-[#596e79] mb-6">
                Select Dates
            </h1>
            <div className="flex flex-col justify-center items-center mt-6">
                <div className={styles.customCalendar}>
                    <DateRange
                        ranges={dateRange}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={["#596e79"]}
                        disabledDates={disabledDates}
                        retainEndDateOnFirstSelection={false}
                        moveRangeOnFirstSelection={false}
                        dragSelectionEnabled={rentType === "nightly"}
                        dayClassName={(date: any) => {
                            if (
                                disabledDates?.some(
                                    (disabledDate) =>
                                        disabledDate.toDateString() ===
                                        date.toDateString()
                                )
                            ) {
                                return "rdrTaken";
                            }
                            return "";
                        }}
                        onPreviewChange={(value: any) => {
                            if (rentType === "daily" && value?.startDate) {
                                handleSelect({
                                    selection: {
                                        startDate: value.startDate,
                                        endDate: value.startDate,
                                        key: "selection",
                                    },
                                });
                            }
                        }}
                    />
                </div>
                <button
                    className="px-6 py-3  mt-4 rounded-xl bg-[#596e79] hover:bg-[#596e45] text-white disabled:bg-gray-900 w-[40%]"
                    disabled={!dateRange[0].startDate || !dateRange[0].endDate}
                    onClick={onBookClick}
                >
                    Book
                </button>
            </div>
        </div>
    );
};
