import React from "react";
import { HappyCustomer } from "@/app/_assets";
import { AnimatedImage } from "@/app/_components/(shared)";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="base-container">
        {/* TOP ROW */}
        <div className="top-row">
          <h2 className="title-text">
            Here, <span className="text-main-primary">Luxury</span> Meets{" "}
            <span className="text-main-primary">Professionalism</span>
          </h2>

          <div className="description-text">
            Experience world-class luxury with seamless service, personalized
            travel, and premium comfort — crafted for those who expect the best.
          </div>
        </div>

        {/* BASE ROW */}
        <div className="base-row">
          <div className="image-container">
            <AnimatedImage
              src={HappyCustomer}
              alt="Smiling traveler"
              imgClassName="profile-image"
              animationType="soft-zoom"
              priority={true}
            />
          </div>

          <div className="content">
            <h2>
              About <span className="text-main-primary">LuxPro</span>
            </h2>

            <div className="about-content-data">
              <div className="content-item">
                Luxury should be effortless, and at LuxPro, we make sure it is.
                Whether you're flying first class, staying in a stunning luxury
                apartment, or riding in a chauffeur-driven car, we handle every
                detail so you can travel with ease and confidence.
              </div>

              <div className="content-item">
                From premium travel packages to custom luxury rentals and real
                estate, we bring you comfort, security, and a touch of
                exclusivity, exactly the way you deserve.
              </div>

              <div className="content-item">
                Travel better, live luxuriously.
              </div>
            </div>

            <div className="content-stats">
              <div className="stat-item">
                <div className="stat-counter">
                  <div className="stat-counter-icon icon-award"></div>
                  <div className="stat-counter-text">10</div>
                </div>

                <div className="stat-label">Years of experience</div>
              </div>

              <div className="stat-item">
                <div className="stat-counter">
                  <div className="stat-counter-icon icon-tick-circle"></div>
                  <div className="stat-counter-text">100</div>
                </div>

                <div className="stat-label">Successful trips</div>
              </div>

              <div className="stat-item">
                <div className="stat-counter">
                  <div className="stat-counter-icon icon-happy-emoji"></div>
                  <div className="stat-counter-text">95%</div>
                </div>

                <div className="stat-label">Happy Customers</div>
              </div>
            </div>

            <button className="btn btn-md btn-primary">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
