import React from "react";
import Image from "next/image";
import { HeroService } from "@/app/_assets";
import { Breadcrumb } from "@/app/_components/(shared)";
import "./HeroServiceSection.scss";

const HeroServiceSection = () => {
  return (
    <div className="hero-service-section">
      {/* HERO IMAGE */}
      <Image
        src={HeroService}
        alt="LuxPro Service Image"
        width={100}
        height={100}
        className="hero-image"
      />
      {/* HERO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        {/* BREADCRUMB */}
        <Breadcrumb items={[{ itemText: "Services", itemLink: "/services" }]} />

        <div className="header-text">
          World-Class Services <br /> Designed for Comfort
        </div>

        <div className="description-text">
          Exclusive luxury services tailored for clients who demand nothing but
          the best in travel and lifestyle experiences.
        </div>
      </div>
    </div>
  );
};

export default HeroServiceSection;
