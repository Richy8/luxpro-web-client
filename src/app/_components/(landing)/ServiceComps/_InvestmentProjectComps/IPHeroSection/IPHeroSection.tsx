import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { InvestmentProjectsHero } from "@/app/_assets";

const IPHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={InvestmentProjectsHero}
        alt="LuxPro Investment Projects"
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
              itemText: "Investments & Projects",
              itemLink: "/services/investments-projects",
            },
          ]}
        />

        <div className="header-text">
          Investments &
          <br /> Projects
        </div>

        <div className="description-text">
          We have carefully selected high yielding investment opportunities for
          our members who seek to increase their financial net worth.
        </div>
      </div>
    </section>
  );
};

export default IPHeroSection;
