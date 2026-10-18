import React, { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

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
  const reduceMotion = useReducedMotion();
  const slideId = useId();
  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + data.media.length) % data.media.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h3 className="text-3xl font-serif mb-8 text-white">{title}</h3>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} images`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changeSlide(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="relative">
          <button
            type="button"
            aria-label={`Previous image for ${title}`}
            aria-controls={slideId}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
            onClick={() => changeSlide(-1)}
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={`Next image for ${title}`}
            aria-controls={slideId}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
            onClick={() => changeSlide(1)}
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div id={slideId} className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.1 : 0.18, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={data.media[activeSlide].src.src}
                  alt={`${title} - Slide ${activeSlide + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) calc(100vw - 64px), 1024px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          {data.media.map((_, index) => (
            <button
              type="button"
              key={index}
              className="flex h-11 w-11 items-center justify-center rounded-full group"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show image ${index + 1} of ${data.media.length} for ${title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              aria-controls={slideId}
            >
              <span aria-hidden="true" className={`h-2 rounded-full transition-colors ${index === activeSlide ? "bg-white w-4" : "bg-gray-500 group-hover:bg-gray-400 w-2"}`} />
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Image {activeSlide + 1} of {data.media.length} for {title}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose prose-sm prose-invert max-w-none text-gray-300 text-left" dangerouslySetInnerHTML={{ __html: data.left }} />
        <div className="prose prose-sm prose-invert max-w-none text-gray-300 text-left" dangerouslySetInnerHTML={{ __html: data.right }} />
      </div>
    </div>
  );
};

export default Slider;
