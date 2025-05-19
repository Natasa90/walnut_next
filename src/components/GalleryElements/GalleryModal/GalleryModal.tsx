import { FC } from "react";
import { FaTimes } from "react-icons/fa";

interface GalleryModalProps {
    title: string;
    imagePaths: string[];
    onClose: () => void;
}

export const GalleryModal: FC<GalleryModalProps> = ({
    title,
    imagePaths,
    onClose,
}) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 my-2"
            style={{
                backgroundColor: "rgba(255,255,255,0.1)", 
                backdropFilter: "blur(8px)", 
                WebkitBackdropFilter: "blur(8px)",
            }}
        >
            <div className="relative bg-amber-50 p-6 rounded-lg border border border-amber-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    <FaTimes size={20} />
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {imagePaths.map((path, idx) => (
                        <img
                            key={idx}
                            src={path}
                            alt={`${title} ${idx}`}
                            className="w-full h-auto object-cover rounded-md"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
