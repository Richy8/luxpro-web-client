"use client";

import React from "react";
import {
  PageInfoRow,
  TextInputField,
  SelectInputField,
} from "@/app/_components/(shared)";
import { StackDisplayBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { useToggle } from "@/app/_hooks";
import { ETCustomiseImg } from "@/app/_assets";
import { IInputType } from "@/app/_types/form-type";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import "./ETCustomiseSection.scss";

const ETCustomiseSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };

  return (
    <>
      <div className="et-customise-section">
        <div className="base-container">
          <TwoByOneBlock layoutType="is-stack">
            <TwoByOneBlock.Slot name="left-block">
              <PageInfoRow
                pagePath={[
                  { itemText: "Services", itemLink: "/services" },
                  {
                    itemText: "Executive Travels",
                    itemLink: "/services/executive-travels",
                    isActive: true,
                  },
                  { itemText: "Custom Package", itemLink: "#" },
                ]}
                title={
                  <div className="w-4/5">
                    Customize Your Luxury Travel Package
                  </div>
                }
              />

              {/* FORM CONTENT BLOCK */}
              <div className="form-content-block">
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
                  labelId="phoneNumber"
                  labelTitle="Phone Number"
                  inputType={IInputType.Tel}
                  isRequired={true}
                  inputValue=""
                  inputPlaceholder="e.g +16041234567"
                  onInputChange={(value) => console.log(value)}
                  errorHandler={{
                    validator: "validateRequired",
                    message: "Please enter a valid phone number",
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

                <div className="grid grid-cols-2 gap-x-6">
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
                  labelId="flightTicketType"
                  labelTitle="Flight Ticket Type"
                  inputIcon="icon-airplane"
                  selectData={[
                    { name: "One Way", value: "one-way" },
                    { name: "Round Trip", value: "round-trip" },
                    { name: "Multi City", value: "multi-city" },
                    { name: "One Way", value: "one-way" },
                    { name: "Round Trip", value: "round-trip" },
                    { name: "Multi City", value: "multi-city" },
                  ]}
                  inputPlaceholder="Select ticket type"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <div className="col-span-2">
                  <TextInputField
                    labelId="detailedRequest"
                    labelTitle="Detailed Request"
                    inputType={IInputType.Text}
                    isTextArea={true}
                    inputValue=""
                    inputPlaceholder="Please describe your ideal travel experience in detail. Include your preferences for transportation, accommodation, activities, and any special requests."
                    onInputChange={(value) => console.log(value)}
                  />
                </div>

                <div className="form-action-row col-span-2">
                  <button
                    className="btn btn-md btn-primary"
                    onClick={handleSubmission}
                  >
                    Submit
                  </button>

                  <div className="form-action-text">
                    Our team will contact you within 2 hours to confirm your
                    request and discuss any special requirements.
                  </div>
                </div>
              </div>
            </TwoByOneBlock.Slot>

            <TwoByOneBlock.Slot name="right-block">
              <StackDisplayBlock imageSrc={ETCustomiseImg} />
            </TwoByOneBlock.Slot>
          </TwoByOneBlock>
        </div>
      </div>

      {/* MODAL DIALOGS */}
      <ConfirmationDialog
        showModal={showConfirmationModal}
        toggleModal={setShowConfirmationModal}
        titleText={
          <>
            Thank You! <span className="text-main-primary">Your Request</span>{" "}
            Has Been Received
          </>
        }
        bodyText={
          <>
            <p>
              We've received your custom executive travel request and our team
              is reviewing your details. A dedicated travel expert will get back
              to you shortly with a personalized offer and pricing.
            </p>

            <p>
              For any urgent inquiries or modifications, feel free to reach out
              to us at info@luxpro.com or call +1 (443) 590-6066.
            </p>
          </>
        }
        buttonText="Back to Executive Travels"
        buttonLink="/services/executive-travels"
      />
    </>
  );
};

export default ETCustomiseSection;
