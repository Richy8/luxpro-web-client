"use client";

import React, { useState } from "react";
import { ServiceCard } from "@/app/_components/(landing)";
import { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ServiceCardImageOne,
  ServiceCardImageTwo,
  ServiceCardImageThree,
  ServiceCardImageFour,
} from "@/app/_assets";
import "./ServicesSection.scss";

type IServiceCard = {
  image: StaticImageData | string;
  title: string;
  description: string;
  link: string;
};

const ServicesSection = () => {
  const [serviceList] = useState<IServiceCard[]>([
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
        "Exclusive properties in prime locations, managed by our expert real estate team.",
      link: "/services/lifestyle-management",
    },
    {
      image: ServiceCardImageFour,
      title: "Global Events",
      description:
        "Get exclusive access to some of the world’s greatest sporting, fun, and business events.",
      link: "/services/global-events",
    },
  ]);

  return (
    <div className="services-section">
      <div className="base-container">
        {/* TOP SECTION */}
        <div className="top-section">
          <div className="top-content">
            <h2 className="title-text">
              World-Class Services{" "}
              <span className="text-main-primary">Designed for Comfort</span>
            </h2>

            <div className="description-text">
              Exclusive luxury services tailored for clients who demand nothing
              but the best in travel and lifestyle experiences.
            </div>
          </div>

          <div className="top-action">
            <Link href={"/services"} className="btn btn-md btn-primary-outline">
              See All
            </Link>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">
          <div className="service-row">
            {serviceList.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
