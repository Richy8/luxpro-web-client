"use client";

import React, { useState } from "react";
import { ServiceCard } from "@/app/_components/(landing)";
import { StaticImageData } from "next/image";
import { GEImageFour, GEImageFive, GEImageSix } from "@/app/_assets";

type IServiceCard = {
  image: StaticImageData | string;
  title: string;
  slug: string;
  listItems: string[];
};

const GEEventSection = ({ title }: { title?: string }) => {
  const [serviceList] = useState<IServiceCard[]>([
    {
      image: GEImageFour,
      title: "Monaco Grand Prix",
      slug: "monaco-grand-prix",
      listItems: [
        "Enjoy VIP paddock access, luxury yacht viewing, and private transfers throughout the weekend.",
        "May 2025 / $15,000 Per Ticket",
      ],
    },
    {
      image: GEImageFive,
      title: "Paris Fashion Week",
      slug: "paris-fashion-week",
      listItems: [
        "Front-row seats, private showroom tours, and exclusive after-parties with the fashion elite.",
        "September 2025 / $15,000 Per Ticket",
      ],
    },
    {
      image: GEImageSix,
      title: "Cannes Film Festival",
      slug: "cannes-film-festival",
      listItems: [
        "Walk the red carpet, attend VIP screenings, and mingle at star-studded gala events.",
        "May 2025 / $10,000 Per Ticket",
      ],
    },
  ]);
  return (
    <div className="ge-service-section">
      <div className="base-container">
        {title && (
          <div className="text-gray-600 mb-12 font-bold text-[44px]">
            {title}
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 mb-[140px]">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              listItems={service.listItems}
              linkText="View Details"
              link={`/services/global-events/${service.slug}`}
              cardHeight="lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GEEventSection;
