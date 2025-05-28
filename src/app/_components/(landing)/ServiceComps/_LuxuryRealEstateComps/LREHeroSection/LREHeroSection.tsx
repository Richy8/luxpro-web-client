import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { LuxuryRealEstateHero } from "@/app/_assets";

const LREHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={LuxuryRealEstateHero}
        alt="LuxPro Luxury Real Estate"
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
              itemText: "Luxury Real Estate",
              itemLink: "/services/luxury-real-estate",
            },
          ]}
        />

        <div className="header-text">
          Luxury &
          <br /> Real Estate
        </div>

        <div className="description-text">
          Our Luxury Investment Team handles all our real estate business. We
          have seasoned professionals with decades of experience in premium real
          estate markets across the world.
        </div>
      </div>
    </section>
  );
};

export default LREHeroSection;
