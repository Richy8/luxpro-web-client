"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { HeroOne, HeroTwo, HeroThree, HeroFour } from "@/app/_assets";
import { useHeroScrollHold } from "@/app/_hooks";
import Link from "next/link";
import "./HeroSection.scss";

const HeroSection = () => {
  useHeroScrollHold();

  const heroImages: StaticImageData[] = [HeroOne, HeroTwo, HeroThree, HeroFour];
  const totalImages = heroImages.length;

  const [imageIndexSlotA, setImageIndexSlotA] = useState(0); // Image index for Slot A
  const [imageIndexSlotB, setImageIndexSlotB] = useState(
    totalImages > 1 ? 1 : 0
  ); // Image index for Slot B

  // 'A' or 'B' determines which slot is currently on top (higher z-index) and actively zooming/visible.
  // The other slot is "preparing" or "fading out".
  const [topSlot, setTopSlot] = useState<"A" | "B">("A");

  // Tracks the overall current image index in the `heroImages` array that the `topSlot` represents.
  const [currentImageLogicalIndex, setCurrentImageLogicalIndex] = useState(0);

  // Determines the zoom direction for the image currently in the `topSlot`.
  const [topSlotZoomsOut, setTopSlotZoomsOut] = useState(true);

  const imageDisplayTime = 8000; // Total time an image is "top" and zooming.
  const fadeDuration = 1500; // Duration of the opacity cross-fade.

  const cycleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (totalImages <= 1) {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
      return;
    }

    if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);

    // This timeout initiates the switch to the next image.
    // The actual fade is handled by CSS transitions based on which slot is 'topSlot'.
    cycleTimeoutRef.current = setTimeout(() => {
      const nextLogicalIndex = (currentImageLogicalIndex + 1) % totalImages;

      // Switch which slot is on top
      const newTopSlot = topSlot === "A" ? "B" : "A";
      setTopSlot(newTopSlot);

      // Update the image source for the slot that is now becoming the "staging" (bottom) slot,
      // so it loads the next image in the sequence.
      if (newTopSlot === "B") {
        // Slot A is now staging, load image for after B
        setImageIndexSlotA((nextLogicalIndex + 1) % totalImages);
      } else {
        // Slot B is now staging, load image for after A
        setImageIndexSlotB((nextLogicalIndex + 1) % totalImages);
      }

      setCurrentImageLogicalIndex(nextLogicalIndex); // The new topSlot now represents this logical index
      setTopSlotZoomsOut((prevZoomsOut) => !prevZoomsOut); // Alternate zoom direction for the new topSlot
    }, imageDisplayTime); // Cycle after the current image has had its display time

    return () => {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
    // Dependency array includes `currentImageLogicalIndex` to restart timer for next image
    // and `topSlot` to ensure effect re-evaluates if active slot changes programmatically (less likely here)
  }, [currentImageLogicalIndex, topSlot, totalImages, imageDisplayTime]);

  const userImages: string[] = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib.rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib.rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib.rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib.rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto-format&fit=crop&q=60&ixlib.rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  ];

  // Determine animation class for the image in the top slot
  const topSlotAnimationClass = topSlotZoomsOut
    ? "animate-zoom-out"
    : "animate-zoom-in";

  return (
    <div className="hero-section">
      <div className="hero-image-wrapper">
        {/* Image Slot A */}
        <Image
          // Key changes when the source image for this slot changes.
          key={`slot-A-${heroImages[imageIndexSlotA].src}`}
          src={heroImages[imageIndexSlotA]}
          alt="Hero Background"
          fill
          className={`hero-image slot-a ${
            topSlot === "A" ? `is-top ${topSlotAnimationClass}` : "is-bottom"
          }`}
          style={{
            animationDuration: `${imageDisplayTime / 1000}s`,
            transitionDuration: `${fadeDuration / 1000}s`,
          }}
          priority={topSlot === "A"}
          sizes="100vw"
        />

        {/* Image Slot B */}
        {totalImages > 1 && ( // Only render slot B if there are multiple images
          <Image
            key={`slot-B-${heroImages[imageIndexSlotB].src}`}
            src={heroImages[imageIndexSlotB]}
            alt="Hero Background"
            fill
            className={`hero-image slot-b ${
              topSlot === "B" ? `is-top ${topSlotAnimationClass}` : "is-bottom"
            }`}
            style={{
              animationDuration: `${imageDisplayTime / 1000}s`,
              transitionDuration: `${fadeDuration / 1000}s`,
            }}
            priority={topSlot === "B"}
            sizes="100vw"
          />
        )}
      </div>

      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        <div className="users-row">
          <div className="users-display">
            {userImages.map((image, index) => (
              <div className="user-item" key={`user-${index}`}>
                <Image
                  src={image}
                  alt={`User ${index + 1}`}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>

          <div className="users-text">
            16 people booked a visit in last 7 days
          </div>
        </div>

        <div className="header-text">
          Travel in Luxury, <br /> Live in Comfort
        </div>

        <div className="description-text">
          Fly first class, stay in style, and ride in elegance, every detail is
          handled for you.
        </div>

        <Link href="/services" className="btn btn-md btn-primary">
          Let’s Plan Your Trip
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
