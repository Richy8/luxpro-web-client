"use client";

import React from "react";
import {
  PageInfoRow,
  TextInputField,
  SelectInputField,
} from "@/app/_components/(shared)";
import {
  StackDisplayBlock,
  TwoByOneBlock,
  OutlineServiceCard,
} from "@/app/_components/(landing)";
import { PMImageTwo } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";
import { IInputType } from "@/app/_types/form-type";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import "./PMServiceSection.scss";

const pmNextSteps = [
  {
    icon: "call-calling",
    title: "Initial Contact",
    description:
      "Our specialist will contact you within 24 hours to discuss your requirements.",
  },
  {
    icon: "like-shapes",
    title: "Personalized Quote",
    description:
      "We'll prepare a detailed quote tailored to your property management needs.",
  },
  {
    icon: "house",
    title: "Service Setup",
    description:
      "Once approved, we'll set up your property management services promptly.",
  },
];

const PMServiceSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };
  return (
    <>
      <div className="pm-service-section">
        <div className="base-container">
          <TwoByOneBlock layoutType="is-stack">
            <TwoByOneBlock.Slot name="left-block">
              <PageInfoRow
                pagePath={[
                  { itemText: "Services", itemLink: "/services" },
                  {
                    itemText: "Luxury Real Estate",
                    itemLink: "/services/luxury-real-estate",
                  },
                  {
                    itemText: "Property Management",
                    itemLink:
                      "/services/luxury-real-estate/property-management",
                    isActive: true,
                  },
                  { itemText: "Service Request", itemLink: "#" },
                ]}
                title={
                  <div className="w-4/5">
                    Request Our{" "}
                    <span className="text-main-primary">
                      Property Management
                    </span>{" "}
                    Services
                  </div>
                }
                description={`Complete the form below to receive a customized property management service quote tailored to your needs.`}
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
                  labelId="propertyLocation"
                  labelTitle="Property Location"
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

                <div className="col-span-2">
                  <TextInputField
                    labelId="detailedRequest"
                    labelTitle="Detailed Request"
                    inputType={IInputType.Text}
                    isTextArea={true}
                    inputValue=""
                    inputPlaceholder="Please provide any additional details about your property management needs"
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
              <StackDisplayBlock imageSrc={PMImageTwo} />
            </TwoByOneBlock.Slot>
          </TwoByOneBlock>
        </div>
      </div>

      {/* MODAL DIALOGS */}
      <ConfirmationDialog
        showModal={showConfirmationModal}
        toggleModal={setShowConfirmationModal}
        modalSize="modal-lg"
        modalBodySize="w-[90%]"
        titleText={
          <>
            Thank you for{" "}
            <span className="text-main-primary">Your Request</span>
          </>
        }
        bodyText={
          <>
            <p className="">
              We've received your property management quote request and our team
              is reviewing your details.
            </p>

            <p className="text-3xl font-semibold mb-2">What Happens Next?</p>

            <div className="grid grid-cols-3 gap-x-3">
              {pmNextSteps.map((step, index) => (
                <OutlineServiceCard
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </>
        }
        buttonText="Back to Property Management"
        buttonLink="/services/property-management"
      />
    </>
  );
};

export default PMServiceSection;
