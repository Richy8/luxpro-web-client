// components/DestinationSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { WorldMap } from "@/app/_assets";
import "./DestinationSection.scss";

const destinations = [
  {
    name: "Times Square",
    country: "New York, USA",
    coords: { cx: 220, cy: 160 },
    image: "/images/times-square.jpg",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    coords: { cx: 210, cy: 310 },
    image: "/images/machu-picchu.jpg",
  },
  {
    name: "Eiffel Tower",
    country: "Paris, France",
    coords: { cx: 520, cy: 130 },
    image: "/images/eiffel-tower.jpg",
  },
  {
    name: "Pyramids of Giza",
    country: "Egypt",
    coords: { cx: 560, cy: 200 },
    image: "/images/pyramids.jpg",
  },
  {
    name: "Great Wall of China",
    country: "China",
    coords: { cx: 750, cy: 180 },
    image: "/images/great-wall.jpg",
  },
  {
    name: "The Island of Gods",
    country: "Bali, In.",
    coords: { cx: 700, cy: 320 },
    image: "/images/bali.jpg",
  },
];

const DestinationSection = () => {
  return (
    <section className="destination-section">
      {/* TOP AREA */}
      <div className="base-container top-area">
        <div className="top-content">
          <div className="title-text">
            World’s Must-See{" "}
            <span className="text-main-primary">Luxurious Destinations</span>
          </div>

          <div className="description-text">
            Explore the most breathtaking and iconic attractions across the
            globe.
          </div>
        </div>
      </div>

      {/* BASE AREA */}
      <div className="base-area">
        <Image src={WorldMap} alt="World Map" />
      </div>
    </section>
  );
};

export default DestinationSection;
