import axios from "axios";
import { Platform } from "react-native";
import { AppError } from "../helpers/AppError";

const baseURL = Platform.select({
  ios: "http://localhost:3001",
  android: "http://10.0.2.2:3001",
  default: "http://localhost:3001",
});

export const dtMoneyApi = axios.create({
  baseURL,
});

dtMoneyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }
    return Promise.reject(new AppError("An unknown error occurred"));
  }
);
