import React from "react";
import { SingleImageSlider } from "@/app/_components/(shared)";
import { ListItemBlock } from "@/app/_components/(landing)";
import Link from "next/link";
import "./ETServiceRow.scss";

const ETServiceRow = ({
  itemNo,
  serviceItem,
}: {
  itemNo: number;
  serviceItem: any;
}) => {
  return (
    <div className={`et-service-row ${itemNo % 2 === 0 ? "" : "even"}`}>
      {/* IMAGE DISPLAY CARD */}
      <div className="image-display-block order-1 even:order-2">
        <SingleImageSlider imageList={serviceItem.images} />
      </div>

      {/* CONTENT BLOCK */}
      <div className="content-block order-2 even:order-1">
        <div className="package-title">{serviceItem.title}</div>
        <div className="package-description">{serviceItem.subtitle}</div>

        <div className="package-amount">{serviceItem.amount}</div>

        <div className="package-features">
          <ListItemBlock listItems={serviceItem.features} />

          <Link
            href={`executive-travels/${serviceItem.slug}`}
            className="btn btn-md btn-primary mt-6"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ETServiceRow;
