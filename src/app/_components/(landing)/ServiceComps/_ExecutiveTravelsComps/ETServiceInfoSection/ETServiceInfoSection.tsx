"use client";

import React from "react";
import { ETServiceRow, TitleTopBlock } from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";

const ETServiceInfoSection = () => {
  const { getAllExecutiveTravels } = useStore();

  return (
    <div className="et-service-info-section bg-[#f6f0e7]">
      <div className="base-container">
        {/* TOP SECTION */}
        <TitleTopBlock
          title={
            <>
              Select Your Preferred{" "}
              <span className="text-main-primary">Executive Travel</span>{" "}
              Package
            </>
          }
          description="Enjoy destination transport management services with dedicated chauffeur, premium vehicles and other exotic additions that reflect your premium personal brand and positioning."
        />

        {/* BASE SECTION */}
        <div className="base-section mt-8 pb-[100px] sm:pb-[80px] mb-[120px] sm:mb-[100px]">
          {getAllExecutiveTravels().map((service, index) => (
            <ETServiceRow key={index} itemNo={index} serviceItem={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ETServiceInfoSection;
