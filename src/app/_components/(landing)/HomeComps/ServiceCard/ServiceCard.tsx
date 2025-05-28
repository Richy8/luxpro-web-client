import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./ServiceCard.scss";

type IServiceCard = {
  image: StaticImageData | string;
  title: string;
  description?: string;
  link: string;
  linkText?: string;
  listItems?: string[];
  cardHeight?: string;
};

const ServiceCard = ({
  image,
  title,
  description,
  link,
  linkText = "Explore",
  listItems = [],
  cardHeight,
}: IServiceCard) => {
  return (
    <div
      className={`service-card ${
        cardHeight ? `service-card-${cardHeight}` : ""
      }`}
    >
      {/* IMAGE */}
      <div className="image-container">
        <AnimatedImage src={image} alt={title} animationType="soft-zoom" />
      </div>

      {/* CARD OVERLAY */}
      <div className="card-overlay"></div>

      {/* BOTTOM COPY */}
      <div className="bottom-copy">
        <h3 className="title-text">{title}</h3>
        {description && <div className="description-text">{description}</div>}

        <div className="flex flex-col justify-start items-start">
          {listItems.map((item, index) => (
            <div key={index} className="description-text !mb-1">
              {item}
            </div>
          ))}
        </div>

        <Link href={link} className="btn btn-md btn-secondary w-full">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
