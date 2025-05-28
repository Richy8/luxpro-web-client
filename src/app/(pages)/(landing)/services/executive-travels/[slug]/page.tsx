"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ETServiceDetails,
  VideoCTASection,
  DiscoverCard,
} from "@/app/_components/(landing)";
import { CTACard, PageInfoRow } from "@/app/_components/(shared)";
import useStore from "@/app/_app-store";

const ExecutiveTravelPackage = () => {
  const { slug } = useParams();
  const { getExecutiveTravelBySlug } = useStore();

  const [executiveTravel, setExecutiveTravel] = useState<any>(null);

  useEffect(() => {
    const data = getExecutiveTravelBySlug(slug as string);
    setExecutiveTravel(data);
  }, []);

  return (
    <>
      <div className="base-container">
        <PageInfoRow
          pagePath={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Executive Travels",
              itemLink: "/services/executive-travels",
              isActive: true,
            },
          ]}
          title={
            <>
              {executiveTravel?.title?.split(" ")?.slice(0, -1)?.join(" ") ||
                ""}{" "}
              <span className="text-main-primary">Package</span>
            </>
          }
          hasTopMargin
        />
      </div>

      <ETServiceDetails details={executiveTravel} />

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

export default ExecutiveTravelPackage;
