import React from "react";
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/(shared)";
import { PropertyManagementHero } from "@/app/_assets";
import Link from "next/link";

const PMHeroSection = () => {
  return (
    <section className="services-hero-section">
      {/* HERO IMAGE */}
      <Image
        src={PropertyManagementHero}
        alt="LuxPro Property Management"
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
              itemText: "Luxury Real Estate",
              itemLink: "/services/luxury-real-estate",
            },
            {
              itemText: "Property Management",
              itemLink: "/services/luxury-real-estate/property-management",
            },
          ]}
        />

        <div className="header-text">
          Premium Property
          <br /> Management
        </div>

        <div className="description-text">
          Comprehensive management services for property owners who live outside
          their property locations.
        </div>

        <Link
          href="/services/property-management/service-request"
          className="btn btn-md btn-primary"
        >
          {`Let's Manage your Property`}
        </Link>
      </div>
    </section>
  );
};

export default PMHeroSection;
