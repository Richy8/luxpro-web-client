import React from "react";
import "./ListItemBlock.scss";

interface ListItemBlockProps {
  title?: string;
  showTitle?: boolean;
  listItems: { icon: string; text: string }[];
}

const ListItemBlock = ({
  title = "This package covers",
  showTitle = true,
  listItems,
}: ListItemBlockProps) => {
  return (
    <div className="list-item-block">
      {showTitle && <div className="list-title">{title}</div>}

      <div className="list-content">
        {listItems.map((item, index: number) => (
          <div className="list-item" key={index}>
            <div className="icon-wrapper">
              <div className={`icon icon-${item.icon}`}></div>
            </div>

            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItemBlock;
