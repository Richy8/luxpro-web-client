"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  TextInputField,
  SelectInputField,
  GridImageCarousel,
} from "@/app/_components/(shared)";
import { ListItemBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { IInputType } from "@/app/_types/form-type";
import Link from "next/link";

const ETServiceDetails = ({ details }: { details: any }) => {
  const router = useRouter();

  const handleReserve = () => {
    router.push(`/services/executive-travels/${details?.slug}/checkout`);
  };

  return (
    <div className="et-service-details mt-14 sm:mt-10">
      <div className="base-container">
        {/* IMAGE GRID CAROUSEL */}
        <div className="mb-14 sm:mb-10">
          <GridImageCarousel imageList={details?.images || []} />
        </div>

        {/* BASE CONTENT ROW */}
        <TwoByOneBlock>
          <TwoByOneBlock.Slot name="left-block">
            <div className="content-text">{details?.description}</div>

            <ListItemBlock listItems={details?.features || []} />
          </TwoByOneBlock.Slot>

          <TwoByOneBlock.Slot name="right-block">
            <div className="text-main-primary text-[32px] lg:text-[28px] sm:text-[26px] font-semibold mb-6">
              {details?.amount}
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

              <SelectInputField
                labelId="destination"
                labelTitle="Destination"
                inputIcon="icon-location"
                selectData={[
                  { name: "New York", value: "new-york" },
                  { name: "London", value: "london" },
                  { name: "Tokyo", value: "tokyo" },
                  { name: "Sydney", value: "sydney" },
                  { name: "Paris", value: "paris" },
                ]}
                inputPlaceholder="Where would you like to go?"
                isRequired={true}
                inputValue=""
                onSelectChange={(value) => console.log(value)}
              />

              <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-3">
                <TextInputField
                  labelId="checkIn"
                  labelTitle="Check In"
                  inputType={IInputType.Date}
                  isRequired={true}
                  inputValue=""
                  inputPlaceholder="Check in date"
                  onInputChange={(value) => console.log(value)}
                  errorHandler={{
                    validator: "validateRequired",
                    message: "This field is required",
                  }}
                />

                <TextInputField
                  labelId="checkOut"
                  labelTitle="Checkn Out"
                  inputType={IInputType.Date}
                  isRequired={true}
                  inputValue=""
                  inputPlaceholder="Check out date"
                  onInputChange={(value) => console.log(value)}
                  errorHandler={{
                    validator: "validateRequired",
                    message: "This field is required",
                  }}
                />
              </div>

              <SelectInputField
                labelId="guest"
                labelTitle="Number of Guest"
                inputIcon="icon-users"
                selectData={[
                  { name: "1 Guest", value: "1" },
                  { name: "2 Guests", value: "2" },
                  { name: "3 Guests", value: "3" },
                  { name: "4 Guests", value: "4" },
                  { name: "5 Guests", value: "5" },
                ]}
                inputPlaceholder="Select number of guests"
                isRequired={true}
                inputValue=""
                onSelectChange={(value) => console.log(value)}
              />

              <button
                className="btn btn-lg btn-primary w-full"
                onClick={handleReserve}
              >
                Reserve
              </button>

              <div className="helper-row">
                <div className="text">
                  Not registered yet? <Link href="/register">Sign up</Link> for
                  exclusive benefits.
                </div>
              </div>
            </div>
          </TwoByOneBlock.Slot>
        </TwoByOneBlock>
      </div>
    </div>
  );
};

export default ETServiceDetails;
