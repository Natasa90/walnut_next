import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-6 right-6 z-50 p-3 bg-[#596e79] text-white rounded-full shadow-md hover:bg-[#445760] transition-colors"
				aria-label="Back to top"
			>
				<FaArrowUp className="text-lg" />
			</button>
		)
	);
};
