import { useAuthStore } from "./auth-store";
import { useGlobalStore } from "./global-store";
import { useServiceStore } from "./services-store";

const useStore = () => ({
  ...useAuthStore(),
  ...useGlobalStore(),
  ...useServiceStore(),
});

export default useStore;
