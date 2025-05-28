import React from "react";
import Link from "next/link";
import "./AboutCTASection.scss";

const AboutCTASection = () => {
  return (
    <section className="about-cta-section">
      <div className="base-container">
        <div className="cta-card">
          <h2 className="title-text">
            {"Let’s Create"}{" "}
            <span className="text-main-primary">Your Next Experience</span>
          </h2>

          <div className="description-text">
            {
              "Ready to experience life at its finest? Connect with us today and let’s start planning something unforgettable."
            }
          </div>

          <div className="btn-row">
            <Link href="/services" className="btn btn-md btn-primary-outline">
              Explore our Services
            </Link>

            <Link href="/contact" className="btn btn-md btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
