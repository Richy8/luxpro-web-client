"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import {
  CheckoutBlock,
  VideoCTASection,
  DiscoverCard,
} from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";

const ExecutiveTravelCheckout = () => {
  const { slug } = useParams();
  const { getExecutiveTravelBySlug } = useStore();

  const [executiveTravel, setExecutiveTravel] = useState<any>(null);

  const getPagePath = useMemo(() => {
    return [
      { itemText: "Services", itemLink: "/services" },
      {
        itemText: "Executive Travels",
        itemLink: "/services/executive-travels",
        isActive: true,
      },
      { itemText: executiveTravel?.title ?? "", itemLink: "#" },
    ];
  }, [executiveTravel, useParams]);

  useEffect(() => {
    const data = getExecutiveTravelBySlug(slug as string);
    setExecutiveTravel(data);
  }, []);

  return (
    <>
      <CheckoutBlock pagePath={getPagePath} details={executiveTravel} />
      <DiscoverCard excludeServiceName="Executive Travels" />
      <VideoCTASection />
    </>
  );
};

export default ExecutiveTravelCheckout;
