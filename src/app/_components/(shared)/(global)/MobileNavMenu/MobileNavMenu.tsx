"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./MobileNavMenu.scss";

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav-menu">
      <div className="menu-wrapper">
        <div className="nav-list">
          <Link href="/home" className="nav-list-item">
            <div className="nav-list-item-left">
              <div className="nav-icon icon-home"></div>
              <div className="nav-text">Home</div>
            </div>
          </Link>

          <Link href="/about" className="nav-list-item">
            <div className="nav-list-item-left">
              <div className="nav-icon icon-ship"></div>
              <div className="nav-text">About</div>
            </div>
          </Link>

          <Link href="#" className="nav-list-item" onClick={toggleIsOpen}>
            <div className="nav-list-item-left">
              <div className="nav-icon icon-crown"></div>
              <div className="nav-text">Services</div>
            </div>

            <div
              className={`nav-dropdown-icon icon-caret-down ${
                isOpen ? "rotate-180" : ""
              }`}
            ></div>
          </Link>

          {isOpen && (
            <div className="sub-menu-list">
              <Link
                href="/services/executive-travels"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-airplane"></div>
                <div className="nav-text">Executive Travels</div>
              </Link>

              <Link
                href="/services/luxury-rentals"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-building"></div>
                <div className="nav-text">Luxury Rentals</div>
              </Link>

              <Link
                href="/services/luxury-real-estate"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-building-tree"></div>
                <div className="nav-text">Luxury Real Estate</div>
              </Link>

              <Link
                href="/services/luxury-vacations"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-crown"></div>
                <div className="nav-text">Luxury Vacations</div>
              </Link>

              <Link
                href="/services/lifestyle-management"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-ticket"></div>
                <div className="nav-text">Lifestyle Management</div>
              </Link>

              <Link
                href="/services/global-events"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-ship"></div>
                <div className="nav-text">Global Events</div>
              </Link>

              <Link
                href="/services/investments-projects"
                className="sub-menu-list-item"
              >
                <div className="nav-icon icon-wallet"></div>
                <div className="nav-text">Investments & Projects</div>
              </Link>
            </div>
          )}

          <Link href="/faq" className="nav-list-item">
            <div className="nav-list-item-left">
              <div className="nav-icon icon-message"></div>
              <div className="nav-text">FAQ</div>
            </div>
          </Link>

          <Link href="/contact" className="nav-list-item">
            <div className="nav-list-item-left">
              <div className="nav-icon icon-chat"></div>
              <div className="nav-text">Contact</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
