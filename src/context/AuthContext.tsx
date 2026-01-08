import { createContext, ReactNode, useContext, useState } from "react";
import { LoginFormData } from "@/screens/Login/LoginForm";
import { RegisterFormData } from "@/screens/Register/RegisterForm";

type AuthContextType = {
  user: null;
  token: string | null;
  handleAuth: (params: LoginFormData) => void;
  handleRegister: (params: RegisterFormData) => void;
  handleLogout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<null>(null);
  const [token, setToken] = useState<string | null>(null);

  async function handleAuth(params: LoginFormData) {
    console.log(params);
  }

  async function handleRegister(params: RegisterFormData) {
    console.log(params);
  }

  function handleLogout() {
    console.log("logout");
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
