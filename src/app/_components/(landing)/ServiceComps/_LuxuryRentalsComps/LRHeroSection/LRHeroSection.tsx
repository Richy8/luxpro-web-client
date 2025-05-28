import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { LuxuryRentalsHero } from "@/app/_assets";

const ETHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={LuxuryRentalsHero}
        alt="LuxPro Luxury Rentals"
        width={100}
        height={100}
        className="hero-image"
        style={{ objectPosition: "0% 50%" }}
      />
      {/* HERO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="base-container hero-container">
        {/* BREADCRUMB */}
        <Breadcrumb
          items={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Luxury Rentals",
              itemLink: "/services/luxury-rentals",
            },
          ]}
        />

        <div className="header-text">
          Luxury
          <br /> Rentals
        </div>

        <div className="description-text">
          We offer luxury rental across multiples needs. Our dedicated travel
          experts will work with you to make your travel seamless and hitch
          free. Trust us with all your rental needs today and experience peace
          and safety.
        </div>
      </div>
    </section>
  );
};

export default ETHeroSection;
