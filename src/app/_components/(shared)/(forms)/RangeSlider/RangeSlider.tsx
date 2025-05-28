"use client";
import React, { useState, useRef, useEffect } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  initialValue?: number;
  step?: number;
  onChange?: (value: number) => void;
  label?: string; // The main "Price Range" label
  minLabel?: string; // Optional custom label for min value, defaults to `min`
  maxLabel?: string; // Optional custom label for max value, defaults to `max`
}

const RangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  initialValue,
  step = 1,
  onChange,
  label = "Price Range", // Default label
  minLabel,
  maxLabel,
}) => {
  const [currentValue, setCurrentValue] = useState(
    initialValue !== undefined ? initialValue : min
  );
  const rangeInputRef = useRef<HTMLInputElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isThumbHoveredOrActive, setIsThumbHoveredOrActive] = useState(false); // For tooltip visibility

  const handleValueChange = (newValue: number) => {
    // Ensure value stays within min/max bounds
    const boundedValue = Math.max(min, Math.min(max, newValue));
    setCurrentValue(boundedValue);
    if (onChange) {
      onChange(boundedValue);
    }
  };

  const handleRangeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleValueChange(parseInt(event.target.value, 10));
  };

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = event.target.value;
    if (rawValue === "") {
      // Allow empty input temporarily, maybe set to min or handle as error
      // For now, let's not update if empty to prevent NaN issues immediately
      // Or, you could set to min: setCurrentValue(min);
      return;
    }
    handleValueChange(parseInt(rawValue, 10));
  };

  useEffect(() => {
    const rangeInput = rangeInputRef.current;
    const tooltip = tooltipRef.current;

    if (rangeInput && tooltip) {
      const percentage = ((currentValue - min) / (max - min)) * 100;
      const safePercentage = Math.max(0, Math.min(100, percentage)); // Clamp percentage

      // --- Active Track Styling ---
      // Using your main-primary color for the active part of the track
      // Ensure #YOUR_MAIN_PRIMARY_HEX is defined or replace with Tailwind class if possible (harder with gradient)
      // For Tailwind, you might need to define CSS variables for colors in your global CSS.
      const mainPrimaryColor = "#D4AF37"; // EXAMPLE: Replace with your actual main-primary hex
      const trackColorInactive = "#E5E7EB"; // Tailwind's gray-200 / slate-200

      rangeInput.style.background = `linear-gradient(to right, ${mainPrimaryColor} ${safePercentage}%, ${trackColorInactive} ${safePercentage}%)`;

      // --- Tooltip Positioning ---
      if (isThumbHoveredOrActive) {
        // Calculate thumb's center position
        //offsetWidth gives the layout width of an element.
        const thumbHalfWidth = 10; // Approximate half-width of the thumb (h-5 w-5 is 20px)
        const trackWidth = rangeInput.offsetWidth;
        let thumbCenterPosition =
          (safePercentage / 100) * (trackWidth - thumbHalfWidth * 2) +
          thumbHalfWidth;
        // If trackWidth is just the track without thumb, then:
        // thumbCenterPosition = (safePercentage / 100) * trackWidth;

        let tooltipLeft = thumbCenterPosition - tooltip.offsetWidth / 2;

        // Prevent tooltip from going off-screen
        const maxLeft = trackWidth - tooltip.offsetWidth;
        tooltipLeft = Math.max(0, Math.min(tooltipLeft, maxLeft));

        tooltip.style.left = `${tooltipLeft}px`;
      }
    }
  }, [currentValue, min, max, isThumbHoveredOrActive]); // Re-run when value or hover state changes

  return (
    <div className="form-group price-range-slider-component">
      <div className="form-range-slider-wrapper">
        <div className="slider-track-container">
          {" "}
          {/* New container for slider and tooltip */}
          <input
            id="price-range-input"
            type="range"
            min={min}
            max={max}
            value={currentValue}
            step={step}
            onChange={handleRangeInputChange}
            onMouseEnter={() => setIsThumbHoveredOrActive(true)}
            onMouseLeave={() => setIsThumbHoveredOrActive(false)}
            onMouseDown={() => setIsThumbHoveredOrActive(true)} // For drag
            onTouchStart={() => setIsThumbHoveredOrActive(true)}
            // onMouseUp/onTouchEnd are tricky because mouse might leave thumb during drag
            // It's often better to handle hiding tooltip when interaction truly ends.
            // For simplicity, onMouseLeave will hide it.
            ref={rangeInputRef}
            className="form-range-slider"
            aria-label={label || "Price range"}
          />
          <div
            ref={tooltipRef}
            className="range-value-tooltip"
            style={{
              opacity: isThumbHoveredOrActive ? 1 : 0,
              transform: isThumbHoveredOrActive
                ? "scale(1) translateY(0)"
                : "scale(0.9) translateY(0)",
            }}
          >
            {currentValue}
          </div>
        </div>

        <div className="form-range-value-box">
          <input
            type="number"
            className="current-value-input"
            value={currentValue} // Controlled input
            min={min}
            max={max}
            step={step}
            onChange={handleNumberInputChange}
            onFocus={() => setIsThumbHoveredOrActive(true)} // Show tooltip when focusing input too
            onBlur={() => setIsThumbHoveredOrActive(false)}
            aria-label="Current price value input"
          />
        </div>
      </div>
      <div className="form-range-labels">
        <span>{minLabel !== undefined ? minLabel : `$${min}`}</span>
        <span>{maxLabel !== undefined ? maxLabel : `$${max}`}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
