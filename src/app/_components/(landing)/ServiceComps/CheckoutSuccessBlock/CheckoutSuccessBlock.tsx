"use client";

import React, { useCallback } from "react";
import { CheckoutInfoCard, TwoByOneBlock } from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";

const CheckoutBlock = ({
  pageTitle = "",
  pageDescription = "",
  pagePath = [],
  details = {},
}: {
  pageTitle: string;
  pageDescription: string | React.ReactNode;
  pagePath: any;
  details: any;
}) => {
  const getPaymentInfo = useCallback(() => {
    return [
      {
        title: "Date created",
        value: "Feb 24th, 2025",
      },
      {
        title: "Payment method",
        value: "Credit card",
      },
      {
        title: "Order ID",
        value: "SAP-1234",
      },
    ];
  }, [details?.amount]);

  return (
    <div className="checkout-block mb-[120px]">
      <div className="base-container">
        <TwoByOneBlock layoutType="is-checkout">
          <TwoByOneBlock.Slot name="left-block">
            <PageInfoRow pagePath={pagePath} title={<>{pageTitle}</>}>
              <div className="sm:text-[15px]">{pageDescription}</div>
            </PageInfoRow>
          </TwoByOneBlock.Slot>

          <TwoByOneBlock.Slot name="right-block">
            <CheckoutInfoCard
              serviceDetails={details}
              paymentInfo={getPaymentInfo()}
              showDiscount={false}
            />
          </TwoByOneBlock.Slot>
        </TwoByOneBlock>
      </div>
    </div>
  );
};

export default CheckoutBlock;
