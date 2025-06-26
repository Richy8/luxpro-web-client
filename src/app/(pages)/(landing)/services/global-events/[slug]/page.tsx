"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  GEServiceDetails,
  GEEventSection,
  VideoCTASection,
} from "@/app/_components/(landing)";
import { CTACard, PageInfoRow } from "@/app/_components/(shared)";
import useStore from "@/app/_app-store";
import { commonUtil } from "@/app/_utils";

const GlobalEventService = () => {
  const { slug } = useParams();
  const { getGlobalEventBySlug } = useStore();

  const [globalEvent, setGlobalEvent] = useState<any>(null);

  useEffect(() => {
    const data = getGlobalEventBySlug();
    setGlobalEvent(data);
  }, []);

  return (
    <>
      <div className="base-container">
        <PageInfoRow
          pagePath={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Global Events",
              itemLink: "/services/global-events",
              isActive: true,
            },
            {
              itemText: commonUtil.unslugifyText(slug as string) || "",
              itemLink: "#",
            },
          ]}
          title={<>{commonUtil.unslugifyText(slug as string) || ""}</>}
          hasTopMargin
        />
      </div>

      <div className="mt-14 md:mt-12 sm:mt-11">
        <GEServiceDetails details={globalEvent} />
      </div>

      <div className="md:-mt-44">
        <GEEventSection title="Explore Other Global Events Packages" />
      </div>

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

      <VideoCTASection />
    </>
  );
};

export default GlobalEventService;
