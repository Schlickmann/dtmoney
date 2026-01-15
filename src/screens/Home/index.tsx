import { Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "@/components/AppHeader";

export function Home() {
  const { handleLogout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <AppHeader />
      <Text>Home</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
    </SafeAreaView>
  );
}
