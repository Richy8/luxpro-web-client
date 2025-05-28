import React from "react";
import "./TitleTopBlock.scss";

interface ITitleTopBlock {
  title?: string | React.ReactNode;
  titleWidth?: string;
  subtitle?: string;
  description?: string;
}

const TitleTopBlock = ({
  title,
  titleWidth,
  subtitle,
  description,
}: ITitleTopBlock) => {
  return (
    <div className="title-top-block">
      {title && <div className={`title-text ${titleWidth}`}>{title}</div>}

      {subtitle && <div className="subtitle-text">{subtitle}</div>}

      {description && <div className="description-text">{description}</div>}
    </div>
  );
};

export default TitleTopBlock;
