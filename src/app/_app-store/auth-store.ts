import { create } from "zustand";
import { IAuthStore, IAuthType } from "@/app/_types/store-type";
import { AUTH_USER, apiUtil, commonUtil } from "@/app/_utils";

const routes = {
  login: "/auth/login",
  signup: "/auth/create-account",

  googleCallback: "oauth/google/callback",
  googleWorkbookCallback: "oauth/google/workbook/callback",

  verifyOTP: "/auth/verify-otp",
  resendOTP: "/auth/resend-otp",
  passwordRequest: "/auth/password-request",
  passwordReset: "/auth/password-reset",
  logout: "/auth/logout",
};

export const useAuthStore = create<IAuthStore>((set) => ({
  authUser:
    commonUtil.getStorage({
      storage_name: AUTH_USER,
      storage_type: "object",
    }) || {},

  // Method to directly update authUser
  setAuthUser: (newUserData: any) => set({ authUser: newUserData }),

  loginUser: async (payload: Pick<IAuthType, "email" | "password">) => {
    const response = await apiUtil.push(routes.login, { payload });

    if (response.code === 200) {
      mutateAuthUser(set, response);
    }

    return response;
  },

  signupUser: async (
    payload: Pick<IAuthType, "firstName" | "lastName" | "email" | "password">
  ) => {
    const response = await apiUtil.push(routes.signup, { payload });

    if (response.code === 201) {
      mutateAuthUser(set, response);
    }

    return response;
  },

  handleGoogleOAuth: async (authenticationCode: string) => {
    const response = await apiUtil.fetch(
      `${routes.googleCallback}?code=${authenticationCode}`
    );

    if (response.code === 200) {
      mutateAuthUser(set, response);
    }

    return response;
  },

  handleGoogleWorkbookOAuth: async (authenticationCode: string) => {
    return await apiUtil.fetch(
      `${routes.googleWorkbookCallback}?code=${authenticationCode}`
    );
  },

  verifyUserOTP: async (payload: Pick<IAuthType, "otp">) => {
    return await apiUtil.push(routes.verifyOTP, { payload });
  },

  resendUserOTP: async () => {
    return await apiUtil.push(routes.resendOTP, {});
  },

  passwordRequest: async (payload: Pick<IAuthType, "email">) => {
    return await apiUtil.push(routes.passwordRequest, { payload });
  },

  passwordReset: async (payload: Pick<IAuthType, "token" | "password">) => {
    return await apiUtil.push(routes.passwordReset, { payload });
  },

  logoutUser: async () => {
    const response = await apiUtil.push(routes.logout, {});

    if (response.code === 200) {
      localStorage.clear();
    }

    location.href = "/login";
    return response;
  },
}));

// MUTATE AUTH USER DATA
const mutateAuthUser = (setHandler: any, responsePayload: any) => {
  const { code, data } = responsePayload;

  if ([200, 201].includes(code)) {
    const { user } = data;

    commonUtil.setStorage({
      storage_name: AUTH_USER,
      storage_value: user,
      storage_type: "object",
    });

    setHandler({ authUser: user ?? {} }); // Corrected this part
  }
};
