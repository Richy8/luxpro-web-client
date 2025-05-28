import React from "react";
import Image, { StaticImageData } from "next/image";
import "./StackDisplayBlock.scss";

const StackDisplayBlock = ({
  imageSrc = "",
}: {
  imageSrc: string | StaticImageData;
}) => {
  return (
    <div className="stack-display-block">
      <Image src={imageSrc} alt="image-stack"></Image>
      <div className="overlay"></div>
    </div>
  );
};

export default StackDisplayBlock;
