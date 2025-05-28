import React from "react";
import Link from "next/link";
import "./ProfileMenu.scss";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="menu-wrapper">
        <div className="nav-list">
          <div className="nav-list-item">
            <Link href="/" className="nav-link">
              <div className="nav-link-icon icon-ticket"></div>
              <div className="nav-link-text">Bookings</div>
            </Link>

            <div className="nav-badge"></div>
          </div>

          <div className="nav-list-item">
            <Link href="/" className="nav-link">
              <div className="nav-link-icon icon-heart"></div>
              <div className="nav-link-text">Wishlist</div>
            </Link>

            <div className="nav-badge"></div>
          </div>

          <div className="nav-list-item">
            <Link href="/" className="nav-link">
              <div className="nav-link-icon icon-message"></div>
              <div className="nav-link-text">Message</div>
            </Link>

            <div className="nav-badge"></div>
          </div>
        </div>

        <div className="nav-line"></div>

        <div className="nav-list">
          <div className="nav-list-item">
            <Link
              href="/services/executive-travels/customize"
              className="nav-link"
            >
              <div className="nav-link-icon icon-users"></div>
              <div className="nav-link-text">Customize your travel</div>
            </Link>
          </div>

          <div className="nav-list-item">
            <Link href="/services/global-events" className="nav-link">
              <div className="nav-link-icon icon-flag"></div>
              <div className="nav-link-text">Explore global events</div>
            </Link>
          </div>

          <div className="nav-list-item">
            <Link href="/faq" className="nav-link">
              <div className="nav-link-icon icon-info-circle"></div>
              <div className="nav-link-text">Help / FAQ</div>
            </Link>
          </div>
        </div>

        {/* NAV AUTH OPTIONS */}
        <div className="nav-options">
          {/* AUTHENTICATED */}
          <>
            <div className="profile-row">
              <div className="profile-row--img">DK</div>

              <div className="profile-row--user">
                <div className="profile-row--user-name">Danny Kinz</div>
                <div className="profile-row--user-email">
                  dannykinzofficial@gmail.com
                </div>
              </div>
            </div>

            <div className="btn-row">
              <Link href="/" className="btn btn-md btn-primary-outline">
                Log Out
              </Link>
            </div>
          </>

          {/* NOT AUTHENTICATED */}
          {/* <div className="btn-row">
            <Link href="/" className="btn btn-md btn-primary">
              Log In
            </Link>

            <Link href="/" className="btn btn-md btn-primary-outline">
              Sign Up
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
