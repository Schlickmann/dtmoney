import { createContext, ReactNode, useContext, useState } from "react";
import { ITransactionCategory } from "@/shared/interfaces/https/transaction-categories";
import * as transactionService from "@/shared/services/dt-money/transaction.service";

export type TransactionContextType = {
  fetchCategories: () => Promise<void>;
  categories: ITransactionCategory[];
};

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<ITransactionCategory[]>([]);

  const fetchCategories = async () => {
    const data = await transactionService.getTransactionCategories();

    setCategories(data);
  };

  return (
    <TransactionContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }

  return context;
}
