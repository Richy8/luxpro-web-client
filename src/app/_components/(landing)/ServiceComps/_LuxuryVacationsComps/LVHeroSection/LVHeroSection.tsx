import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { LuxuryVacationsHero } from "@/app/_assets";
import Link from "next/link";

const LVHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={LuxuryVacationsHero}
        alt="LuxPro Luxury Vacations"
        width={100}
        height={100}
        className="hero-image"
      />
      {/* style={{ objectPosition: "0% 50%" }} */}
      {/* HERO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        {/* BREADCRUMB */}
        <Breadcrumb
          items={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Luxury Vacations",
              itemLink: "/services/Luxury-vacations",
            },
          ]}
        />

        <div className="header-text">
          Luxury
          <br /> Vacations
        </div>

        <div className="description-text">
          With our annual luxury vacation offerings, you and your family can
          experience luxury beyond your dreams. 
        </div>
      </div>
    </section>
  );
};

export default LVHeroSection;
