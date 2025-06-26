"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./AuthEntryLayout.scss";

const AuthEntryLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [paddingValue, setPaddingValue] = useState("pb-56");

  useEffect(() => {
    if (pathname === "/create-account") {
      setPaddingValue("pb-56");
    } else if (pathname === "/login") {
      setPaddingValue("pb-28");
    } else {
      setPaddingValue("!pb-0");
    }
  }, [pathname]);

  return (
    <div className={`auth-entry-layout ${paddingValue}`}>
      {/* OVERLAY  */}
      <div className="overlay"></div>

      <div
        className={`app-container ${
          !["/create-account", "/login"].includes(pathname) ? "!pb-0" : ""
        } ${pathname === "/login" ? "!pb-0" : ""}`}
      >
        <div className="w-full h-auto">{children}</div>
      </div>
    </div>
  );
};

export default AuthEntryLayout;
