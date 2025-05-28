import React, { useCallback } from "react";
import "./TwoByOneBlock.scss";

type TwoByOneBlockType = {
  children: React.ReactElement | React.ReactElement[];
  layoutType?: "is-checkout" | "is-stack";
};

type TwoByOneBlockSlotType = {
  name: "left-block" | "right-block";
  children: React.ReactNode;
};

const Slot = ({ children }: TwoByOneBlockSlotType) => <>{children}</>;

const TwoByOneBlock = ({ children, layoutType }: TwoByOneBlockType) => {
  // Extract slots
  const sections = (
    Array.isArray(children) ? children : [children]
  ) as React.ReactElement[];

  const leftSlot = sections.find((child) => child.props.name === "left-block");
  const rightSlot = sections.find(
    (child) => child.props.name === "right-block"
  );

  const getLayout = useCallback(() => {
    return layoutType ?? "two-by-one-block";
  }, []);

  return (
    <div className={`${getLayout()}`}>
      <div className="left-slot-block">{leftSlot?.props.children}</div>
      <div className="right-slot-block">{rightSlot?.props.children}</div>
    </div>
  );
};

TwoByOneBlock.Slot = Slot;
export default TwoByOneBlock;
