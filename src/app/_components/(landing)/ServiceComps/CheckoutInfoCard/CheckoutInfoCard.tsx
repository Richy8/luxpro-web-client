"use client";

import React from "react";
import Image from "next/image";
import { TextInputField } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";
import { ETPackage2of1 } from "@/app/_assets";
import "./CheckoutInfoCard.scss";

interface IPaymentInfo {
  title: string;
  value: string;
}

interface ICheckoutInfoCardProps {
  serviceDetails: any;
  paymentInfo: IPaymentInfo[];
  showDiscount?: boolean;
}

const CheckoutInfoCard = ({
  serviceDetails = {},
  paymentInfo = [],
  showDiscount = false,
}: ICheckoutInfoCardProps) => {
  return (
    <div className="checkout-info-card">
      {/* IMAGE CARD */}
      <div className="image-card">
        <Image src={serviceDetails?.images?.[0]} alt={serviceDetails?.title} />
      </div>

      {/* CONTENT AREA */}
      <div className="content-area">
        <div className="title-text">{serviceDetails?.title}</div>

        <div className="description-text">
          {serviceDetails?.subtitle || serviceDetails?.description}
        </div>
      </div>

      {/* DISCOUNT FORM */}
      {showDiscount && (
        <div className="discount-form">
          <TextInputField
            inputType={IInputType.Text}
            inputValue=""
            inputPlaceholder="Enter discount code"
            onInputChange={(value) => console.log(value)}
          />

          <button className="btn btn-primary">
            <div className="icon-arrow-right text-sm"></div>{" "}
          </button>
        </div>
      )}

      {/* PACKAGE DETAILS */}
      <div className="package-details">
        <div className="title-text">Package details</div>

        <div className="package-list">
          {paymentInfo?.map((item: IPaymentInfo, index: number) => (
            <div className="package-list-item" key={index}>
              <div className="info-title">{item?.title}</div>
              <div className="info-value">{item?.value}</div>
            </div>
          ))}

          <div className="package-list-item package-total">
            <div className="info-title">Total Payment</div>
            <div className="info-value">$35,064.00</div>
          </div>
        </div>
      </div>

      {/* HELP TEXT */}
      <div className="help-text">
        Your booking is protected by{" "}
        <span className="text-gray-800"> Luxpro.vip</span>
      </div>
    </div>
  );
};

export default CheckoutInfoCard;
