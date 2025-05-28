import { create } from "zustand";
import { apiUtil } from "@/app/_utils";
import { IGlobalStore } from "@/app/_types/store-type";

const routes = {
  fetchCountries: "/geo/countries",
  fetchStatesByCountry: (country: string | number) => `/geo/states/${country}`,
  fetchCitiesByStateAndCountry: (country: string | number, stateId: number) =>
    `/geo/cities/${country}/${stateId}`,
};

export const useGlobalStore = create<IGlobalStore>(() => ({
  fetchCountries: async () => {
    return await apiUtil.fetch(routes.fetchCountries);
  },

  fetchStatesByCountry: async (country: string | number) => {
    return await apiUtil.fetch(routes.fetchStatesByCountry(country));
  },

  fetchCitiesByStateAndCountry: async (
    country: string | number,
    stateId: number | string
  ) => {
    return await apiUtil.fetch(
      routes.fetchCitiesByStateAndCountry(country, stateId as any)
    );
  },
}));
