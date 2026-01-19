import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { ITransactionCategory } from "@/shared/interfaces/https/transaction-categories";
import * as transactionService from "@/shared/services/dt-money/transaction.service";
import { ICreateTransactionRequest } from "@/shared/interfaces/https/create-transaction-request";
import { ITransaction } from "@/shared/interfaces/transaction";

export type TransactionContextType = {
  fetchCategories: () => Promise<void>;
  categories: ITransactionCategory[];
  createTransaction: (transaction: ICreateTransactionRequest) => Promise<void>;
  fetchTransactions: () => Promise<void>;
  transactions: ITransaction[];
};

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<ITransactionCategory[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchCategories = async () => {
    const data = await transactionService.getTransactionCategories();

    setCategories(data);
  };

  const createTransaction = async (transaction: ICreateTransactionRequest) => {
    await transactionService.createTransaction(transaction);
  };

  const fetchTransactions = useCallback(async () => {
    const { data } = await transactionService.getTransactions({
      page: 1,
      perPage: 10,
    });

    setTransactions(data);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        categories,
        fetchCategories,
        createTransaction,
        fetchTransactions,
        transactions,
      }}
    >
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
