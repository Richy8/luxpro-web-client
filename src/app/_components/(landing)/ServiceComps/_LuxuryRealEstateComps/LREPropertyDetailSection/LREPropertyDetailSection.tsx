"use client";

import React from "react";
import { TextInputField, GridImageCarousel } from "@/app/_components/(shared)";
import { ListItemBlock, TwoByOneBlock } from "@/app/_components/(landing)";
import { IInputType } from "@/app/_types/form-type";
import { LREImageOne, LREImageTwo, LREImageThree } from "@/app/_assets";
import { useToggle } from "@/app/_hooks";
import { ConfirmationDialog } from "@/app/_components/(dialogs)";

const LREPropertyDetailSection = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useToggle();

  const handleSubmission = () => {
    setShowConfirmationModal();
  };

  return (
    <>
      <div className="lre-property-detail-section mt-12">
        <div className="base-container">
          {/* IMAGE GRID CAROUSEL */}
          <div className="mb-14">
            <GridImageCarousel
              imageList={[LREImageOne, LREImageTwo, LREImageThree]}
            />
          </div>

          {/* BASE CONTENT ROW */}
          <TwoByOneBlock>
            <TwoByOneBlock.Slot name="left-block">
              <div className="content-wrapper mb-10 sm:mb-0 sm:-mt-6">
                <div className="content-text">
                  A stunning 5-bedroom penthouse with panoramic city views,
                  private infinity pool, and premium concierge service. Designed
                  for elite travelers who demand exclusivity and comfort.
                </div>
              </div>

              <ListItemBlock
                title="What's included"
                listItems={[
                  {
                    icon: "checkmark",
                    text: "Automated home controls",
                  },
                  {
                    icon: "checkmark",
                    text: "Premium entertainment system",
                  },
                  {
                    icon: "checkmark",
                    text: "Secure parking",
                  },
                  {
                    icon: "checkmark",
                    text: "In-unit gym",
                  },
                  {
                    icon: "checkmark",
                    text: "High-speed internet",
                  },
                  {
                    icon: "checkmark",
                    text: "Personalized concierge service",
                  },
                ]}
              />
            </TwoByOneBlock.Slot>

            <TwoByOneBlock.Slot name="right-block">
              <div className="text-main-primary text-[30px] md:text-[26px] sm:text-2xl xs:text-[22px] font-semibold mb-6">
                $5,500 per night
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

                <button
                  className="btn btn-lg btn-primary w-full"
                  onClick={handleSubmission}
                >
                  Submit to Explore Property
                </button>

                <div className="helper-row">
                  <div className="text">
                    Fill out our simple form, and one of our dedicated team
                    members will reach out to schedule a private meeting where
                    you can experience a detailed presentation of the property.
                  </div>
                </div>
              </div>
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
            Thank you! <span className="text-main-primary">Your Request</span>{" "}
            Has Been Received
          </>
        }
        bodyText={
          <>
            <p className="">
              {`Thanks for reaching out. We've received your information, and our
              team is reviewing your request. You'll hear from us soon to
              arrange your exclusive property presentation. We look forward to
              helping you discover your perfect luxury home.`}
            </p>
          </>
        }
        buttonText="Explore more Property"
        buttonLink="/services/luxury-real-estate/properties"
      />
    </>
  );
};

export default LREPropertyDetailSection;
