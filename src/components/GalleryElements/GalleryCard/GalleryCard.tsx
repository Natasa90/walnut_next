import { FC, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GalleryModal } from '../GalleryModal';
import { playfair } from "@/lib/fonts";
import { GalleryCardProps } from '@/types/Types';

export const GalleryCard: FC<GalleryCardProps> = ({ title, imagePaths }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer w-full max-w-2xl mx-auto p-4 border text-center border-amber-200 rounded-3xl shadow-lg bg-amber-50 mb-8"
      >
        <h2 className={`${playfair.className} text-xl font-semibold mb-3`}>{title}</h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={scrollRef}
            onClick={() => setIsModalOpen(true)}
            className="flex overflow-x-auto gap-2 scrollbar-hide snap-x snap-mandatory"
          >
            {imagePaths.map((path, idx) => (
              <img
                key={idx}
                src={path}
                alt={`${title} ${idx}`}
                className="h-120 flex-shrink-0 snap-center object-cover rounded-lg w-full sm:w-64"
                draggable={false}
              />
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      {isModalOpen && <GalleryModal title={title} imagePaths={imagePaths} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
