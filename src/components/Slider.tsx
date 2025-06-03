import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

export interface SliderProps {
  title: string;
  data: {
    media: Array<{
      src: { src: string };
      type: "image";
    }>;
    left: string;
    right: string;
  };
}

const Slider: React.FC<SliderProps> = ({ title, data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h3 className="text-3xl font-serif mb-8 text-white">{title}</h3>
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : data.media.length - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          onClick={() => setActiveSlide((prev) => (prev < data.media.length - 1 ? prev + 1 : 0))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Main Slider */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {data.media[activeSlide].type === "image" && (
                <div className="relative w-full h-full">
                  <Image
                    src={data.media[activeSlide].src.src}
                    alt={`${title} - Slide ${activeSlide + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    priority={activeSlide === 0}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {data.media.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide ? "bg-white w-4" : "bg-gray-500 hover:bg-gray-400"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="prose prose-sm prose-invert max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: data.left }}
        />
        <div
          className="prose prose-sm prose-invert max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: data.right }}
        />
      </div>
    </div>
  );
};

export default Slider;
