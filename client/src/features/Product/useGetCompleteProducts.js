import { useQuery } from "@tanstack/react-query";
import { getProductCount } from "../../services/ProductApi";
export function useCompleteProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["Completeproducts"],
    queryFn: () => getProductCount(),
  });
  return { products: data?.data, count: data?.length, isLoading };
}
