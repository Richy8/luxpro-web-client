import React from "react";
import "./OutlineServiceCard.scss";

interface IPMServiceCard {
  icon: string;
  title: string;
  description: string;
}

const PMServiceCard = ({ icon, title, description }: IPMServiceCard) => {
  return (
    <div className="pm-service-card">
      <div className="icon-wrapper">
        <div className={`icon icon-${icon}`}></div>
      </div>

      <div className="title-text">{title}</div>

      <div className="description-text">{description}</div>
    </div>
  );
};

export default PMServiceCard;
