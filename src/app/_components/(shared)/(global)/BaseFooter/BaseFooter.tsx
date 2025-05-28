"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuxProDark } from "@/app/_assets";
import { BaseFooterCTA } from "@/app/_components/(shared)";
import "./BaseFooter.scss";

const BaseFooter = () => {
  return (
    <footer className="footer" id="contact">
      {/* FOOTER CTA */}
      <BaseFooterCTA />

      {/* FOOTER TOP */}
      <div className="footer--top">
        <div className="base-container footer--top--container">
          {/* TOP LEFT FOOTER */}
          <div className="footer--top--container--left">
            {/* APP LOGO */}
            <div className="app-logo">
              <Image src={LuxProDark} width={100} height={50} alt="LuxPro" />
            </div>

            {/* APP BIO */}
            <div className="app-bio">
              Elevating luxury travel experiences with personalized service and
              uncompromising attention to detail.
            </div>

            <div className="app-socials">
              <Link
                href="https://www.facebook.com/"
                className="social-icon"
                target="_blank"
              >
                <div className="icon icon-facebook"></div>
              </Link>

              <Link
                href="https://www.instagram.com/"
                className="social-icon"
                target="_blank"
              >
                <div className="icon icon-instagram"></div>
              </Link>

              <Link
                href="https://www.linkedin.com/"
                className="social-icon"
                target="_blank"
              >
                <div className="icon icon-linkedin"></div>
              </Link>

              <Link
                href="https://www.twitter.com/"
                className="social-icon"
                target="_blank"
              >
                <div className="icon icon-x-twitter"></div>
              </Link>
            </div>
          </div>

          {/* TOP RIGHT FOOTER */}
          <div className="footer--top--container--right">
            <div className="nav-column">
              <div className="nav-title">Quick Links</div>

              <div className="nav-list">
                <Link href="/home" className="nav-list-link">
                  Home
                </Link>

                <Link href="/about" className="nav-list-link">
                  About
                </Link>

                <Link href="/services" className="nav-list-link">
                  Services
                </Link>

                <Link href="/faq" className="nav-list-link">
                  FAQ
                </Link>

                <Link href="/contact" className="nav-list-link">
                  Contact
                </Link>
              </div>
            </div>

            <div className="nav-column">
              <div className="nav-title">Top Services</div>

              <div className="nav-list">
                <Link
                  href="/services/executive-travels"
                  className="nav-list-link"
                >
                  Executive Travels
                </Link>

                <Link href="/services/luxury-rentals" className="nav-list-link">
                  Luxury Rentals
                </Link>

                <Link
                  href="/services/luxury-real-estate"
                  className="nav-list-link"
                >
                  Luxury Real Estate
                </Link>

                <Link
                  href="/services/luxury-vacations"
                  className="nav-list-link"
                >
                  Luxury Vacations
                </Link>

                <Link
                  href="/services/lifestyle-management"
                  className="nav-list-link"
                >
                  Lifestyle Management
                </Link>
              </div>
            </div>

            <div className="nav-column">
              <div className="nav-title">Contact</div>

              <div className="nav-list">
                <div className="nav-list-item">
                  1234 Luxury Avenue, Suite 5678 <br /> New York, NY 10001
                </div>

                <div className="nav-list-item">T: +1 (443) 590-6066</div>

                <div className="nav-list-item">M: info@luxpro.vip</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer--bottom">
        <div className="base-container footer--bottom--container">
          <div className="footer--bottom--container--left">
            <div className="base-item">Copyright 2025 © Luxpro</div>
          </div>

          <div className="footer--bottom--container--right">
            <Link href="/privacy-policy" className="base-item-link">
              Privacy Policy
            </Link>

            <div>|</div>

            <Link href="/terms-and-conditions" className="base-item-link">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
