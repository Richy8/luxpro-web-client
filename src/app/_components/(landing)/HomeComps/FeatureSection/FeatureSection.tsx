import React from "react";
import Image from "next/image";
import { CarRentals, FlightRentals } from "@/app/_assets";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./FeatureSection.scss";

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="base-container top-section">
        <h2 className="title-text">
          Experience Luxury,{" "}
          <span className="text-main-primary">Every Step of the Way</span>
        </h2>

        <div className="description-text">
          From elite travel and luxury rentals to premium real estate and
          concierge services, we bring you seamless, first-class experiences
          tailored to your lifestyle.
        </div>
      </div>

      <div className="base-container bottom-section">
        {/* FEATURE ITEM ONE */}
        <div className="feature-item">
          <div className="feature-item-content">
            <h3 className="feature-item-title">Executive Travels</h3>

            <div className="feature-item-description">
              Check out our various packages in the destinations where we
              provide premium travel services that give you security, comfort,
              and peace of mind.
            </div>

            <button className="btn btn-md btn-primary">Explore LuxPro</button>
          </div>

          <div className="feature-image">
            <AnimatedImage
              src={CarRentals}
              alt="Car Rentals"
              animationType="soft-zoom"
              priority={true}
            />
          </div>
        </div>

        {/* FEATURE ITEM TWO */}
        <div className="feature-item">
          <div className="feature-image">
            <AnimatedImage
              src={FlightRentals}
              alt="Flight Rentals"
              priority={true}
              animationType="soft-zoom"
            />
          </div>

          <div className="feature-item-content">
            <h3 className="feature-item-title">Luxury Rentals</h3>

            <div className="feature-item-description">
              We offer luxury rental across multiples needs. Our dedicated
              travel experts will work with you to make your travel seamless and
              hitch free.
            </div>

            <button className="btn btn-md btn-primary">Explore LuxPro</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
