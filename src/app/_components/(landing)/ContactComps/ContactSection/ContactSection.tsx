import React from "react";
import { PageInfoRow } from "@/app/_components/(shared)";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="base-container">
        <PageInfoRow
          pagePath={[{ itemText: "Contact", itemLink: "" }]}
          title={
            <>
              Contact <span className="text-main-primary">Us</span>
            </>
          }
          description={
            <div className="w-[45%]">
              We’re here to help with every detail, from your next luxury
              experience to any questions you may have. Reach out to us anytime
              and our dedicated team will assist you promptly.
            </div>
          }
          hasTopMargin
        />

        <div className="contact-info-section">
          <div className="contact-info-section--left">
            <h3 className="title-text">Get In Touch</h3>

            <div className="content-area">
              <div className="contact-list">
                <div className="contact-list-item">
                  <div className="icon icon-tick-circle"></div>
                  <div className="text">Email: info@luxpro.vip</div>
                </div>

                <div className="contact-list-item">
                  <div className="icon icon-tick-circle"></div>
                  <div className="text">Phone: +1 (443) 590-6066</div>
                </div>

                <div className="contact-list-item">
                  <div className="icon icon-tick-circle"></div>
                  <div className="text">
                    Office: 123, Onikoyi Street, Victoria Island, Lagos, Nigeria
                  </div>
                </div>
              </div>

              <div className="contact-details">
                Our team is available Monday to Saturday, from 9:00 AM to 6:00
                PM (GMT+1). For urgent requests, please use the phone number
                above.
              </div>
            </div>
          </div>

          <div className="contact-info-section--right">
            <h3 className="title-text">Send Us a Message</h3>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  id="emailAddress"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="e.g +16041234567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceofInterest" className="form-label">
                  Service of Interest
                </label>

                <div className="select-wrapper">
                  <select id="serviceofInterest" className="form-control">
                    <option value="" selected>
                      Select service of interest
                    </option>
                    <option value="executive-travels">Executive Travels</option>
                    <option value="luxury-rentals">Luxury Rentals</option>
                    <option value="luxury-real-estate">
                      Luxury Real Estate
                    </option>
                    <option value="luxury-vacations">Luxury Vacations</option>
                    <option value="lifestyle-management">
                      Lifestyle Management
                    </option>
                    <option value="global-events">Global Events</option>
                    <option value="investments-projects">
                      Investments & Projects
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group form-group-base">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  className="form-control"
                  placeholder="Type of your type, questions or general request..."
                ></textarea>
              </div>

              <div className="form-action-row">
                <button className="btn btn-md btn-primary">Send Message</button>

                <div className="form-action-text">
                  Our team will contact you within 2 hours to confirm your
                  request and discuss a way forward.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
