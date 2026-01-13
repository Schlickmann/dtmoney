import { useAuth } from "@/context/AuthContext";
import { colors } from "@/shared/colors";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoadingProps {
  setIsLoading: (isLoading: boolean) => void;
}

export function Loading({ setIsLoading }: LoadingProps) {
  const { loadStoredAuthData, handleLogout } = useAuth();

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const authData = await loadStoredAuthData();
        if (!authData) {
          handleLogout();
        }
      } catch (error) {
        console.error(error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };
    loadAuthData();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background-primary">
      <ActivityIndicator
        size="large"
        color={colors["accent-brand"]}
        className="mt-20"
      />
    </SafeAreaView>
  );
}
