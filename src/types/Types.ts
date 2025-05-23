import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MyDateRange } from "@/components/BookingElements/CalendarPicker";


export interface BookingFormModalProps {
	dateRange: { startDate: Date; endDate: Date };
	onClose: () => void;
	typeOfRent: "daily" | "nightly";
	onBookingSuccess: () => void;
}

export interface FormValues {
	fullName: string;
	email?: string;
	phone: string;
	message?: string;
	typeOfRent: string;
	numOfPersons: number;
	totalPrice: number;
}

export interface CalendarPickerProps {
	dateRange: MyDateRange[];
	handleSelect: (ranges: any) => void;
	disabledDates?: Date[];
	onBookClick: () => void;
	rentType: "daily" | "nightly";
}

export interface CustomLinkProps {
	href: string;
	title: string;
	leftIcon?: ReactNode;
	rightIcon: ReactNode;
}

export interface FacilityCardProps {
	title: string;
	icon: IconDefinition;
}

export interface GalleryCardProps {
  title: string;
  imagePaths: string[];
}

export interface GalleryModalProps {
	title: string;
	imagePaths: string[];
	onClose: () => void;
}

interface CustomImageProps {
	src: string;
	alt: string;
}

export interface HomePageCardProps {
	title: string;
	subTitle?: string;
	paragraph1: string;
	paragraph2: string;
	paragraph3?: string;
	link: ReactNode;
	link2?: ReactNode;
	image1: CustomImageProps;
	image2: CustomImageProps;
	image3: CustomImageProps;
}

export interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode;
}

export interface ThingsToSeeCardProps {
	title: string;
	location: string;
	significance: string;
	whatToSee: string;
	bonus?: string;
	imageSrc: string;
	href: string;
}
