import React from "react";
import { AboutValuesImg } from "@/app/_assets";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./OurValuesSection.scss";

const values = [
  {
    title: "Impeccable Timing",
    description:
      "We understand that time is your most precious asset. Our service is defined by promptness, efficiency, and respect for your schedule.",
  },
  {
    title: "Uncompromising Quality",
    description:
      "From the partners we choose to the experiences we craft, we maintain the highest standards in every aspect of our service.",
  },
  {
    title: "Passionate Service",
    description:
      "Our team brings genuine enthusiasm to curating exceptional experiences that reflect your unique preferences and desires.",
  },
  {
    title: "Global Network",
    description:
      "Our extensive connections across six continents ensure you have access to the finest experiences wherever your journey takes you.",
  },
  {
    title: "Client-Centric Focus",
    description:
      "Your satisfaction drives everything we do. We listen closely to your needs and adapt our services to exceed your expectations.",
  },
  {
    title: "Legacy Building",
    description:
      "We're committed to creating experiences that build lasting memories and connections for our clients and their families.",
  },
];

const OurValuesSection = () => {
  return (
    <section className="values-section">
      <div className="base-container">
        {/* TOP ROW */}
        <div className="top-row">
          <h2 className="title-text">
            Our <span className="text-main-primary">Values</span>{" "}
          </h2>

          <div className="description-text">
            The principles that guide everything we do at LuxPro.vip
          </div>
        </div>

        {/* MID ROW */}
        <div className="mid-row">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="icon-wrapper">
                <div className="icon icon-verify"></div>
              </div>

              <h3 className="title-text">{value.title}</h3>
              <div className="description">{value.description}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="image-wrapper">
            <AnimatedImage
              src={AboutValuesImg}
              alt="over values"
              animationType="soft-zoom"
            />
          </div>

          <div className="value-content">
            <h2 className="title-text">
              What <span className="text-main-primary">We Stand</span> For
            </h2>

            <div className="list-items">
              <div className="item-row">
                <div className="icon icon-tick-circle"></div>
                <div className="item-text">
                  Exclusivity — Access to premium services and rare
                  opportunities.
                </div>
              </div>

              <div className="item-row">
                <div className="icon icon-tick-circle"></div>
                <div className="item-text">
                  Trust & Discretion — We handle every request with the utmost
                  privacy and professionalism.
                </div>
              </div>

              <div className="item-row">
                <div className="icon icon-tick-circle"></div>
                <div className="item-text">
                  Personalization — Every experience is crafted to fit your
                  taste and goals.
                </div>
              </div>

              <div className="item-row">
                <div className="icon icon-tick-circle"></div>
                <div className="item-text">
                  Global Reach — Wherever you are, our services follow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
