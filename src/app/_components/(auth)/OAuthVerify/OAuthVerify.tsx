"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { commonUtil } from "@/app/_utils";
import useStore from "@/app/_app-store";

const OAuthVerify = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleGoogleOAuth } = useStore();

  const { getRedirectPath } = commonUtil;

  const handleAuthRedirect = async (response: any) => {
    if (response.code === 200) {
      // Wait for cookies to stabilize
      await new Promise((resolve) => setTimeout(resolve, 500));

      const routePath = getRedirectPath(response.data.user);
      setTimeout(() => (location.href = routePath), 500);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;

    const authenticateUser = async () => {
      try {
        const response = await handleGoogleOAuth(code);
        handleAuthRedirect(response);
      } catch (error) {
        console.error("OAuth authentication failed:", error);
      }
    };

    authenticateUser();
  }, [searchParams.get("code")]);

  return (
    <div className="flex justify-start items-center gap-x-2 p-4">
      <div className="icon-spinner-ios text-3xl text-teal-700 animate-spin"></div>
      <div className="text text-grey-700 text-[15px]">
        Authenticating user profile...
      </div>
    </div>
  );
};

export default OAuthVerify;
