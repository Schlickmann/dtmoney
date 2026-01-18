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
    <View className="flex-row justify-between gap-2 mt-2">
      <TouchableOpacity
        className={clsx("flex-row items-center p-2 flex-1 justify-center h-[58px] gap-2 rounded-lg",
          typeId === TransactionTypes.INCOME ? "bg-accent-brand" : "bg-background-tertiary"
        )}
        onPress={() => setTransactionType(TransactionTypes.INCOME)}
      >
        <MaterialIcons
          name="arrow-circle-up"
          color={typeId === TransactionTypes.INCOME ? colors.white : colors["accent-brand-light"]}
          size={30}
        />
        <Text className="text-white font-bold">Income</Text >
      </TouchableOpacity>

      <TouchableOpacity
        className={clsx("flex-row items-center p-2 flex-1 justify-center h-[58px] gap-2 rounded-lg",
          typeId === TransactionTypes.EXPENSE ? "bg-accent-red" : "bg-background-tertiary"
        )}
        onPress={() => setTransactionType(TransactionTypes.EXPENSE)}
      >
        <MaterialIcons
          name="arrow-circle-down"
          color={typeId === TransactionTypes.EXPENSE ? colors.white : colors["accent-red"]}
          size={30}
        />
        <Text className="text-white font-bold">Expense</Text >
      </TouchableOpacity >
    </View >
  )
}