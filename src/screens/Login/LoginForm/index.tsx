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
        label="Email"
        placeholder="Email"
        leftIconName="mail-outline"
      />
      <Input
        name="password"
        control={control}
        label="Password"
        placeholder="Password"
        leftIconName="lock-outline"
      />
    </View>
  );
}
