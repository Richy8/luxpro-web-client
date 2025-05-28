import React, { ReactNode } from "react";
import { BaseTopBar, BaseFooter } from "@/app/_components/(shared)";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {/* TOP PANE */}
      <BaseTopBar />

      {/* BODY PANE */}
      <div className="body-pane">{children}</div>

      {/* FOOTER PANE */}
      <BaseFooter />
    </div>
  );
};

export default BaseLayout;
