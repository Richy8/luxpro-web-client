import React from "react";
import Link from "next/link";
import "./BaseNavMenu.scss";

const BaseNavMenu = () => {
  return (
    <div className="base-nav-menu">
      <div className="menu-wrapper">
        <div className="nav-list">
          <Link href="/services/executive-travels" className="nav-list-item">
            <div className="nav-icon icon-airplane"></div>
            <div className="nav-text">Executive Travels</div>
          </Link>

          <Link href="/services/luxury-rentals" className="nav-list-item">
            <div className="nav-icon icon-building"></div>
            <div className="nav-text">Luxury Rentals</div>
          </Link>

          <Link href="/services/luxury-real-estate" className="nav-list-item">
            <div className="nav-icon icon-building-tree"></div>
            <div className="nav-text">Luxury Real Estate</div>
          </Link>

          <Link href="/services/luxury-vacations" className="nav-list-item">
            <div className="nav-icon icon-crown"></div>
            <div className="nav-text">Luxury Vacations</div>
          </Link>

          <Link href="/services/lifestyle-management" className="nav-list-item">
            <div className="nav-icon icon-ticket"></div>
            <div className="nav-text">Lifestyle Management</div>
          </Link>

          <Link href="/services/global-events" className="nav-list-item">
            <div className="nav-icon icon-ship"></div>
            <div className="nav-text">Global Events</div>
          </Link>

          <Link href="/services/investments-projects" className="nav-list-item">
            <div className="nav-icon icon-wallet"></div>
            <div className="nav-text">Investments & Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BaseNavMenu;
