"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";
import "./AnimatedImage.scss";

type AnimationType = "soft-zoom" | "gentle-pan" | "subtle-float" | "none"; // Added "none"

interface AnimatedImageProps {
  src: StaticImageData | string;
  alt: string;
  // Width and height are NOT used when layout="fill", which will be our default for this use case
  // Keeping them for potential future flexibility if layout prop is exposed, but they won't affect fill behavior
  // width?: number;
  // height?: number;
  // layout?: "fill" | "fixed" | "intrinsic" | "responsive"; // We'll default to and primarily support "fill"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  containerClassName?: string; // Class for the main wrapper div
  imgClassName?: string; // Class for the Next.js <Image> component itself
  animationTypes?: AnimationType[];
  animationType?: AnimationType; // Allow forcing a specific animation
  priority?: boolean; // Pass priority to Next.js Image
}

const defaultOptions: Record<string, number> = {
  scale: 1,
  speed: 4000,
  max: 25,
  perspective: 1200,
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  objectFit = "cover", // Default to cover, common for background-like images
  containerClassName = "w-full h-full",
  imgClassName = "",
  animationTypes = ["soft-zoom", "gentle-pan", "subtle-float"],
  animationType, // If provided, use this animation; otherwise, pick randomly
  priority = false,
}) => {
  const [chosenAnimation, setChosenAnimation] = useState<AnimationType | null>(
    null
  );

  useEffect(() => {
    if (animationType && animationType !== "none") {
      setChosenAnimation(animationType);
    } else if (animationType === "none") {
      setChosenAnimation(null);
    } else if (animationTypes.length > 0) {
      const randomIndex = Math.floor(Math.random() * animationTypes.length);
      setChosenAnimation(animationTypes[randomIndex]);
    } else {
      setChosenAnimation(null); // No animations if list is empty and no specific one chosen
    }
  }, [animationTypes, animationType]);

  // Prepare props for the Next.js Image component
  // We will always use layout="fill" for this component's primary purpose
  const imageNextJsProps = useMemo(() => {
    const props: any = {
      src,
      alt,
      fill: true, // Crucial for taking up parent space
      //   objectFit: objectFit,
      priority: priority,
    };

    let combinedImgClassName = "dynamic-image-inner"; // Base class for internal styling
    if (imgClassName) {
      combinedImgClassName = `${combinedImgClassName} ${imgClassName}`;
    }
    if (chosenAnimation && chosenAnimation !== "none") {
      combinedImgClassName = `${combinedImgClassName} animation-${chosenAnimation}`;
    }
    props.className = combinedImgClassName;

    return props;
  }, [src, alt, objectFit, imgClassName, chosenAnimation, priority]);

  return (
    <Tilt
      options={defaultOptions}
      className={`dynamic-image-container ${containerClassName}`}
    >
      <Image {...imageNextJsProps} />
    </Tilt>
  );
};

export default AnimatedImage;
