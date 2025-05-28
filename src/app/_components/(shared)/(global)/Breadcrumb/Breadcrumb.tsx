"use client";

import React from "react";
import Link from "next/link";
import { IBreadcrumbProps } from "@/app/_types";
import "./Breadcrumb.scss";

type BreadcrumbProps = {
  items: IBreadcrumbProps[];
  theme?: "light" | "dark";
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, theme }) => {
  return (
    <div className={`breadcrumb ${theme === "dark" ? "breadcrumb-dark" : ""}`}>
      <div className="breadcrumb-item inactive-item">
        <Link href="/" className="text">
          Home
        </Link>
      </div>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="breadcrumb-line">
            <div className="icon icon-caret-left"></div>
          </div>

          <div
            className={`breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
          >
            {index === items.length - 1 ? (
              item.isActive ? ( // If last item, is it active (linkable)?
                <Link href={item.itemLink || "#"} className="text">
                  {item.itemText}
                </Link>
              ) : (
                <span className="text">{item.itemText}</span> // Last item, but not a link
              )
            ) : (
              <Link href={item.itemLink} className="text">
                {item.itemText}
              </Link>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
