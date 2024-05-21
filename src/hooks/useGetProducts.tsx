// Packages
import { UseQueryResult, useQuery } from "@tanstack/react-query";

// Services
import { getAllProducts, AllProducts } from "services/products";

export const useGetProducts = (): UseQueryResult<AllProducts> => {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await getAllProducts();
    },
  });

  return response;
};
