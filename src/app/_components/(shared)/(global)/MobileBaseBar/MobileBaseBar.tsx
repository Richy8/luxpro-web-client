"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./MobileBaseBar.scss";

const MobileBaseBar = () => {
  const pathname = usePathname();

  const BE = "/budget-entry";
  const budgetEntryLinks = [
    `${BE}/information`,
    `${BE}/category`,
    `${BE}/data-source`,
    `${BE}/review`,
  ];

  return (
    <div className="mobile-base-bar">
      <div className="base-container base-wrapper">
        <Link
          href="/overview"
          scroll={true}
          className={`nav-link ${
            pathname === "/overview" ||
            pathname.startsWith("/budget/") ||
            pathname.startsWith("/community-budget")
              ? "active-link"
              : ""
          }`}
        >
          <div className="nav-icon icon-four-square"></div>
          <div className="nav-text">Overview</div>
        </Link>

        <Link
          href="/budget-entry/information"
          scroll={true}
          className={`nav-link ${
            budgetEntryLinks.includes(pathname) && "active-link"
          }`}
        >
          <div className="nav-icon icon-files"></div>
          <div className="nav-text">Create Budget</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileBaseBar;
