import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "@/shared/colors";

type ButtonMode = "filled" | "outlined";

interface ButtonProps extends TouchableOpacityProps {
  mode?: ButtonMode;
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  children,
  mode = "filled",
  iconName,
  ...props
}: ButtonProps) {
  const isFilled = mode === "filled";
  return (
    <TouchableOpacity
      className={clsx(
        "h-button w-full flex-row items-center rounded-xl px-5",
        iconName ? "justify-between" : "justify-center",
        {
          "bg-accent-brand": isFilled,
          "border-[1px] border-accent-brand bg-none": !isFilled,
        }
      )}
      {...props}
    >
      <Text
        className={clsx("text-base", {
          "text-white": isFilled,
          "text-accent-brand": !isFilled,
        })}
      >
        {children}
      </Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={isFilled ? colors.white : colors["accent-brand"]}
        />
      )}
    </TouchableOpacity>
  );
}
