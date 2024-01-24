import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";
import { getAllBraches } from "../../services/branchApi";
export function useBranchAll() {
  // const [searchParams] = useSearchParams();
  // //   const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data, isLoading } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getAllBraches({ page: 0 }),
  });
  return { branches: data?.data, count: data?.count, isLoading };
}
