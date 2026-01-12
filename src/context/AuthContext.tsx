import { createContext, ReactNode, useContext, useState } from "react";
import { LoginFormData } from "@/screens/Login/LoginForm";
import { RegisterFormData } from "@/screens/Register/RegisterForm";
import * as authService from "@/shared/services/dt-money/auth.service";
import { IUser } from "@/shared/interfaces/https/user-interface";

type AuthContextType = {
  user: IUser | null;
  token: string | null;
  handleAuth: (params: LoginFormData) => Promise<void>;
  handleRegister: (params: RegisterFormData) => Promise<void>;
  handleLogout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  async function handleAuth(params: LoginFormData) {
    const { token, user } = await authService.authenticate(params);

    console.log(">>>", user, token);

    setUser(user);
    setToken(token);
  }

  async function handleRegister(params: RegisterFormData) {
    console.log(params);
  }

  function handleLogout() {
    setUser(null);
    setToken(null);
  }

  const value = {
    user,
    token,
    handleAuth,
    handleRegister,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
