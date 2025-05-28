import React from "react";
import "./BaseFooterCTA.scss";

const BaseFooterCTA = () => {
  return (
    <div className="footer--cta">
      <div className="base-container footer--cta--container">
        <div className="title-text">
          Luxury it's{" "}
          <span className="text-main-primary">easier on the app</span>
        </div>

        {/* SOCIAL APP ROW */}
        <div className="social-app-row">
          {/* APP STORE DOWNLOAD */}
          <div className="social-btn">
            <div className="icon icon-app-store"></div>
            <div className="text">IOS App Store</div>
          </div>

          {/* PLAY STORE DOWNLOAD */}
          <div className="social-btn">
            <div className="icon icon-play-store"></div>
            <div className="text">Android Play Store</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseFooterCTA;
