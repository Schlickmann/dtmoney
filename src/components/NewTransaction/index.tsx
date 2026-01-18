import { ICreateTransactionRequest } from "@/shared/interfaces/https/create-transaction-request";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useBottomSheet } from "@/context/BottomSheetContext";
import CurrencyInput from "react-native-currency-input";
import { SelectType } from "../SelectType";
import { SelectCategoryModal } from "../SelectCategoryModal";
import { transactionSchema } from "./schema";
import * as yup from "yup";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import { useTransaction } from "@/context/TransactionContex";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

type ValidationErrors = Record<keyof ICreateTransactionRequest, string>;

export function NewTransaction() {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>();
  const [transaction, setTransaction] = useState<ICreateTransactionRequest>({
    typeId: 0,
    categoryId: 0,
    description: "",
    value: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { handleError } = useErrorHandler();
  const { closeBottomSheet } = useBottomSheet();
  const { createTransaction } = useTransaction()

  const setTransactionData = (
    key: keyof ICreateTransactionRequest,
    value: string | number
  ) => {
    setTransaction((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCreateTransaction = async () => {
    try {
      setIsLoading(true);
      await transactionSchema.validate(transaction, { abortEarly: false });
      await createTransaction(transaction);
      closeBottomSheet();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = {} as ValidationErrors;

        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path as keyof ICreateTransactionRequest] = err.message;
          }
        });

        setValidationErrors(errors);
      } else {
        handleError(error, 'Could not create transaction. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View className="px-8 py-5">
      <TouchableOpacity
        className="w-full flex-row items-center justify-between"
        onPress={closeBottomSheet}
      >
        <Text className="text-xl font-bold text-white">New Transaction</Text>
        <MaterialIcons name="close" color={colors.gray[700]} size={20} />
      </TouchableOpacity>
      <View className="mb-8 mt-8 flex-1">
        <TextInput
          placeholder="Description"
          placeholderTextColor={colors.gray[700]}
          value={transaction.description}
          onChangeText={(text) => setTransactionData("description", text)}
          className="my-2 h-[50px] rounded-[6] bg-background-primary pl-4 text-lg text-white"
        />
        {validationErrors?.description && (
          <ErrorMessage>{validationErrors.description}</ErrorMessage>
        )}
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
        {validationErrors?.value && (
          <ErrorMessage>{validationErrors.value}</ErrorMessage>
        )}
        <SelectCategoryModal
          selectedCategory={transaction.categoryId}
          onSelectCategory={(categoryId) => setTransactionData("categoryId", categoryId)}
        />
        {validationErrors?.categoryId && (
          <ErrorMessage>{validationErrors.categoryId}</ErrorMessage>
        )}
        <SelectType
          typeId={transaction.typeId}
          setTransactionType={(typeId) => setTransactionData("typeId", typeId)}
        />
        {validationErrors?.typeId && (
          <ErrorMessage>{validationErrors.typeId}</ErrorMessage>
        )}

        <View className="my-4">
          <Button onPress={handleCreateTransaction}>
            {isLoading ? <ActivityIndicator color={colors.white} /> : <Text>Add</Text>}
          </Button>
        </View>
      </View>
    </View>
  );
}
