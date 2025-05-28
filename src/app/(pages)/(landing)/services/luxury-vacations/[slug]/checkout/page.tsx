"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import {
  CheckoutBlock,
  VideoCTASection,
  LVServiceSection,
} from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";
import { commonUtil } from "@/app/_utils";

const LuxuryVactionsCheckout = () => {
  const { slug } = useParams();
  const { getLuxuryVacationBySlug } = useStore();

  const [luxuryVacation, setLuxuryVacation] = useState<any>(null);

  const getPagePath = useMemo(() => {
    return [
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
    ];
  }, [useParams]);

  useEffect(() => {
    const data = getLuxuryVacationBySlug();
    setLuxuryVacation(data);
  }, []);

  return (
    <>
      <CheckoutBlock pagePath={getPagePath} details={luxuryVacation} />

      <div className="mt-24">
        <LVServiceSection title="Explore Other Luxury Packages" />
      </div>

      <VideoCTASection />
    </>
  );
};

export default LuxuryVactionsCheckout;
