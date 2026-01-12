import { Alert, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAuth } from "@/context/AuthContext";
import { AxiosError } from "axios";

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
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleAuth } = useAuth();

  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await handleAuth(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);

        Alert.alert("Error", error.response?.data.message);
      }
    }
  };

  return (
    <View className="w-full flex-1 gap-4">
      <Input
        name="email"
        control={control}
        label="EMAIL"
        placeholder="email@example.com"
        leftIconName="mail-outline"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        name="password"
        control={control}
        label="PASSWORD"
        placeholder="Your password"
        leftIconName="lock-outline"
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View className="mt-8 min-h-[250px] flex-1 justify-between gap-6">
        <Button disabled={isSubmitting} onPress={handleSubmit(onSubmit)}>
          Login
        </Button>

        <View>
          <Text className="mb-6 text-base text-gray-300">
            Don't have an account?
          </Text>
          <Button
            mode="outlined"
            iconName="arrow-forward"
            onPress={() => navigation.navigate("Register")}
            disabled={isSubmitting}
          >
            Register
          </Button>
        </View>
      </View>
    </View>
  );
}
