import React from "react";
import {
  GEHeroSection,
  GEInfoSection,
  VideoCTASection,
  DiscoverCard,
} from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components/(shared)";

const GlobalEvents = () => {
  return (
    <>
      <GEHeroSection />
      <GEInfoSection />
      <CTACard
        title={
          <>
            Request Your{" "}
            <span className="text-main-primary">Exclusive Access</span>
          </>
        }
        description={
          "Tell us what event you're interested in, and our team will handle the rest, from premium tickets to every luxury detail of your experience."
        }
        btnText={"Make a Request"}
        btnLink={"/services/global-events/service-request"}
      />

      <DiscoverCard excludeServiceName="Global Events" />
      <VideoCTASection />
    </>
  );
};

export default GlobalEvents;
