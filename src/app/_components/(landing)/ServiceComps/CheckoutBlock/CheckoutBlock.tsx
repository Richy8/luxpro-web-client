"use client";

import React, { useCallback, useMemo } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { CheckoutInfoCard, TwoByOneBlock } from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";
import { PaystackLogo, StripeLogo } from "@/app/_assets";
import "./CheckoutBlock.scss";

const CheckoutBlock = ({
  pagePath = [],
  details = {},
}: {
  pagePath: any;
  details: any;
}) => {
  const router = useRouter();
  const { slug } = useParams();
  const pathname = usePathname();

  const renderTitle = useMemo(() => {
    if (details?.title?.toLowerCase().includes("package")) {
      return (
        <>
          {details?.title?.split(" ")?.slice(0, -1)?.join(" ") ?? ""}{" "}
          <span className="text-main-primary">Package</span>
        </>
      );
    } else return details?.title;
  }, [details?.title]);

  const getSeviceName = useMemo(() => {
    return pathname.split("/")[2];
  }, [pathname]);

  const getPaymentInfo = useCallback(() => {
    return [
      {
        title: "Travel Package",
        value: details?.amount,
      },
      {
        title: "Tax/VAT fee",
        value: details?.tax,
      },
      {
        title: "Service Fee",
        value: details?.service_fee,
      },
    ];
  }, [details?.amount]);

  const goToCheckoutSuccess = () => {
    router.push(`/services/${getSeviceName}/${slug}/checkout-successful`);
  };

  return (
    <div className="checkout-block">
      <div className="base-container">
        <TwoByOneBlock layoutType="is-checkout">
          <TwoByOneBlock.Slot name="left-block">
            <PageInfoRow pagePath={pagePath} title={renderTitle} />

            <div className="payment-options">
              <div className="title-text">Pay with</div>

              <div className="option-list">
                {/* PAYSTACK */}
                <label htmlFor="paystack" className="option-item">
                  <input type="radio" name="payment" id="paystack" />

                  <div className="option-content">
                    <Image src={PaystackLogo} alt="paystack" className="w-5" />
                    <div className="text">Paystack</div>
                  </div>
                </label>

                {/* STRIPE */}
                <label htmlFor="stripe" className="option-item">
                  <input type="radio" name="payment" id="stripe" />

                  <div className="option-content">
                    <Image src={StripeLogo} alt="stripe" className="w-11" />
                    <div className="text">Stripe</div>
                  </div>
                </label>
              </div>

              <button
                className="mt-7 btn btn-lg btn-primary w-full"
                onClick={goToCheckoutSuccess}
              >
                Proceed to Checkout <span className="icon-arrow-right"></span>
              </button>
            </div>
          </TwoByOneBlock.Slot>

          <TwoByOneBlock.Slot name="right-block">
            <CheckoutInfoCard
              serviceDetails={details}
              paymentInfo={getPaymentInfo()}
              showDiscount={true}
            />
          </TwoByOneBlock.Slot>
        </TwoByOneBlock>
      </div>
    </div>
  );
};

export default CheckoutBlock;
