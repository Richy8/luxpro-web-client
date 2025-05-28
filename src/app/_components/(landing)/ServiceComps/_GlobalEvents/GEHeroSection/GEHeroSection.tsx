import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { GlobalEventsHero } from "@/app/_assets";

const GEHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={GlobalEventsHero}
        alt="LuxPro Global Events"
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
              itemText: "Global Events",
              itemLink: "/services/global-events",
            },
          ]}
        />

        <div className="header-text">
          Global
          <br /> Events
        </div>

        <div className="description-text">
          From front-row seats at major fashion weeks to VIP boxes at the
          biggest football finals, our team secures exclusive access to global
          events for clients who want the best seat in the house.
        </div>
      </div>
    </section>
  );
};

export default GEHeroSection;
