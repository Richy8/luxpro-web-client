import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { LifestyleManagementHero } from "@/app/_assets";

const LMHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={LifestyleManagementHero}
        alt="LuxPro Lifestyle Management"
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
              itemText: "Lifestyle Management",
              itemLink: "/services/lifestyle-management",
            },
          ]}
        />

        <div className="header-text">
          Lifestyle
          <br /> Management
        </div>

        <div className="description-text">
          Enjoy our dedicated concierge expertise as we bring global brands to
          your doorsteps while you focus on other important aspects of your
          life.
        </div>
      </div>
    </section>
  );
};

export default LMHeroSection;
