"use client";

import React from "react";
import Link from "next/link";
import { TextInputField } from "@/app/_components/(shared)";
import { IInputType } from "@/app/_types/form-type";

const LoginFormGroup = () => {
  return (
    <div className="flex flex-col justify-start gap-y-7 xs:gap-y-6">
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

      {/* FORGOT PASSWORD */}
      <div className="flex justify-end text-right -mt-2 xs:-mt-1.5">
        <Link href="/forgot-password" className="text-sm">
          Forgot your Password?
        </Link>
      </div>

      <button className="btn btn-md btn-primary mt-0.5">Login</button>

      <div className="flex justify-center items-start gap-x-2 mx-auto text-center text text-sm text-base-background">
        <div className="text">Don't have an account?</div>
        <Link href="/create-account" className="text-sm">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginFormGroup;
