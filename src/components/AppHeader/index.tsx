import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useAuth } from "@/context/AuthContext";

export function AppHeader() {
  const { handleLogout } = useAuth();
  return (
    <View className="w-full flex-row items-center justify-between p-8">
      <View>
        <Image
          source={require("@/assets/Logo.png")}
          className="h-[30px] w-[130px]"
        />
        <TouchableOpacity
          className="mt-2 flex-row items-center gap-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray[700]} size={15} />
          <Text className="text-base text-gray-700">Logout</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="h-[50px] w-[130px] items-center justify-center rounded-xl bg-accent-brand">
        <Text className="text-sm font-bold text-white">New Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}
