import { AppHeader } from "@/components/AppHeader";
import { ScrollView, Text, View } from "react-native";
import { TransactionCard } from "./TransactionCard";
import { TransactionTypes } from "@/shared/enums/transaction-types";
import { useTransaction } from "@/context/TransactionContex";

export function ListHeader() {
  const { totalTransactions } = useTransaction();
  
  return (
    <>
      <AppHeader />
      <View className="h-[150px] w-full">
        <View className="h-[50px] bg-background-primary" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          className="absolute h-[141] pl-6"
        >
          <TransactionCard type={TransactionTypes.INCOME} amount={totalTransactions.revenue} />
          <TransactionCard type={TransactionTypes.EXPENSE} amount={totalTransactions.expense} />
          <TransactionCard type="total" amount={totalTransactions.total} />
        </ScrollView>
      </View>
    </>
  );
}
