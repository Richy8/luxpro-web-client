import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuxProLight } from "@/app/_assets";
import "./AuthContainer.scss";

const AuthContainer = ({
  children,
  title,
  description,
  placeCenter = false,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  placeCenter?: boolean;
}) => {
  return (
    <div
      className={`auth-container-wrapper ${placeCenter && "center-placement"}`}
    >
      <div className="auth-container">
        {/* CLOSE BTN */}
        <Link href="/" className="close-btn">
          <div className="icon icon-times"></div>
        </Link>

        {/* FORM TOP AREA */}
        <div className="auth-container--top">
          <div className="logo-image">
            <Image
              src={LuxProLight}
              alt="LuxProLight"
              width={100}
              height={50}
            />
          </div>

          {title && <div className="title-text">{title}</div>}
          {description && <div className="description-text">{description}</div>}
        </div>

        {/* FORM BOTTOM AREA */}
        <div className="auth-container--bottom">{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
