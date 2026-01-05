import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export type LoginFormData = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View className="w-full flex-1 gap-4">
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
      <View className="mt-8 min-h-[250px] flex-1 justify-between gap-6">
        <Button>Login</Button>

        <View>
          <Text className="mb-6 text-base text-gray-300">
            Don't have an account?
          </Text>
          <Button mode="outlined" iconName="arrow-forward">
            Register
          </Button>
        </View>
      </View>
    </View>
  );
}
