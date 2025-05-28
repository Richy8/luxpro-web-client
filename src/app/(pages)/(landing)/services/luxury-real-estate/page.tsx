import React from "react";
import {
  LREHeroSection,
  LREInfoSection,
  DiscoverCard,
  VideoCTASection,
} from "@/app/_components/(landing)";

const LuxuryRealEstate = () => {
  return (
    <>
      <LREHeroSection />
      <LREInfoSection />

      <DiscoverCard excludeServiceName="Luxury Real Estate" />
      <VideoCTASection />
    </>
  );
};

export default LuxuryRealEstate;
