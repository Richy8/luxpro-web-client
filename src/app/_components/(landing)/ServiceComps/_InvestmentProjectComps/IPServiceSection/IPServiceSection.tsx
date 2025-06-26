"use client";

import React from "react";
import {
  PageInfoRow,
  TextInputField,
  SelectInputField,
} from "@/app/_components/(shared)";
import { StackDisplayBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { IPImageFour } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";
import { IInputType } from "@/app/_types/form-type";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import "./IPServiceSection.scss";

const IPServiceSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };
  return (
    <>
      <div className="ip-service-section">
        <div className="base-container">
          <TwoByOneBlock layoutType="is-stack">
            <TwoByOneBlock.Slot name="left-block">
              <PageInfoRow
                pagePath={[
                  { itemText: "Services", itemLink: "/services" },
                  {
                    itemText: "Investment & Projects",
                    itemLink: "/services/investment-projects",
                    isActive: true,
                  },
                  { itemText: "Service Request", itemLink: "#" },
                ]}
                title={
                  <div className="w-4/5">
                    Let’s Discuss{" "}
                    <span className="text-main-primary">Your Investment</span>{" "}
                    Goals
                  </div>
                }
                description={`Our advisors are ready to help you explore tailored opportunities that match your interests. Fill out the form below to schedule your private call.`}
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
                  labelId="preferredInvestmentType"
                  labelTitle="Preferred Investment Type"
                  selectData={[
                    { name: "Real Estate", value: "real-estate" },
                    { name: "Private Equity", value: "private-equity" },
                    { name: "Venture Capital", value: "venture-capital" },
                    {
                      name: "Real Estate Investment Trust (REIT)",
                      value: "reit",
                    },
                  ]}
                  inputPlaceholder="Select investment type"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <SelectInputField
                  labelId="preferredCallDate"
                  labelTitle="Preferred Call Date"
                  inputIcon="icon-calendar-add"
                  selectData={[
                    { name: "Today", value: "today" },
                    { name: "Tomorrow", value: "tomorrow" },
                    { name: "Next Week", value: "next-week" },
                    { name: "Next Month", value: "next-month" },
                    { name: "Other", value: "other" },
                  ]}
                  inputPlaceholder="Select your timeline"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <SelectInputField
                  labelId="preferredInvestmentRegion"
                  labelTitle="Preferred Investment Region"
                  selectData={[
                    { name: "North America", value: "north-america" },
                    { name: "Europe", value: "europe" },
                    { name: "Asia", value: "asia" },
                    { name: "Africa", value: "africa" },
                    { name: "Other", value: "other" },
                  ]}
                  inputPlaceholder="Select region"
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
                    inputPlaceholder="Please tell us about your investment goals or any questions you already have..."
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
                    request and discuss a way forward.
                  </div>
                </div>
              </div>
            </TwoByOneBlock.Slot>

            <TwoByOneBlock.Slot name="right-block">
              <StackDisplayBlock imageSrc={IPImageFour} />
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
            Your Call is <span className="text-main-primary">Scheduled</span>
          </>
        }
        bodyText={
          <>
            <p className="">
              Thank you for your interest in our exclusive investment
              opportunities. Our team will contact you shortly to confirm your
              appointment.
            </p>
          </>
        }
        buttonText="Back to Investments"
        buttonLink="/services/investments-projects"
      />
    </>
  );
};

export default IPServiceSection;
