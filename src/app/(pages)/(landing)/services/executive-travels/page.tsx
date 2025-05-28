"use client";
import React from "react";
import {
  ETHeroSection,
  ETServiceInfoSection,
  VideoCTASection,
  DiscoverCard,
} from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components/(shared)";

const ExecutiveTravels = () => {
  return (
    <>
      <ETHeroSection />
      <ETServiceInfoSection />
      <CTACard
        title={
          <>
            Build <span className="text-main-primary">Your Own Travel</span>{" "}
            Package
          </>
        }
        description={
          "Create a fully customized luxury travel experience, tailored to your preferences, destination, and style."
        }
        btnText={"Customize Your Package"}
        btnLink={"/services/executive-travels/customize"}
      />
      <DiscoverCard excludeServiceName="Executive Travels" />
      <VideoCTASection />
    </>
  );
};

export default ExecutiveTravels;
