import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { LoginForm } from "./LoginForm";

export function Login() {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <LoginForm />
      </View>
    </DismissKeyboardView>
  );
}
