"use client";

import React from "react";
import {
  PageInfoRow,
  TextInputField,
  SelectInputField,
} from "@/app/_components/(shared)";
import { StackDisplayBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { LMImageSix } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";
import { IInputType } from "@/app/_types/form-type";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import "./LMServiceSection.scss";

const LMServiceSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };
  return (
    <>
      <div className="lm-service-section">
        <div className="base-container">
          <TwoByOneBlock layoutType="is-stack">
            <TwoByOneBlock.Slot name="left-block">
              <PageInfoRow
                pagePath={[
                  { itemText: "Services", itemLink: "/services" },
                  {
                    itemText: "Lifestyle Management",
                    itemLink: "/services/lifestyle-management",
                    isActive: true,
                  },
                  { itemText: "Service Request", itemLink: "#" },
                ]}
                title={
                  <div className="w-4/5">
                    Request Our{" "}
                    <span className="text-main-primary">
                      Lifestyle Management
                    </span>{" "}
                    Services
                  </div>
                }
                description={`Tell us what you need, and let our team handle the details. Whether it’s sourcing a rare item, planning a once-in-a-lifetime experience, or managing your daily essentials, we’re here to make it happen.`}
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
                  labelId="requestType"
                  labelTitle="Request Type"
                  selectData={[
                    {
                      name: "Personal Luxury Shopping",
                      value: "personal-luxury-shopping",
                    },
                    {
                      name: "Premium Gifts Sourcing",
                      value: "premium-gifts-sourcing",
                    },
                    {
                      name: "Other",
                      value: "other",
                    },
                  ]}
                  inputPlaceholder="Select your request type"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <TextInputField
                  labelId="budgetRange"
                  labelTitle="Budget Range"
                  inputType={IInputType.Text}
                  isRequired={true}
                  inputValue=""
                  inputPlaceholder="Enter your estimated budget"
                  onInputChange={(value) => console.log(value)}
                  errorHandler={{
                    validator: "validateRequired",
                    message: "This is a required field",
                  }}
                />

                <SelectInputField
                  labelId="preferredTimeline"
                  labelTitle="Preferred Timeline"
                  inputIcon="icon-calendar-add"
                  selectData={[
                    { name: "Within 24 hours", value: "24-hours" },
                    { name: "Within 48 hours", value: "48-hours" },
                    { name: "Within 7 days", value: "7-days" },
                    { name: "Within 14 days", value: "14-days" },
                    { name: "Within 30 days", value: "30-days" },
                  ]}
                  inputPlaceholder="Select your timeline"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <div className="col-span-2">
                  <TextInputField
                    labelId="detailedRequest"
                    labelTitle="Describe Your Request"
                    inputType={IInputType.Text}
                    isTextArea={true}
                    inputValue=""
                    inputPlaceholder="Please provide in detailed what you need..."
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
              <StackDisplayBlock imageSrc={LMImageSix} />
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
            Thank you! We've{" "}
            <span className="text-main-primary">Received Your Request</span>
          </>
        }
        bodyText={
          <>
            <p className="">
              Our team will review the details and get back to you shortly with
              a personalized response.
            </p>
          </>
        }
        buttonText="Explore More Services"
        buttonLink="/services/lifestyle-management"
      />
    </>
  );
};

export default LMServiceSection;
