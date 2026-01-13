import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";

export function Home() {
  const { handleLogout } = useAuth();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
      <Button title="Logout" onPress={() => handleLogout()} />
    </View>
  );
}
