"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import "./SingleImageSlider.scss";

interface SingleImageSliderProps {
  imageList: StaticImageData[];
  slideInterval?: number; // Interval in milliseconds
}

const SingleImageSlider: React.FC<SingleImageSliderProps> = ({
  imageList,
  slideInterval = 5000, // Default to 5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to reset the timeout
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // Ensure we have images to slide and interval is positive
    if (imageList.length === 0 || slideInterval <= 0) {
      return;
    }

    resetTimeout(); // Clear any existing timeout

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    // Cleanup timeout on component unmount or when dependencies change
    return () => {
      resetTimeout();
    };
  }, [currentIndex, imageList, slideInterval]); // Re-run effect if these change

  // Handle case where imageList might be empty
  if (!imageList || imageList.length === 0) {
    return (
      <div className="single-image-slider single-image-slider--empty">
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <div className="single-image-slider">
      {/* IMAGE CAROUSEL WRAPPER - for overflow hidden */}
      <div className="image-carousel-wrapper">
        {/* IMAGE CAROUSEL - this will move */}
        <div
          className="image-carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0} // Prioritize loading the first image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* SLIDE INDICATOR */}
      <div className="indicator">
        {imageList.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`indicator-item ${
              currentIndex === index ? "indicator-item--active" : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
              resetTimeout(); // Reset timer when manually changing slide
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleImageSlider;
