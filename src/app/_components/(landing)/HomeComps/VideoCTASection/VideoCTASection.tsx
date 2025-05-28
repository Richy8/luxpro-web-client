"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import { VideoThumbnail } from "@/app/_assets";
import "./VideoSection.scss";

const VideoCTASection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const servicePath = "/services";

  const goToServices = () => {
    pathname === servicePath
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : router.push(servicePath);
  };

  return (
    <div className="video-cta-section">
      {/* TOP AREA */}
      <div className="top-area">
        <div className="base-container top-area--container">
          <div className="meta-text">Where would you like to go today?</div>

          <div className="title-text">
            Luxury That <span className="text-main-primary">Inspires...</span>
          </div>

          <button className="btn btn-md btn-primary" onClick={goToServices}>
            Let’s Plan Your Trip
          </button>
        </div>
      </div>

      {/* BASE AREA */}
      <div className="base-area">
        <Image src={VideoThumbnail} alt="Video Thumbnail" />

        {/* OVERLAY */}
        <div className="overlay"></div>

        {/* PLAY BUTTON */}
        <div className="play-button">
          <div className="icon icon-play-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCTASection;
