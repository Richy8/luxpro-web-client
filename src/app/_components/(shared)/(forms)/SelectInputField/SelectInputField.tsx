"use client";

import React, { useEffect, useState } from "react";
import { ISelectInputField } from "@/app/_types/form-type";
import "./SelectInputField.scss";

const SelectInputField = ({
  labelId,
  labelTitle,
  inputIcon = "",
  inputPlaceholder = "",
  inputValue = "",
  isRequired = false,
  isDisabled = false,
  hasBottomPadding = true,
  selectAltIdentifierKey = "value",
  selectData = [],
  forceClearInputValue = false,
  onSelectChange,
}: ISelectInputField) => {
  const [formValue, setFormValue] = useState<string | number>(inputValue);

  // Update the formValue state whenever inputValue changes
  useEffect(() => {
    setFormValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (forceClearInputValue) {
      setFormValue("");
    }
  }, [forceClearInputValue]);

  const handleFormInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    setFormValue(value);

    if (onSelectChange) onSelectChange(value);
  };

  return (
    <div
      className={`select-input-field form-block w-full ${
        hasBottomPadding ? "mb-8" : "mb-0"
      }`}
    >
      {/* LABEL TEXT */}
      {labelTitle && (
        <label htmlFor={labelId} className="form-label">
          {labelTitle}
        </label>
      )}

      <div
        className={`form-block-input relative ${
          inputIcon ? "input-has-icon" : ""
        }`}
      >
        {/* SELECT ICON */}
        {inputIcon && <div className={`select-icon ${inputIcon}`}></div>}

        <select
          id={labelId}
          className={`form-control inputBaseColor border !border-[#e1e3e4] hover:!border-main-primary-400/80 focus:!border-main-primary-400`}
          value={formValue}
          required={isRequired}
          disabled={isDisabled}
          onChange={handleFormInput}
        >
          <option value="" disabled hidden>
            {inputPlaceholder}
          </option>

          {selectData.length ? (
            selectData.map((item, index) => (
              <option value={item[selectAltIdentifierKey]} key={index}>
                {item.name}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No option data provided
            </option>
          )}
        </select>

        <div className="absolute top-[38%] right-4 z-10 text-neutral-600 font-medium text-lg icon icon-caret-down"></div>
      </div>
    </div>
  );
};

export default SelectInputField;
