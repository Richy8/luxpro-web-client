import React from "react";
import { StaticImageData } from "next/image";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./InfoSquareCard.scss";

interface IInfoSquareCard {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const InfoSquareCard = ({ imageSrc, title, description }: IInfoSquareCard) => {
  return (
    <div className="info-square-card">
      <div className="image-display">
        <AnimatedImage src={imageSrc} alt={title} animationType="soft-zoom" />
      </div>

      <div className="content-area">
        <div className="title-text">{title}</div>
        <div className="description-text">{description}</div>
      </div>
    </div>
  );
};

export default InfoSquareCard;
