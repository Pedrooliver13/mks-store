// Libs
import { api } from "lib/axios";

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  updatedAt: string;
  createdAt: string;
  quantity: number;
};

export interface AllProducts {
  products: Product[];
  count: number;
}

export const getAllProducts = async () => {
  const response = await api.get<AllProducts>(
    "/products?page=1&rows=50&sortBy=id&orderBy=ASC"
  );

  return response?.data;
};
