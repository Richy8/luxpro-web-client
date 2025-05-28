export type IAuthType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | undefined;
  fullName?: string;
  image?: any;
  otp?: any;
};

export interface IGlobalStore {
  fetchCountries: () => Promise<any>;
  fetchStatesByCountry: (country: string | number) => Promise<any>;
  fetchCitiesByStateAndCountry: (
    country: string | number,
    stateId: number
  ) => Promise<any>;
}

export interface IAuthStore {
  authUser: any;

  setAuthUser: (payload: any) => any;
  loginUser: (payload: Pick<IAuthType, "email" | "password">) => any;
  signupUser: (
    payload: Pick<IAuthType, "firstName" | "lastName" | "email" | "password">
  ) => any;
  handleGoogleOAuth: (authenticationCode: string) => any;
  handleGoogleWorkbookOAuth: (authenticationCode: string) => any;
  verifyUserOTP: (payload: Pick<IAuthType, "otp">) => any;
  resendUserOTP: () => any;
  passwordRequest: (payload: Pick<IAuthType, "email">) => any;
  passwordReset: (payload: Pick<IAuthType, "token" | "password">) => any;
  logoutUser: () => any;
}

export interface IServiceStore {
  getAllExecutiveTravels: () => any[];
  getExecutiveTravelBySlug: (slug: string) => any;
  getLuxuryVacationBySlug: () => any;
  getGlobalEventBySlug: () => any;
}
