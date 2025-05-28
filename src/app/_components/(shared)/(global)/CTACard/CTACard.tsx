import React from "react";
import Link from "next/link";
import "./CTACard.scss";

const CTACard = ({
  title,
  description,
  btnText,
  btnLink,
}: {
  title: React.ReactNode;
  description: string;
  btnText: string;
  btnLink: string;
}) => {
  return (
    <div className="cta-card-wrapper">
      <div className="base-container">
        <div className="cta-card">
          <div className="cta-copy">
            <h2 className="title-text">{title}</h2>
            <div className="description-text">{description}</div>
          </div>

          <div className="cta-action">
            <Link href={btnLink} className="btn btn-md btn-primary">
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
