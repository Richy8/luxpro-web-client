"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { CheckoutSuccessBlock } from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";

const ExecutiveTravelCheckoutSuccess = () => {
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
      <CheckoutSuccessBlock
        pageTitle="Your trip has been booked!"
        pageDescription={
          <>
            {" "}
            <div className="description-details flex flex-col gap-y-5 mt-8 text-gray-400 text-lg mb-10">
              <div>
                Your Executive Travel package has been successfully booked. Our
                team is finalizing the details to ensure a seamless and
                luxurious experience for you.
              </div>
              <div>
                You will receive a confirmation email shortly with your
                itinerary and next steps. If you have any special requests or
                need further assistance, feel free to contact us at
                info@luxpro.com or call +1 (443) 590-6066.
              </div>
              <div>
                Thank you for choosing LuxPro, your journey to luxury begins
                now!
              </div>
            </div>
            <button className="btn btn-md btn-primary">
              Go to your Dashboard
            </button>
          </>
        }
        pagePath={getPagePath}
        details={executiveTravel}
      />
    </>
  );
};

export default ExecutiveTravelCheckoutSuccess;
