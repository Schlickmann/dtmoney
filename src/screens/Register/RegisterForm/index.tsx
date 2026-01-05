import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PublicStackParamsList } from "@/routes/PublicRoutes";

export type RegisterFormData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <View className="w-full flex-1 gap-4">
      <Input
        name="name"
        control={control}
        label="NAME"
        placeholder="Your name"
        leftIconName="person-outline"
      />
      <Input
        name="email"
        control={control}
        label="EMAIL"
        placeholder="email@example.com"
        leftIconName="mail-outline"
      />
      <Input
        name="password"
        control={control}
        label="PASSWORD"
        placeholder="Your password"
        leftIconName="lock-outline"
        secureTextEntry={true}
      />
      <Input
        name="confirmPassword"
        control={control}
        label="CONFIRM PASSWORD"
        placeholder="Confirm your password"
        leftIconName="lock-outline"
        secureTextEntry={true}
      />
      <View className="mt-8 flex-1 justify-between gap-6">
        <Button disabled={isSubmitting}>Register</Button>

        <View>
          <Text className="mb-6 text-base text-gray-300">
            Already have an account?
          </Text>
          <Button
            mode="outlined"
            iconName="arrow-forward"
            onPress={() => navigation.navigate("Login")}
            disabled={isSubmitting}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
}
