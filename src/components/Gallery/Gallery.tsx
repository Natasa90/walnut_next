"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { images } from "@/lib/const/images";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (currentIndex !== null) {
            setCurrentIndex((prev) => (prev! + 1) % images.length);
        }
    };

    const handlePrev = () => {
        if (currentIndex !== null) {
            setCurrentIndex(
                (prev) => (prev! - 1 + images.length) % images.length
            );
        }
    };

    const handleClose = () => setCurrentIndex(null);

    // Escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    return (
        <>
            <div className="mx-4 columns-1 sm:columns-2 md:columns-3 gap-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="rounded shadow-md transition-transform duration-300 hover:scale-105 mb-8"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {currentIndex !== null && (
                <div
                    onClick={handleClose}
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            width={800}
                            height={200}
                            className="rounded-lg max-w-full max-h-full object-contain"
                        />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
