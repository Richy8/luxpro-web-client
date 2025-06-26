"use client";

import React from "react";
import Link from "next/link";
import { TextInputField } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";

const SignupFormGroup = () => {
  return (
    <div className="flex flex-col justify-start gap-y-7 xs:gap-y-6">
      {/* FULL NAME */}
      <TextInputField
        labelId="fullName"
        labelTitle="Full Name"
        inputStyle="glass-effect-style"
        inputType={IInputType.Text}
        inputBaseColor="bg-transparent"
        isRequired={true}
        inputValue=""
        hasBottomPadding={false}
        inputPlaceholder="Enter your full name"
        onInputChange={(value) => console.log(value)}
        errorHandler={{
          validator: "validateFullName",
          message: "Provide a valid full name",
        }}
      />

      {/* EMAIL ADDRESS */}
      <TextInputField
        labelId="email"
        labelTitle="Email Address"
        inputStyle="glass-effect-style"
        inputType={IInputType.Email}
        inputBaseColor="bg-transparent"
        isRequired={true}
        inputValue=""
        hasBottomPadding={false}
        inputPlaceholder="Enter your email address"
        onInputChange={(value) => console.log(value)}
        errorHandler={{
          validator: "validateEmail",
          message: "Provide a valid email address",
        }}
      />

      {/* PASSWORD */}
      <TextInputField
        labelId="password"
        labelTitle="Password"
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

      <button className="btn btn-md btn-primary mt-2 xs:mt-1.5">
        Create Account
      </button>

      <div className="flex justify-start items-center gap-x-3 mt-2">
        <input type="checkbox" />
        <div className="text text-sm text-base-background">
          I agree to LuxPro{" "}
          <Link href="/terms-and-conditions" className="text-sm">
            {" "}
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-start gap-x-2 mx-auto text-center text text-sm text-base-background">
        <div className="text">Already have an account?</div>
        <Link href="/login" className="text-sm">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignupFormGroup;
