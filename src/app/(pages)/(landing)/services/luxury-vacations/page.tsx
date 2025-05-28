import React from "react";
import {
  LVHeroSection,
  LVInfoSection,
  DiscoverCard,
  VideoCTASection,
} from "@/app/_components/(landing)";

const LuxuryVacations = () => {
  return (
    <>
      <LVHeroSection />
      <LVInfoSection />
      <DiscoverCard excludeServiceName="Luxury Vacations" />
      <VideoCTASection />
    </>
  );
};

export default LuxuryVacations;
