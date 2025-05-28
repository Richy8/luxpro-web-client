import React from "react";
import { TitleTopBlock, LVServiceSection } from "@/app/_components/(landing)";

const LVInfoSection = () => {
  return (
    <div className="lv-info-section">
      <div className="base-container">
        {/* TOP SECTION */}
        <TitleTopBlock
          title={
            <>
              Pick a{" "}
              <span className="text-main-primary">Luxury Vacation Package</span>{" "}
              for Yourself, Family & Friends
            </>
          }
          titleWidth="!w-[60%]"
          description="Through a pooling system and solid working partnerships, we bring to individuals, families and corporate organizations some of the best vacation and destination packages."
        />
      </div>

      {/* SERVICE SECTION */}
      <LVServiceSection />
    </div>
  );
};

export default LVInfoSection;
