import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuth } from "@/context/AuthContext";
import { Loading } from "@/screens/Loading";

export const NavigationRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, token, loadStoredAuthData } = useAuth();

  const Routes = useCallback(() => {
    if (isLoading) {
      return <Loading setIsLoading={setIsLoading} />;
    }

    if (user && token) {
      return <PrivateRoutes />;
    }
    return <PublicRoutes />;
  }, [user, token, isLoading]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
