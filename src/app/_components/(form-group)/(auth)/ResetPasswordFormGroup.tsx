"use client";

import React from "react";
import { TextInputField } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";

const ResetPasswordFormGroup = () => {
  return (
    <div className="flex flex-col justify-start gap-y-7 xs:gap-y-6">
      {/* NEW PASSWORD */}
      <TextInputField
        labelId="newPassword"
        labelTitle="New Password"
        inputStyle="glass-effect-style"
        inputType={IInputType.Password}
        inputBaseColor="bg-transparent"
        isRequired={true}
        inputValue=""
        hasBottomPadding={false}
        inputPlaceholder="Enter your password"
        onInputChange={(value) => console.log(value)}
        errorHandler={{
          validator: "validatePasswordStrength",
          message: "Provide a strong password",
        }}
      />

      {/* PASSWORD */}
      <TextInputField
        labelId="confirmPassword"
        labelTitle="Confirm Password"
        inputStyle="glass-effect-style"
        inputType={IInputType.Password}
        inputBaseColor="bg-transparent"
        isRequired={true}
        inputValue=""
        hasBottomPadding={false}
        inputPlaceholder="Enter your password again"
        onInputChange={(value) => console.log(value)}
        errorHandler={{
          validator: "validatePasswordStrength",
          message: "Provide a strong password",
        }}
      />

      <button className="btn btn-md btn-primary mt-0.5">Change Password</button>
    </div>
  );
};

export default ResetPasswordFormGroup;
