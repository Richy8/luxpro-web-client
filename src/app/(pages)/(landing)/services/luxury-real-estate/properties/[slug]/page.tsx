"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PageInfoRow } from "@/app/_components/(shared)";
import {
  LREPropertyDetailSection,
  VideoCTASection,
} from "@/app/_components/(landing)";
import { commonUtil } from "@/app/_utils";

const PropertyDetail = () => {
  const { slug } = useParams();

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
            { itemText: "Luxury Apartments", itemLink: "#" },
          ]}
          title={<>{commonUtil.unslugifyText(slug as string)}</>}
          hasTopMargin
        />
      </div>

      <div className="-mb-20">
        <LREPropertyDetailSection />
      </div>

      <VideoCTASection />
    </>
  );
};

export default PropertyDetail;
