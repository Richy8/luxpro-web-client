import React from "react";
import {
  PMHeroSection,
  PMInfoSection,
  VideoCTASection,
} from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components/(shared)";

const PropertyManagement = () => {
  return (
    <>
      <PMHeroSection />
      <PMInfoSection />
      <CTACard
        title={
          <>
            Ready to Experience{" "}
            <span className="text-main-primary">
              Premium Property Management
            </span>
          </>
        }
        description={
          "Let our team of experienced professionals handle your property while you focus on what matters most to you. Contact us today to discover how we can help maintain and enhance your luxury real estate investment."
        }
        btnText={"Let's Manage your Property"}
        btnLink={
          "/services/luxury-real-estate/property-management/service-request"
        }
      />
      <VideoCTASection />
    </>
  );
};

export default PropertyManagement;
