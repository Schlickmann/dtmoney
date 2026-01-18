import { TransactionTypes } from "@/shared/enums/transaction-types";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "@/shared/colors";

interface SelectTypeProps {
  setTransactionType: (typeId: TransactionTypes) => void;
  typeId: number;
}

export function SelectType({ setTransactionType, typeId }: SelectTypeProps) {
  return (
    <View className="mt-2 flex-row justify-between gap-2">
      <TouchableOpacity
        className={clsx(
          "h-[58px] flex-1 flex-row items-center justify-center gap-2 rounded-lg p-2",
          typeId === TransactionTypes.INCOME
            ? "bg-accent-brand"
            : "bg-background-tertiary"
        )}
        onPress={() => setTransactionType(TransactionTypes.INCOME)}
      >
        <MaterialIcons
          name="arrow-circle-up"
          color={
            typeId === TransactionTypes.INCOME
              ? colors.white
              : colors["accent-brand-light"]
          }
          size={30}
        />
        <Text className="font-bold text-white">Income</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={clsx(
          "h-[58px] flex-1 flex-row items-center justify-center gap-2 rounded-lg p-2",
          typeId === TransactionTypes.EXPENSE
            ? "bg-accent-red"
            : "bg-background-tertiary"
        )}
        onPress={() => setTransactionType(TransactionTypes.EXPENSE)}
      >
        <MaterialIcons
          name="arrow-circle-down"
          color={
            typeId === TransactionTypes.EXPENSE
              ? colors.white
              : colors["accent-red"]
          }
          size={30}
        />
        <Text className="font-bold text-white">Expense</Text>
      </TouchableOpacity>
    </View>
  );
}
