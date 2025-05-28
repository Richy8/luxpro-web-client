import React from "react";
import { ServiceCard } from "@/app/_components/(landing)";
import {
  ServiceCardImageOne,
  ServiceCardImageTwo,
  ServiceCardImageThree,
  ServiceCardImageFour,
  ServiceCardImageFive,
  ServiceCardImageSix,
  ServiceCardImageSeven,
} from "@/app/_assets";
import "./BaseServiceSection.scss";

const serviceList = [
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
  {
    image: ServiceCardImageSix,
    title: "Investments & Projects",
    description:
      "Opportunities for our members who seek to increase their financial net worth.",
    link: "/services/investments-projects",
  },
];

const ServiceSection = () => {
  return (
    <section className="base-service-section">
      <div className="base-container">
        <div className="service-row">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
