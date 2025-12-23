import { View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";

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
    </View>
  );
}
