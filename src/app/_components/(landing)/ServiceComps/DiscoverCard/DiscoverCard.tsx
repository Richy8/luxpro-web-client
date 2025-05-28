"use client";

import React, { useState, useEffect } from "react";
import { ServiceCard } from "@/app/_components/(landing)"; // Assuming this path is correct
import { StaticImageData } from "next/image";
import {
  ServiceCardImageOne,
  ServiceCardImageTwo,
  ServiceCardImageThree,
  ServiceCardImageFour,
  ServiceCardImageFive,
  ServiceCardImageSix,
  ServiceCardImageSeven,
} from "@/app/_assets"; // Assuming this path is correct
import "./DiscoverCard.scss";

type IServiceCard = {
  image: StaticImageData | string;
  title: string;
  description: string;
  link: string;
};

const allServices: IServiceCard[] = [
  {
    image: ServiceCardImageSeven,
    title: "Executive Travels",
    description:
      "Premium travel packages with first-class flights for luxury seamless journey.",
    link: "/services/executive-travels",
  },
  {
    image: ServiceCardImageFive,
    title: "Luxury Rentals",
    description:
      "Rent private jets, yachts, exotic cars tailored to your lifestyle and preferences.",
    link: "/services/luxury-rentals",
  },
  {
    image: ServiceCardImageOne,
    title: "Luxury Real Estate",
    description:
      "Exclusive properties in prime locations, managed by our expert real estate team.",
    link: "/services/luxury-real-estate",
  },
  {
    image: ServiceCardImageTwo,
    title: "Luxury Vacations",
    description:
      "Annual vacation offerings for you and your family to enjoy luxury beyond your dreams.",
    link: "/services/luxury-vacations",
  },
  {
    image: ServiceCardImageThree,
    title: "Lifestyle Management",
    description:
      "Exclusive properties in prime locations, managed by our expert real estate team.", // Note: Same description as Real Estate, might be intentional or a typo
    link: "/services/lifestyle-management",
  },
  {
    image: ServiceCardImageFour,
    title: "Global Events",
    description:
      "Get exclusive access to some of the world’s greatest sporting, fun, and business events.",
    link: "/services/global-events",
  },
  {
    image: ServiceCardImageSix,
    title: "Investments & Projects",
    description:
      "Opportunities for our members who seek to increase their financial net worth.",
    link: "/services/investments-projects",
  },
];

// Helper function to shuffle an array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const DiscoverCard = ({
  excludeServiceName,
}: {
  excludeServiceName: string;
}) => {
  const [displayServices, setDisplayServices] = useState<IServiceCard[]>([]);

  useEffect(() => {
    // 1. Filter out the service to be excluded
    const filteredServices = allServices.filter(
      (service) => service.title !== excludeServiceName
    );

    // 2. Shuffle the remaining services
    const shuffledServices = shuffleArray(filteredServices);

    // 3. Pick the first 4 services (or fewer if less than 4 remain)
    const selectedServices = shuffledServices.slice(0, 4);

    setDisplayServices(selectedServices);
  }, [excludeServiceName]); // Re-run if excludeServiceName changes

  // Handle case where no services are available to display
  if (displayServices.length === 0) {
    return (
      <div className="discover-card">
        <div className="base-container">
          <div className="top-row">
            <div className="title-text">Discover more</div>
          </div>
          <div className="base-row">
            <p className="no-services-message">
              No other services to display at the moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="discover-card">
      <div className="base-container">
        {/* TOP ROW */}
        <div className="top-row">
          <div className="title-text">Discover more</div>
        </div>

        {/* BASE ROW */}
        <div className="base-row">
          <div className="service-row">
            {displayServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
