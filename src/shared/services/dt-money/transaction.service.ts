import { dtMoneyApi } from "@/shared/api/dt-money";
import { ICreateTransactionRequest } from "@/shared/interfaces/https/create-transaction-request";
import { ITransactionCategory } from "@/shared/interfaces/https/transaction-categories";

export const getTransactionCategories = async (): Promise<
  ITransactionCategory[]
> => {
  const { data } = await dtMoneyApi.get<ITransactionCategory[]>(
    "/transaction/categories"
  );
  return data;
};

export const createTransaction = async (
  body: ICreateTransactionRequest
): Promise<void> => {
  await dtMoneyApi.post("/transaction", body);
};
