import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { TextInput } from "react-native-gesture-handler";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";

export function Login() {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <DismissKeyboardView>
      <Text>Login</Text>
      <TextInput placeholder="Email" className="h-12 w-full bg-gray-500" />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </DismissKeyboardView>
  );
}
