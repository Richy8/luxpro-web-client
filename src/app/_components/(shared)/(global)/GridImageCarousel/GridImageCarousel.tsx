"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import "./GridImageCarousel.scss";

interface SingleImageSliderProps {
  imageList: StaticImageData[];
  slideInterval?: number;
}

const GridImageCarousel = ({
  imageList,
  slideInterval = 5000,
}: SingleImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [secondaryIndices, setSecondaryIndices] = useState<{
    idx1: number;
    idx2: number;
  }>({ idx1: 1, idx2: 2 });

  // States for fade transitions (optional, but makes it smoother)
  const [isFadingSecondary1, setIsFadingSecondary1] = useState(false);
  const [isFadingSecondary2, setIsFadingSecondary2] = useState(false);
  const [prevSecondaryIndicesState, setPrevSecondaryIndicesState] = useState<{
    idx1: number;
    idx2: number;
  }>({ idx1: 1, idx2: 2 });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to reset the timeout
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const navigate = (newIndex: number) => {
    setCurrentIndex(newIndex);
    resetTimeout();
  };

  const handleControlClick = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? imageList.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === imageList.length - 1 ? 0 : prevIndex + 1;
      }
    });
    resetTimeout(); // Reset timer when manually changing slide
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
  }, [currentIndex, imageList, slideInterval]);

  // Effect to update secondary image indices
  useEffect(() => {
    let idx1: number;
    let idx2: number;

    if (currentIndex === 0) {
      idx1 = 1;
      idx2 = 2;
    } else if (currentIndex === 1) {
      idx1 = 2; // Image after current
      idx2 = 0; // Image after idx1 (wraps around)
    } else {
      // currentIndex === 2
      idx1 = 0; // Image after current (wraps around)
      idx2 = 1; // Image after idx1
    }
    setSecondaryIndices({ idx1, idx2 });
  }, [currentIndex]);

  // Effect for smooth fade transitions on secondary images (OPTIONAL but recommended)
  useEffect(() => {
    if (secondaryIndices.idx1 !== prevSecondaryIndicesState.idx1) {
      setIsFadingSecondary1(true);
      const timer = setTimeout(() => setIsFadingSecondary1(false), 300); // Duration of fade
      return () => clearTimeout(timer);
    }
  }, [secondaryIndices.idx1, prevSecondaryIndicesState.idx1]);

  useEffect(() => {
    if (secondaryIndices.idx2 !== prevSecondaryIndicesState.idx2) {
      setIsFadingSecondary2(true);
      const timer = setTimeout(() => setIsFadingSecondary2(false), 300); // Duration of fade
      return () => clearTimeout(timer);
    }
  }, [secondaryIndices.idx2, prevSecondaryIndicesState.idx2]);

  useEffect(() => {
    setPrevSecondaryIndicesState(secondaryIndices);
  }, [secondaryIndices]);

  // Handle case where imageList might be empty
  if (!imageList || imageList.length === 0) {
    return (
      <div className="single-image-slider single-image-slider--empty">
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <div className="grid-image-carousel">
      <div className="primary-card">
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

        {/* OVERLAY */}
        <div className="overlay"></div>

        {/* CONTROLLERS */}
        <div
          className="control control-left"
          onClick={() => handleControlClick("left")}
        >
          <div className="icon icon-caret-left"></div>
        </div>

        <div
          className="control control-right"
          onClick={() => handleControlClick("right")}
        >
          <div className="icon icon-caret-left"></div>
        </div>

        {/* SLIDE INDICATOR */}
        <div className="indicator">
          {imageList.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`indicator-item ${
                currentIndex === index ? "indicator-item--active" : ""
              }`}
              onClick={() => navigate(index)}
            />
          ))}
        </div>
      </div>

      <div className="secondary-card">
        <div
          className={`secondary-card-display ${
            isFadingSecondary1 ? "fading-out" : "fading-in"
          }`}
        >
          <Image
            src={imageList[secondaryIndices.idx1]}
            alt={`Secondary image 1 - Slide ${secondaryIndices.idx1 + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1024px) 40vw, 50vw"
          />
        </div>

        <div
          className={`secondary-card-display ${
            isFadingSecondary2 ? "fading-out" : "fading-in"
          }`}
        >
          <Image
            src={imageList[secondaryIndices.idx2]}
            alt={`Secondary image 2 - Slide ${secondaryIndices.idx2 + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1024px) 40vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default GridImageCarousel;
