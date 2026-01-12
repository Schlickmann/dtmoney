import { LoginFormData } from "@/screens/Login/LoginForm";
import { RegisterFormData } from "@/screens/Register/RegisterForm";
import { dtMoneyApi } from "@/shared/api/dt-money";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";
import { IUser } from "@/shared/interfaces/https/user-interface";

export const authenticate = async (
  userData: LoginFormData
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    userData
  );

  return data;
};

export const register = async (
  userData: RegisterFormData
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/register",
    userData
  );

  return data;
};
