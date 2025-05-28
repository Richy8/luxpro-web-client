"use client";

import React, { useState } from "react";
import { InfoDataCardRow } from "@/app/_components/(landing)";
import { TextInputField, RangeSlider } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";
import { LREImageOne, LREImageTwo, LREImageThree } from "@/app/_assets";
import "./LREPropertiesSection.scss";

const LREPropertiesSection = () => {
  const [selectedPrice, setSelectedPrice] = useState<number>(68);

  const handlePriceChange = (newPrice: number) => {
    setSelectedPrice(newPrice);
    console.log("Selected Price:", newPrice);
  };

  const propertiesList = [
    {
      imageSrc: LREImageOne,
      title: "The Royale Penthouse",
      slug: "the-royale-penthouse",
      subtitle: "$5,500 per night",
      description:
        "A stunning 5-bedroom penthouse with panoramic city views, private infinity pool, and premium concierge service. Designed for elite travelers who demand exclusivity and comfort.",
      actionCTALink: "",
    },
    {
      imageSrc: LREImageTwo,
      title: "The Grand Residence",
      slug: "the-grand-residence",
      subtitle: "$3,800 per night",
      description:
        "A 4-bedroom luxury apartment featuring elegant interiors, a private chef option, and top-tier security. Perfect for executives and high-profile guests seeking a seamless stay.",
      actionCTALink: "",
    },
    {
      imageSrc: LREImageThree,
      title: "The Prestige Suite",
      slug: "the-prestige-suite",
      subtitle: "$2,500 per night",
      description:
        "A 3-bedroom high-rise apartment with floor-to-ceiling windows, modern furnishings, and 24/7 butler service. Ideal for those who appreciate refined luxury in a prime location.",
      actionCTALink: "",
    },
  ];

  return (
    <div className="lre-properties-section">
      <div className="base-container">
        <div className="section-container">
          <div className="section--left">
            {/* PROPERTY BLOCK */}
            <div className="property-block">
              <div className="property-group">
                <div className="property-group--title">
                  Search location or property
                </div>

                <div className="property-group--body">
                  <TextInputField
                    inputType={IInputType.Search}
                    inputValue=""
                    inputPlaceholder="Search location or property"
                    hasBottomPadding={false}
                    onInputChange={(value) => console.log(value)}
                  />
                </div>
              </div>

              <div className="property-group">
                <div className="property-group--title">Luxpro Real Estate</div>
                <div className="property-group--body flex flex-col gap-y-4">
                  <label htmlFor="luxury-apartments">
                    <input type="checkbox" id="luxury-apartments" />
                    <div className="text">Luxury Apartments</div>
                  </label>

                  <label htmlFor="property-sale">
                    <input type="checkbox" id="property-sale" />
                    <div className="text">Property Sale</div>
                  </label>
                </div>
              </div>

              <div className="property-group">
                <div className="property-group--title">Price Range</div>
                <div className="property-group--body">
                  <RangeSlider
                    min={50}
                    max={150}
                    initialValue={selectedPrice}
                    onChange={handlePriceChange}
                    step={1}
                  />
                </div>
              </div>

              <div className="property-group">
                <div className="property-group--title">Property Type</div>
                <div className="property-group--body flex flex-col gap-y-4">
                  <label htmlFor="hotels">
                    <input type="checkbox" id="hotels" />
                    <div className="text">Hotels</div>
                  </label>

                  <label htmlFor="apartments">
                    <input type="checkbox" id="apartments" />
                    <div className="text">Apartments</div>
                  </label>

                  <label htmlFor="resorts">
                    <input type="checkbox" id="resorts" />
                    <div className="text">Resorts</div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="section--right">
            {/* PROPERTY AREA */}
            <div className="property-area">
              {propertiesList.map((property, index: number) => (
                <InfoDataCardRow
                  key={index}
                  imageSrc={property.imageSrc}
                  title={property.title}
                  subtitle={property.subtitle}
                  description={property.description}
                  actionCTA={"Explore"}
                  actionCTALink={`/services/luxury-real-estate/properties/${property.slug}`}
                  cardSize="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LREPropertiesSection;
