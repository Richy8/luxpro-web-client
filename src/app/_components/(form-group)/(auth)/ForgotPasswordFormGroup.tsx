"use client";

import React from "react";
import Link from "next/link";
import { TextInputField } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";

const ForgotPasswordFormGroup = () => {
  return (
    <div className="flex flex-col justify-start gap-y-7">
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

      <button className="btn btn-md btn-primary mt-0.5">Send Password</button>

      <div className="flex justify-center items-start gap-x-2 mx-auto text-center text text-sm text-base-background">
        <div className="text">Don't have an account?</div>
        <Link href="/create-account" className="text-sm">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordFormGroup;
