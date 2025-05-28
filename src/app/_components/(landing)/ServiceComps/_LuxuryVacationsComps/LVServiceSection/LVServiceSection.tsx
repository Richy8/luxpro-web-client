"use client";

import React, { useState } from "react";
import { ServiceCard } from "@/app/_components/(landing)";
import { StaticImageData } from "next/image";
import { LVImageOne, LVImageTwo, LVImageThree } from "@/app/_assets";

type IServiceCard = {
  image: StaticImageData | string;
  title: string;
  listItems: string[];
  link: string;
  linkText: string;
};

const LVServiceSection = ({ title }: { title?: string }) => {
  const [serviceList] = useState<IServiceCard[]>([
    {
      image: LVImageOne,
      title: "Dubai Business Oasis",
      listItems: ["$25,000 per booking", "Duration: 5 Days / 4 Nights"],
      linkText: "View Details",
      link: "/services/luxury-vacations/dubai-business-oasis",
    },
    {
      image: LVImageTwo,
      title: "Parisian Splendor",
      listItems: ["$8,500 per person", "Duration: 7 Days / 6 Nights"],
      linkText: "View Details",
      link: "/services/luxury-vacations/parisian-splendor",
    },
    {
      image: LVImageThree,
      title: "Venetian Family Getaway",
      listItems: [
        "$15,000 per family (up to 4 members)",
        "Duration: 10 Days / 9 Nights",
      ],
      linkText: "View Details",
      link: "/services/luxury-vacations/venetian-family-getaway",
    },
  ]);
  return (
    <div className="lv-service-section">
      <div className="base-container">
        {title && (
          <div className="text-gray-600 mb-12 font-bold text-[44px]">
            {title}
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} cardHeight="lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LVServiceSection;
