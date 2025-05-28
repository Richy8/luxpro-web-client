"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  LVServiceDetails,
  LVServiceSection,
  VideoCTASection,
} from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";
import useStore from "@/app/_app-store";
import { commonUtil } from "@/app/_utils";

const LuxuryVacationServices = () => {
  const { slug } = useParams();
  const { getLuxuryVacationBySlug } = useStore();

  const [luxuryVacation, setLuxuryVacation] = useState<any>(null);

  useEffect(() => {
    const data = getLuxuryVacationBySlug();
    setLuxuryVacation(data);
  }, []);

  return (
    <>
      <div className="base-container">
        <PageInfoRow
          pagePath={[
            { itemText: "Services", itemLink: "/services" },
            {
              itemText: "Luxury Vacations",
              itemLink: "/services/luxury-vacations",
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

      <LVServiceDetails details={luxuryVacation} />

      <LVServiceSection title="Explore Other Luxury Packages" />
      <VideoCTASection />
    </>
  );
};

export default LuxuryVacationServices;
