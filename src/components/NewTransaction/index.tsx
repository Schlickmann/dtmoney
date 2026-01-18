import { ICreateTransactionRequest } from "@/shared/interfaces/https/create-transaction-request";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useBottomSheet } from "@/context/BottomSheetContext";


export function NewTransaction() {
  const [transaction, setTransaction] = useState<ICreateTransactionRequest>({
    typeId: 0,
    categoryId: 0,
    description: "",
    value: 0,
  })

  const { closeBottomSheet } = useBottomSheet()

  return (
    <View className="px-8 py-5">
      <TouchableOpacity className="w-full flex-row items-center justify-between" onPress={closeBottomSheet}>
        <Text className="text-xl text-white font-bold">New Transaction</Text>
        <MaterialIcons name="close" color={colors.gray[700]} size={20} />
      </TouchableOpacity>
    </View>
  )
}