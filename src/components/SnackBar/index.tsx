import { useNotification } from "@/context/NotificationContext";
import { useMemo } from "react";
import { View, Text } from "react-native";

export function SnackBar() {
  const { message, type } = useNotification();

  if (!message || !type) {
    return <></>;
  }

  const backgroundColor = useMemo(() => {
    switch (type) {
      case "error":
        return "bg-accent-red-background-primary";
      case "info":
        return "bg-accent-blue-dark";
      case "success":
        return "bg-accent-brand-background-primary";
      default:
        return "bg-accent-blue-dark";
    }
  }, [type]);

  return (
    <View
      className={`absolute bottom-10 z-10 h-[50px] w-[90%] justify-center self-center rounded-xl ${backgroundColor} p-2`}
    >
      <Text className="text-base font-bold text-white">{message}</Text>
    </View>
  );
}
