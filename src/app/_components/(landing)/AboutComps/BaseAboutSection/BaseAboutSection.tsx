import React from "react";
import { AboutImgOne, AboutImgTwo, AboutImgThree } from "@/app/_assets";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./BaseAboutSection.scss";

const BaseAboutSection = () => {
  return (
    <section className="base-about-section">
      <div className="base-container">
        {/* TOP SECTION */}
        <div className="top-section">
          <p>
            At LuxPro, we believe luxury is not just about what you own, it’s
            about how you experience life.
          </p>

          <p>
            We exist to make your journeys, investments, and experiences as
            seamless, secure, and exceptional as possible.
          </p>

          <p>
            From executive travels and private rentals to exclusive events and
            curated investment opportunities, we bring you services that match
            your ambition and lifestyle.
          </p>
          <p>
            Every detail is handled with care, and every experience is tailored
            to you, because we understand that our clients expect nothing less
            than the extraordinary.
          </p>
        </div>

        {/* MID SECTION */}
        <div className="mid-section">
          <div className="stat-item">
            <div className="stat-counter">
              <div className="stat-counter-icon icon-award"></div>
              <div className="stat-counter-text">10</div>
            </div>

            <div className="stat-label">
              Years of <br /> experience
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-counter">
              <div className="stat-counter-icon icon-tick-circle"></div>
              <div className="stat-counter-text">100</div>
            </div>

            <div className="stat-label">
              Successful <br /> trips
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-counter">
              <div className="stat-counter-icon icon-happy-emoji"></div>
              <div className="stat-counter-text">95%</div>
            </div>

            <div className="stat-label">
              Happy <br /> Customers
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">
          <div className="image-wrapper">
            <AnimatedImage
              src={AboutImgOne}
              alt="Happy Customer"
              animationType="soft-zoom"
            />
          </div>

          <div className="image-wrapper">
            <AnimatedImage
              src={AboutImgThree}
              alt="Exclusive vacation"
              animationType="soft-zoom"
            />
          </div>

          <div className="image-wrapper">
            <AnimatedImage
              src={AboutImgTwo}
              alt="Living in luxury"
              animationType="soft-zoom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseAboutSection;
