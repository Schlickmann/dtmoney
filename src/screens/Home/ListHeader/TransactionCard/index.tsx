import { colors } from "@/shared/colors";
import { TransactionTypes } from "@/shared/enums/transaction-types";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type TransactionCardType = TransactionTypes | "total";

interface TransactionCardProps {
  type: TransactionCardType;
  amount: number;
}

interface IconsData {
  name: keyof typeof MaterialIcons.glyphMap;
  color: string;
}

const ICONS: Record<TransactionCardType, IconsData> = {
  [TransactionTypes.INCOME]: {
    name: "arrow-circle-up",
    color: colors["accent-brand-light"],
  },
  [TransactionTypes.EXPENSE]: {
    name: "arrow-circle-down",
    color: colors["accent-red"],
  },
  total: {
    name: "attach-money",
    color: colors.white,
  },
}

interface CardData {
  label: string;
  bgColor: string;
}

const CARD_DATA: Record<TransactionCardType, CardData> = {
  [TransactionTypes.INCOME]: {
    label: "Income",
    bgColor: "background-tertiary",
  },
  [TransactionTypes.EXPENSE]: {
    label: "Expense",
    bgColor: "background-tertiary",
  },
  total: {
    label: "Total",
    bgColor: "accent-brand-background-primary",
  },
}

export function TransactionCard({ type, amount }: TransactionCardProps) {
  const cardData = CARD_DATA[type];
  const iconData = ICONS[type];

  return (
    <View className={`bg-${cardData.bgColor} min-w-[280] rounded-[6] px-8 py-6 justify-between mr-6`}>
      <View className="flex-row items-center justify-between mb-1">
        <Text className="text-base text-white">{cardData.label}</Text>
      <MaterialIcons
        name={iconData.name}
        color={iconData.color}
        size={26}
      />
      </View>
      <View>
        <Text className="text-2xl font-bold text-gray-400">$ {amount.toFixed(2)}</Text>
      </View>
    </View>
  );
}