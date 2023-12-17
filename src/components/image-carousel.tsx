// ImageCarousel.tsx
'use client'

import { ReactNode, FC, useState } from 'react';

interface ImageCarouselProps {
  children: ReactNode[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex-none">
          <button
            className="text-2xl text-gray-500 focus:outline-none"
            onClick={handlePrev}
          >
            &#9664;
          </button>
        </div>
        <div className="flex-grow">
          <div
            className="flex transition-transform ease-in-out duration-300 transform"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {children.map((child, index) => (
              <div key={index} className="w-full">
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-none">
          <button
            className="text-2xl text-gray-500 focus:outline-none"
            onClick={handleNext}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;


    