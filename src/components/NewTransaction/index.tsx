import { ICreateTransactionRequest } from "@/shared/interfaces/https/create-transaction-request";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useBottomSheet } from "@/context/BottomSheetContext";
import CurrencyInput from "react-native-currency-input";
import { SelectType } from "../SelectType";

export function NewTransaction() {
  const [transaction, setTransaction] = useState<ICreateTransactionRequest>({
    typeId: 0,
    categoryId: 0,
    description: "",
    value: 0,
  });

  const { closeBottomSheet } = useBottomSheet();

  const setTransactionData = (key: keyof ICreateTransactionRequest, value: string | number) => {
    setTransaction(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <View className="px-8 py-5">
      <TouchableOpacity className="w-full flex-row items-center justify-between" onPress={closeBottomSheet}>
        <Text className="text-xl font-bold text-white">New Transaction</Text>
        <MaterialIcons name="close" color={colors.gray[700]} size={20} />
      </TouchableOpacity>
      <View className="flex-1 mt-8 mb-8">
        <TextInput
          placeholder="Description"
          placeholderTextColor={colors.gray[700]}
          value={transaction.description}
          onChangeText={(text) => setTransactionData("description", text)}
          className="my-2 h-[50px] rounded-[6] bg-background-primary pl-4 text-lg text-white"
        />
        <CurrencyInput
          className="my-2 h-[50px] rounded-[6] bg-background-primary pl-4 text-lg text-white"
          value={transaction.value}
          onChangeValue={(value) => setTransactionData("value", value ?? 0)}
          prefix="$ "
          delimiter=","
          separator="."
          precision={2}
          minValue={0}
        />
        <SelectType typeId={transaction.typeId} setTransactionType={(typeId) => setTransactionData("typeId", typeId)} />
      </View>
    </View>
  );
}
