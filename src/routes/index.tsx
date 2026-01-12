import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useCallback, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const NavigationRoutes = () => {
  const { user, token } = useAuth();

  const Routes = useCallback(() => {
    if (user && token) {
      return <PrivateRoutes />;
    }
    return <PublicRoutes />;
  }, [user, token]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
