import { useEffect } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTransaction } from "@/context/TransactionContex";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { ListHeader } from "./ListHeader";

export function Home() {
  const { fetchCategories, fetchTransactions } = useTransaction();
  const { handleError } = useErrorHandler();

  const handleGetCategories = async () => {
    try {
      await fetchCategories();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await Promise.all([
        handleGetCategories(),
        fetchTransactions(),
      ]);
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <FlatList
        ListHeaderComponent={ListHeader}
        data={[]}
        renderItem={({ item }) => <></>}
        className="bg-background-secondary"
      />
    </SafeAreaView>
  );
}
