"use client";

import React from "react";
import {
  PageInfoRow,
  TextInputField,
  SelectInputField,
} from "@/app/_components/(shared)";
import { StackDisplayBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { GEImageTen } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";
import { IInputType } from "@/app/_types/form-type";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import "./GEServiceSection.scss";

const GEServiceSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };
  return (
    <>
      <div className="ge-service-section">
        <div className="base-container">
          <TwoByOneBlock layoutType="is-stack">
            <TwoByOneBlock.Slot name="left-block">
              <PageInfoRow
                pagePath={[
                  { itemText: "Services", itemLink: "/services" },
                  {
                    itemText: "Global Events",
                    itemLink: "/services/global-events",
                    isActive: true,
                  },
                  { itemText: "Service Request", itemLink: "#" },
                ]}
                title={
                  <div className="w-4/5">
                    Request{" "}
                    <span className="text-main-primary">Exclusive Access</span>
                  </div>
                }
                description={`Fill out the form below and our event specialists will work with you to create a customized experience tailored to your preferences.`}
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

                <TextInputField
                  labelId="eventOfInterest"
                  labelTitle="Special Event of Interest"
                  inputType={IInputType.Text}
                  isRequired={true}
                  inputValue=""
                  inputPlaceholder="E.g, Monaco Pix, Cinema Festival"
                  onInputChange={(value) => console.log(value)}
                  errorHandler={{
                    validator: "validateRequired",
                  }}
                />

                <SelectInputField
                  labelId="numberOfGuests"
                  labelTitle="Number of Guests"
                  selectData={[
                    { name: "1 guest", value: "1" },
                    { name: "2 guests", value: "2" },
                    { name: "3 guests", value: "3" },
                    { name: "4 guests", value: "4" },
                  ]}
                  inputPlaceholder="Select number of guests"
                  isRequired={true}
                  inputValue=""
                  onSelectChange={(value) => console.log(value)}
                />

                <SelectInputField
                  labelId="preferredExperience"
                  labelTitle="Preferred Experience"
                  selectData={[
                    { name: "In-person", value: "in-person" },
                    { name: "Virtual", value: "virtual" },
                  ]}
                  inputPlaceholder="Select experience"
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
              <StackDisplayBlock imageSrc={GEImageTen} />
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
        buttonText="Explore Events Packages"
        buttonLink="/services/global-events"
      />
    </>
  );
};

export default GEServiceSection;
