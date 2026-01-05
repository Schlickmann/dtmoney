import { useRef, useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import clsx from "clsx";

import { colors } from "@/shared/colors";
import { ErrorMessage } from "../ErrorMessage";

interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  label?: string;
}

export function Input<T extends FieldValues>({
  control,
  name,
  leftIconName,
  label,
  secureTextEntry,
  ...props
}: InputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);
  const inputRef = useRef<TextInput>(null);

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused());
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View className="w-full gap-2">
            {label && (
              <Text
                className={clsx(
                  "mb-2 mt-3 text-base",
                  isFocused ? "text-accent-brand" : "text-gray-600"
                )}
              >
                {label}
              </Text>
            )}

            <TouchableOpacity
              className={clsx(
                "h-16 flex-row items-center justify-between gap-4 border-b-[1px] border-gray-600 px-3 py-2",
                isFocused && "border-accent-brand"
              )}
            >
              {leftIconName && (
                <MaterialIcons
                  name={leftIconName}
                  size={24}
                  color={isFocused ? colors["accent-brand"] : colors.gray[600]}
                />
              )}
              <TextInput
                ref={inputRef}
                className={clsx(
                  "flex-1 text-base text-white",
                  isFocused && "text-accent-brand"
                )}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={
                  isFocused ? colors["accent-brand"] : colors.gray[700]
                }
                onFocus={checkFocus}
                onEndEditing={checkFocus}
                secureTextEntry={showText}
                {...props}
              />

              {secureTextEntry && (
                <TouchableOpacity onPress={() => setShowText(!showText)}>
                  <MaterialIcons
                    name={showText ? "visibility" : "visibility-off"}
                    size={24}
                    color={
                      isFocused ? colors["accent-brand"] : colors.gray[600]
                    }
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </View>
        );
      }}
    />
  );
}
