"use client";

import React from "react";
import { IInputType } from "@/app/_types/form-type";
import {
  GridImageCarousel,
  SelectInputField,
  TextInputField,
} from "@/app/_components/(shared)";
import {
  ListItemBlock,
  TitleTopBlock,
  TwoByOneBlock,
} from "@/app/_components/(landing)";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";
import { LRImageOne, LRImageTwo, LRImageThree } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";

const lrFeatureList = [
  { icon: "airplane", text: "Private Jets for effortless global travel" },
  { icon: "building", text: "Luxury apartments in prime locations" },
  { icon: "ship", text: "Yachts for exclusive ocean experiences" },
  { icon: "car", text: "Exotic cars to match your elite lifestyle" },
  {
    icon: "security-user",
    text: "Professional security for added peace of mind",
  },
  {
    icon: "smart-car",
    text: "Chauffeur-driven vehicles for ultimate comfort",
  },
];

const LRInfoSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };

  return (
    <>
      <div className="lr-info-section">
        <div className="base-container">
          {/* TITLE TOP */}
          <TitleTopBlock
            title={
              <>
                Select Your Preferred{" "}
                <span className="text-main-primary">Luxury Rental</span> Package
              </>
            }
          />

          {/* IMAGE DISPLAY */}
          <div className="image-display-area">
            <GridImageCarousel
              imageList={[LRImageOne, LRImageTwo, LRImageThree]}
            />
          </div>

          {/* BASE CONTENT ROW */}
          <div className="-mb-12">
            <TwoByOneBlock>
              <TwoByOneBlock.Slot name="left-block">
                <div className="content-text">{`Experience the finest in luxury with our exclusive rental services, tailored to meet your every need. Whether you desire a private jet for seamless travel, an exotic car for a statement arrival, or a stunning yacht for an unforgettable getaway, we provide top-tier options with premium service.`}</div>

                <ListItemBlock listItems={lrFeatureList || []} />

                <div className="content-text mt-8 flex flex-col gap-y-6">
                  <p>
                    Our expert team ensures a seamless process, handling every
                    detail so you can focus on enjoying the luxury you deserve.
                  </p>

                  <p className="font-medium">
                    Book your preferred rental today and travel in style.
                  </p>
                </div>
              </TwoByOneBlock.Slot>

              <TwoByOneBlock.Slot name="right-block">
                <div className="text-gray-500 text-[17px] font-semibold mb-6">
                  Select from a range of luxury rentals:
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

                  <div className="grid grid-cols-2 gap-6">
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
                    labelId="luxuryRentalItems"
                    labelTitle="Luxury Rental Items"
                    inputIcon="icon-airplane"
                    selectData={[
                      { name: "Private Jet", value: "private-jet" },
                      { name: "Private Yacht", value: "private-yacht" },
                      { name: "Private Car", value: "private-car" },
                      { name: "Private Boat", value: "private-boat" },
                      {
                        name: "Private Helicopter",
                        value: "private-helicopter",
                      },
                    ]}
                    inputPlaceholder="What would you like to rent?"
                    isRequired={true}
                    inputValue=""
                    onSelectChange={(value) => console.log(value)}
                  />

                  <SelectInputField
                    labelId="needChauffeur"
                    labelTitle="Need a chauffeur?"
                    inputIcon="icon-smart-car"
                    selectData={[
                      { name: "Yes", value: "yes" },
                      { name: "No", value: "no" },
                    ]}
                    inputPlaceholder="Yes / No?"
                    isRequired={true}
                    inputValue=""
                    onSelectChange={(value) => console.log(value)}
                  />

                  <TextInputField
                    labelId="detailedRequest"
                    labelTitle="Detailed Request"
                    inputType={IInputType.Text}
                    isTextArea={true}
                    inputValue=""
                    inputPlaceholder="Describe in details what your preferred private jet, yacht, vehicles, travelling with pets, medical evacuation etc."
                    onInputChange={(value) => console.log(value)}
                  />

                  <button
                    className="btn btn-lg btn-primary w-full"
                    onClick={handleSubmission}
                  >
                    Submit
                  </button>

                  <div className="helper-row">
                    <div className="text">
                      Our team will contact you within 2 hours to confirm your
                      request and discuss any special requirements.
                    </div>
                  </div>
                </div>
              </TwoByOneBlock.Slot>
            </TwoByOneBlock>
          </div>
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
              We’ve received your luxury rental request and our team is already
              working on it. A dedicated expert will review your details and get
              back to you shortly with confirmation and pricing.
            </p>

            <p>
              If you have any urgent requests or modifications, feel free to
              contact us at info@luxpro.com or call +1 (443) 590-6066.
            </p>
          </>
        }
        buttonText="Go to Home"
        buttonLink="/home"
      />
    </>
  );
};

export default LRInfoSection;
