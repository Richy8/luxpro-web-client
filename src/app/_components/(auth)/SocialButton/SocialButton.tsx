import React from "react";
import "./SocialButton.scss";

const SocialButton = ({ isLogin = true }: { isLogin?: boolean }) => {
  return (
    <div className="social-wrapper">
      <button className="btn btn-neutral btn-md social-btn">
        <span className="icon icon-google"></span> Continue with Google
      </button>

      <div className="social-help-row">
        <div className="line line-one"></div>
        <div className="line-text">Or Sign {isLogin ? "in" : "up"} with</div>
        <div className="line line-two"></div>
      </div>
    </div>
  );
};

export default SocialButton;
