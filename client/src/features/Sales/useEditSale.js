import { useMutation } from "@tanstack/react-query";
import { editSaleApi } from "../../services/SalesApi";

export function useEditSales() {
  const { mutate: EditSales, isPending: isEditting } = useMutation({
    mutationFn: ({ data }) => editSaleApi({ data }),
  });

  return { EditSales, isEditting };
}
