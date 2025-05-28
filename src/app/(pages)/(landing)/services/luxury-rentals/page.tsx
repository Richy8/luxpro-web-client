import React from "react";
import {
  LRHeroSection,
  LRInfoSection,
  DiscoverCard,
  VideoCTASection,
} from "@/app/_components/(landing)";

const LuxuryRentals = () => {
  return (
    <>
      <LRHeroSection />
      <LRInfoSection />
      <DiscoverCard excludeServiceName="Luxury Rentals" />
      <VideoCTASection />
    </>
  );
};

export default LuxuryRentals;
