import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllPurchase } from "../../services/purchaseApi";
export function usePurchase() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const get = searchParams.get("get");
  const sort = searchParams.get("sort");
  const { data, isLoading } = useQuery({
    queryKey: ["purchase", page, get, sort],
    queryFn: () => getAllPurchase({ page, get, sort }),
  });
  return { purchases: data?.data, count: data?.count, isLoading };
}
