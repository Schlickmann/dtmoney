import { useEffect } from "react";
import { Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "@/components/AppHeader";
import { useTransaction } from "@/context/TransactionContex";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

export function Home() {
  const { handleLogout } = useAuth();
  const { fetchCategories } = useTransaction();
  const { handleError } = useErrorHandler();

  const handleGetCategories = async () => {
    try {
      await fetchCategories();
    } catch (error) {
      handleError(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await handleGetCategories();
    }

    fetchData();
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <AppHeader />
      <Text>Home</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
    </SafeAreaView>
  );
}
