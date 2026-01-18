import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "axios";

export const addTokenToRequest = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    // Must match the key used when persisting auth in AuthContext
    const userData = await AsyncStorage.getItem("@dtMoney:auth");

    if (userData) {
      const { token } = JSON.parse(userData);
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  });
};
