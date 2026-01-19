export interface ITransaction {
  id: number;
  value: number;
  description: string;
  categoryId: number;
  typeId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
