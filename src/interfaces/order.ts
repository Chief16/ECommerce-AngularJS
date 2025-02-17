export interface IOrder {
  id: number;
  orderDate: string;
  orderItems: ICatalogInCart[];
  total: number;
}