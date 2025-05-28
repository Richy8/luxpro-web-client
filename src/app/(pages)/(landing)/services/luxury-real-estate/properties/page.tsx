import React from "react";
import { PageInfoRow } from "@/app/_components/(shared)";
import {
  LREPropertiesSection,
  VideoCTASection,
} from "@/app/_components/(landing)";

const Properties = () => {
  return (
    <>
      <div className="base-container">
        <PageInfoRow
          pagePath={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Luxury Real Estate",
              itemLink: "/services/luxury-real-estate",
              isActive: true,
            },
          ]}
          title={
            <>
              Luxury <span className="text-main-primary">Real Estate</span>{" "}
              Properties
            </>
          }
          hasTopMargin
        />
      </div>

      <LREPropertiesSection />

      <VideoCTASection />
    </>
  );
};

export default Properties;
