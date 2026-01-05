import { View } from "react-native";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { RegisterForm } from "./RegisterForm";
import { AuthHeader } from "@/components/AuthHeader";

export function Register() {
  return (
    <DismissKeyboardView>
      <View className="w-[82%] flex-1 self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  );
}
