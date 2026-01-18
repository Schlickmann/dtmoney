export interface ICreateTransactionRequest {
  typeId: number;
  categoryId: number;
  description: string;
  value: number;
}