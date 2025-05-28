import React from "react";
import {
  IPHeroSection,
  IPInfoSection,
  DiscoverCard,
  VideoCTASection,
} from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components";

const InvestmentsProjects = () => {
  return (
    <>
      <IPHeroSection />
      <IPInfoSection />

      <CTACard
        title={
          <>
            Start{" "}
            <span className="text-main-primary">Building Your Future</span>{" "}
            Today
          </>
        }
        description={
          "Connect with our investment team and discover opportunities designed for growth, prestige, and security."
        }
        btnText={"Book Your Investment Call"}
        btnLink={"/services/investments-projects/service-request"}
      />

      <DiscoverCard excludeServiceName="Investments & Projects" />
      <VideoCTASection />
    </>
  );
};

export default InvestmentsProjects;
