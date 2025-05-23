import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SuccessModalProps } from "@/types/Types";

export const SuccessModal: FC<SuccessModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
}) => {
	if (!isOpen) return null;

	return (
			<div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center px-4">
					<div className="bg-white border border-amber-400 p-6 rounded-lg shadow-lg max-w-md w-full relative">
							<button
									onClick={onClose}
									className="absolute cursor-pointer top-3 right-3 text-xl text-gray-600 hover:text-red-500"
									aria-label="Close modal"
							>
									<AiOutlineClose />
							</button>
							{title && (
									<h2 className="text-xl font-semibold mb-4 text-center">
											{title}
									</h2>
							)}
							<div className="text-center">{children}</div>
					</div>
			</div>
	);
};

