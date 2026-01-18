import { dtMoneyApi } from "@/shared/api/dt-money";
import { ITransactionCategory } from "@/shared/interfaces/https/transaction-categories";

export const getTransactionCategories = async (): Promise<
  ITransactionCategory[]
> => {
  const { data } = await dtMoneyApi.get<ITransactionCategory[]>(
    "/transaction/categories"
  );
  return data;
};
