import React, { ReactNode } from "react";
import { Breadcrumb } from "@/app/_components/(shared)";
import { IBreadcrumbProps } from "@/app/_types";
import "./PageInfoRow.scss";

interface IPageInfoRowProps {
  pagePath: IBreadcrumbProps[];
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  hasTopMargin?: boolean;
  children?: ReactNode;
}

const PageInfoRow: React.FC<IPageInfoRowProps> = ({
  pagePath,
  title,
  description,
  hasTopMargin = false,
  children,
}) => {
  return (
    <div className={`page-info-row ${hasTopMargin ? "pt-52" : ""}`}>
      {/* Ensure Breadcrumb component can handle the theme prop if it's meant to */}
      <Breadcrumb items={pagePath} theme="dark" />

      {/* Render title. If it's complex JSX, it will render as is. */}
      <h1 className="page-title">{title}</h1>

      {/* Conditionally render description if it exists */}
      {description && <p className="page-description">{description}</p>}

      {/* Area for any child components or content passed */}
      {children && <div className="content-area">{children}</div>}
    </div>
  );
};

export default PageInfoRow;
