"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "./TestimonialCard.scss";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  theme?: "dark" | "light";
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  rating,
  image,
  theme = "light",
}: TestimonialCardProps) => {
  return (
    <div
      className={`testimonial-card ${
        theme === "dark" ? "testimonial-card-dark" : ""
      }`}
    >
      <div className="top-row">
        <div className="image-wrapper">
          <Image src={image} alt={name} width={50} height={50} />
        </div>

        <div>
          <div className="card-title">{name}</div>
          <div className="card-meta">{role}</div>
        </div>
      </div>

      <div className="mid-row">{testimonial}</div>

      <div className="bottom-row">
        {Array.from({ length: rating }).map((_, index) => (
          <div key={index} className="icon icon-star"></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
