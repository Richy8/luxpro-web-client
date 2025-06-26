"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { TextInputField, GridImageCarousel } from "@/app/_components/(shared)";
import { ListItemBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { IInputType } from "@/app/_types/form-type";

const LVServiceDetails = ({ details }: { details: any }) => {
  const router = useRouter();
  const { slug } = useParams();

  const handleBooking = () => {
    router.push(`/services/luxury-vacations/${slug}/checkout`);
  };

  return (
    <div className="lv-service-details mt-14">
      <div className="base-container">
        {/* IMAGE GRID CAROUSEL */}
        <div className="mb-14">
          <GridImageCarousel imageList={details?.images || []} />
        </div>

        {/* BASE CONTENT ROW */}
        <TwoByOneBlock>
          <TwoByOneBlock.Slot name="left-block">
            <div className="content-wrapper mb-10">
              <div className="content-text">{details?.description}</div>

              <ListItemBlock
                showTitle={false}
                listItems={details?.serviceInfo || []}
              />
            </div>

            <ListItemBlock
              title="What's included"
              listItems={details?.features || []}
            />
          </TwoByOneBlock.Slot>

          <TwoByOneBlock.Slot name="right-block">
            <div className="text-main-primary text-[30px] sm:text-[28px] xs:text-[24px] font-semibold mb-6">
              {details?.amount} per booking
            </div>

            <div className="form-area">
              <TextInputField
                labelId="fullName"
                labelTitle="Full Name"
                inputType={IInputType.Text}
                isRequired={true}
                inputValue=""
                inputPlaceholder="Enter your full name"
                onInputChange={(value) => console.log(value)}
                errorHandler={{
                  validator: "validateFullName",
                  message: "Please enter a valid full name",
                }}
              />

              <TextInputField
                labelId="emailAddress"
                labelTitle="Email Address"
                inputType={IInputType.Email}
                isRequired={true}
                inputValue=""
                inputPlaceholder="Enter your email address"
                onInputChange={(value) => console.log(value)}
                errorHandler={{
                  validator: "validateEmail",
                  message: "Please enter a valid email address",
                }}
              />

              <TextInputField
                labelId="specialRequest"
                labelTitle="Special Request"
                inputType={IInputType.Text}
                isTextArea={true}
                inputValue=""
                inputPlaceholder="Any special request or requirements"
                onInputChange={(value) => console.log(value)}
              />

              <button
                className="btn btn-lg btn-primary w-full"
                onClick={handleBooking}
              >
                Book this Package
              </button>

              <div className="helper-row">
                <div className="text">
                  Questions about this package? <br /> Contact our luxury travel
                  specialists <br /> +1 (443) 590-6066
                </div>
              </div>
            </div>
          </TwoByOneBlock.Slot>
        </TwoByOneBlock>
      </div>
    </div>
  );
};

export default LVServiceDetails;
