import React from "react";
import { InfoDataCardRow, TitleTopBlock } from "@/app/_components/(landing)";
import { LREImageOne, LREImageTwo, LREImageThree } from "@/app/_assets";

const LREInfoSection = () => {
  const serviceList = [
    {
      title: "Luxury Apartments Rentals",
      description:
        "Through our investment group we are playing deeply in the global rental market, but in a niche way. Our goal is to have over 100 luxury apartments across different markets where we operate, where revenue growth is projected to double in the coming years. These apartments will be tastefully furnished and open for short and medium-term rental.",
      imageSrc: LREImageOne,
      actionCTALink: "/services/luxury-real-estate/properties",
    },
    {
      title: "Property Sale",
      description:
        "There is a significant increase in the global sale of luxury real estate. Our experienced team is poised to find premium real estate across the world for the investment considerations of our members and clients. With a global access to high network individuals, and operating licenses in multiple cities around the world, LuxPro operates in the premium real estate as a player of choice, making high end business transactions common place.",
      imageSrc: LREImageTwo,
      actionCTALink: "/services/luxury-real-estate/properties",
    },
    {
      title: "Property Management",
      description:
        "With premium services through our property management team, we work with property owners who live outside their property locations to inspect, maintain and comply with local and state regulations. We work to keep up with all renewals, while we help to keep the properties in pristine shape.",
      imageSrc: LREImageThree,
      actionCTALink: "/services/luxury-real-estate/property-management",
    },
  ];

  return (
    <div className="lre-info-section">
      <div className="base-container">
        {/* TITLE TOP */}
        <TitleTopBlock description="We have operating licenses in strategic cities and states where we operate and have built requisite capacity to deliver on investment opportunities in this space. Through our flagship services, we are growing our real estate portfolio in ways that benefit our members, partners and clients." />

        {/* SERVICE SECTION */}
        <div className="flex flex-col justify-start items-center gap-y-20 mb-[60px] sm:mb-[30px]">
          {serviceList.map((service, index: number) => (
            <InfoDataCardRow
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              actionCTA="Explore"
              actionCTALink={service.actionCTALink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LREInfoSection;
