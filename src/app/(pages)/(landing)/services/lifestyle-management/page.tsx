"use client";
import React from "react";
import {
  LMHeroSection,
  LMInfoSection,
  DiscoverCard,
  VideoCTASection,
} from "@/app/_components/(landing)";

const LifestyleManagement = () => {
  return (
    <>
      <LMHeroSection />
      <LMInfoSection />
      <DiscoverCard excludeServiceName="Lifestyle Management" />
      <VideoCTASection />
    </>
  );
};

export default LifestyleManagement;
