import React from "react";
import Image from "next/image";
import { HeroAbout } from "@/app/_assets";
import { Breadcrumb } from "@/app/_components/(shared)";
import "./HeroAboutSection.scss";

const HeroServiceSection = () => {
  return (
    <div className="hero-about-section">
      {/* HERO IMAGE */}
      <Image
        src={HeroAbout}
        alt="LuxPro About Image"
        width={100}
        height={100}
        className="hero-image"
      />
      {/* HERO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        {/* BREADCRUMB */}
        <Breadcrumb items={[{ itemText: "About Us", itemLink: "/about" }]} />

        <div className="header-text">About LuxPro</div>

        <div className="description-text">
          Elevating luxury travel and lifestyle experiences for the discerning
          elites.
        </div>
      </div>
    </div>
  );
};

export default HeroServiceSection;
