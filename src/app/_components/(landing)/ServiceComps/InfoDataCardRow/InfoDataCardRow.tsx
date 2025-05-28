import React from "react";
import Link from "next/link";
import { AnimatedImage } from "@/app/_components/(shared)";
import { StaticImageData } from "next/image";
import "./InfoDataCardRow.scss";

interface InfoDataCardRowProps {
  imageSrc: string | StaticImageData;
  title: string;
  subtitle?: string;
  description: string;
  actionCTA: string;
  actionCTALink: string;
  cardSize?: "sm" | "lg";
}

const InfoDataCardRow = ({
  imageSrc,
  title,
  subtitle,
  description,
  actionCTA,
  actionCTALink,
  cardSize = "lg",
}: InfoDataCardRowProps) => {
  return (
    <div className={`info-data-card-row info-data-card-row--${cardSize}`}>
      {/* IMAGE DISPLAY */}
      <div className="image-display">
        <AnimatedImage src={imageSrc} alt={title} animationType="soft-zoom" />
      </div>

      <div className="content-area">
        {/* TITLE TEXT */}
        <div className="title-text">{title}</div>

        {/* SUBTITLE TEXT */}
        {subtitle && <div className="subtitle-text">{subtitle}</div>}

        {/* DESCRIPTION TEXT */}
        <div className="description-text">{description}</div>

        {/* ACTION CTA */}
        <Link href={actionCTALink} className="btn btn-md btn-primary">
          {actionCTA}
        </Link>
      </div>
    </div>
  );
};

export default InfoDataCardRow;
