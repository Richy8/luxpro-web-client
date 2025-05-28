"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import {
  CheckoutBlock,
  VideoCTASection,
  GEEventSection,
} from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";
import { commonUtil } from "@/app/_utils";

const GlobalEventCheckout = () => {
  const { slug } = useParams();
  const { getGlobalEventBySlug } = useStore();

  const [globalEvent, setGlobalEvent] = useState<any>(null);

  const getPagePath = useMemo(() => {
    return [
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
    ];
  }, [useParams]);

  useEffect(() => {
    const data = getGlobalEventBySlug();
    setGlobalEvent(data);
  }, []);

  return (
    <>
      <CheckoutBlock pagePath={getPagePath} details={globalEvent} />

      <div className="mt-24">
        <GEEventSection title="Explore Other Global Events Packages" />
      </div>

      <VideoCTASection />
    </>
  );
};

export default GlobalEventCheckout;
