import React from "react";
import { ModalCover } from "@/app/_components";
import Link from "next/link";
import "./ConfirmationDialog.scss";

type modalType = {
  showModal: boolean;
  toggleModal: () => void;
  modalSize?: string;
  modalBodySize?: string;
  titleText: string | React.ReactNode;
  bodyText: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
};

const ConfirmationDialog = ({
  showModal,
  toggleModal,
  modalSize = "modal-md",
  modalBodySize = "w-4/5",
  titleText,
  bodyText,
  buttonText,
  buttonLink,
}: modalType) => {
  return (
    <ModalCover
      styles={modalSize}
      showModal={showModal}
      toggleModal={toggleModal}
    >
      {/* DIALOG HEADER */}
      <ModalCover.Slot name="header">
        <div className="data-header">
          <div className="dialog-title-text">{titleText}</div>
        </div>
      </ModalCover.Slot>

      {/* DIALOG BODY */}
      <ModalCover.Slot name="body">
        <div className={`data-body ${modalBodySize}`}>{bodyText}</div>
      </ModalCover.Slot>

      {/* DIALOG FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="data-footer">
          <Link href={buttonLink} className="btn btn-md btn-primary mx-auto">
            {buttonText}
          </Link>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default ConfirmationDialog;
