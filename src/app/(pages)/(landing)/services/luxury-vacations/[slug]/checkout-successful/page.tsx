"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { CheckoutSuccessBlock } from "@/app/_components/(landing)";
import useStore from "@/app/_app-store";
import { commonUtil } from "@/app/_utils";

const LuxuryVacationsCheckoutSuccess = () => {
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
      <CheckoutSuccessBlock
        pageTitle="Booking Confirmed!"
        pageDescription={
          <>
            {" "}
            <div className="description-details flex flex-col gap-y-5 mt-8 text-gray-400 text-lg mb-10">
              <div>
                Thank you for booking your luxury vacation experience with us.
              </div>
              <div>
                What happens next? <br /> Our luxury travel consultant will
                contact you within 24 hours to confirm your booking details and
                assist with any additional arrangements you may need. We've sent
                a confirmation email to dannykinzofficial@gmail.com with all
                booking details.
              </div>
              <div>Booking Reference: LUX-4480</div>

              <div className="flex justify-between items-start gap-x-4">
                <div className="w-1/2">
                  <div className="font-semibold text-gray-800 mb-4">
                    Your Information
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <div>
                      <div className="text-gray-300">Full Name</div>
                      <div className="font-semibold">Danny Kinz</div>
                    </div>

                    <div>
                      <div className="text-gray-300">Email Address</div>
                      <div className="font-semibold">
                        dannykinzofficial@gmail.com
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-300">Special Requests</div>
                      <div className="font-semibold">Nil</div>
                    </div>
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="flex flex-col gap-y-3">
                    <div>
                      <div className="text-gray-300">Package Information</div>
                      <div className="font-semibold">Dubai Business Oasis</div>
                    </div>

                    <div>
                      <div className="text-gray-300">Travel Dates</div>
                      <div className="font-semibold">March 28, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-md btn-primary">
              Go to your Dashboard
            </button>
          </>
        }
        pagePath={getPagePath}
        details={luxuryVacation}
      />
    </>
  );
};

export default LuxuryVacationsCheckoutSuccess;
