import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { ExecutiveTravelsHero } from "@/app/_assets";

const ETHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={ExecutiveTravelsHero}
        alt="LuxPro Executive Travels"
        width={100}
        height={100}
        className="hero-image"
      />
      {/* HERO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        {/* BREADCRUMB */}
        <Breadcrumb
          items={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Executive Travels",
              itemLink: "/services/executive-travels",
            },
          ]}
        />

        <div className="header-text">
          Executive
          <br /> Travels
        </div>

        <div className="description-text">
          Check out our various packages in the destinations where we provide
          premium travel services that give you security, comfort, and peace of
          mind.
        </div>
      </div>
    </section>
  );
};

export default ETHeroSection;
