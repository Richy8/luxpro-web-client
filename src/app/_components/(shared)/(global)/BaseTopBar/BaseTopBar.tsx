"use client";

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LuxProLight } from "@/app/_assets";
import {
  ProfileMenu,
  BaseNavMenu,
  ClickOutsideWrapper,
} from "@/app/_components/(shared)";
// import { useAuth } from "@/app/_hooks";
import "./BaseTopBar.scss";

const BaseTopbar = () => {
  // const authUser = useAuth();
  const pathname = usePathname();

  const dropdownNavRef = useRef<any>();
  const [showNavDropdown, setShowNavDropdown] = useState<boolean>(false);

  const dropdownProfileRef = useRef<any>();
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);

  useEffect(() => {
    setShowNavDropdown(false);
    setShowProfileDropdown(false);
  }, [pathname]);

  // const isUserAuthenticated = () => {
  //   return Object.keys(authUser).length === 0 ? false : true;
  // };

  return (
    <div className="base-topbar">
      <div className="base-container">
        <div className="topbar-row">
          {/* APP LOGO */}
          <Link href="/" className="app-logo">
            <Image
              src={LuxProLight}
              width={100}
              height={50}
              alt="LuxProLight"
            />
          </Link>

          {/* NAV ITEMS */}
          <div className="nav-items">
            <Link
              href="/home"
              scroll={true}
              className={`nav-link ${
                pathname === "/home" ? "nav-link--active" : ""
              }`}
            >
              <div className="nav-text">Home</div>
            </Link>

            <Link
              href="/about"
              scroll={true}
              className={`nav-link ${
                pathname === "/about" ? "nav-link--active" : ""
              }`}
            >
              <div className="nav-text">About</div>
            </Link>

            <div
              className={`nav-link ${
                pathname.includes("services") ? "nav-link--active" : ""
              }`}
            >
              <div
                className="nav-text"
                ref={dropdownNavRef}
                onClick={() => setShowNavDropdown(!showNavDropdown)}
              >
                Services
              </div>

              <div
                className={`icon icon-caret-down ${
                  showNavDropdown ? "rotate-180" : ""
                }`}
              ></div>

              {/* MENU DROPDOWN */}
              <ClickOutsideWrapper
                togglerRef={dropdownNavRef}
                showDropdown={showNavDropdown}
                toggleDropdown={setShowNavDropdown}
              >
                <BaseNavMenu />
              </ClickOutsideWrapper>
            </div>

            <Link
              href="/faq"
              scroll={true}
              className={`nav-link ${
                pathname === "/faq" ? "nav-link--active" : ""
              }`}
            >
              <div className="nav-text">FAQ</div>
            </Link>

            <Link
              href="/contact"
              scroll={true}
              className={`nav-link ${
                pathname === "/contact" ? "nav-link--active" : ""
              }`}
            >
              <div className="nav-text">Contact</div>
            </Link>
          </div>

          {/* NAV OPTIONS */}
          <div className="topbar--right">
            {/* <Link href="/login" className="link-text">
              Login
            </Link> */}

            {/* NOTIFICATION */}
            <div className="notification-wrapper">
              <div className="notification-badge">1</div>
              <div className="icon icon-notification"></div>
            </div>

            {/* USER PROFILE */}
            <div className="user-profile">
              <div
                className="icon-wrapper"
                ref={dropdownProfileRef}
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <div className="icon icon-user"></div>
              </div>

              {/* USER PROFILE DROPDOWN */}
              <ClickOutsideWrapper
                togglerRef={dropdownProfileRef}
                showDropdown={showProfileDropdown}
                toggleDropdown={setShowProfileDropdown}
              >
                <ProfileMenu />
              </ClickOutsideWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseTopbar;
