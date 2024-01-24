import { IconButton, Spinner, Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import PurchaseRow from "./PurchaseRow";
import PurchaseForm from "./PurchaseForm";
import { usePurchase } from "./useGetPurchase";
import { useSearchParams } from "react-router-dom";
import Model from "../../UI/Model";
import Pagination from "../../UI/Pagination";
const PurchaseHeader = [
  "فروشنده‌",
  "شماره",
  "نام",
  "ادرس",
  "مقدار",
  "قیمت",
  "تاریخ",
  "مجموعه",
  "",
].reverse();

function PurchaseTable({ title }) {
  const { count, isLoading, purchases } = usePurchase();
  const [searchParams, setSearchParams] = useSearchParams();
  if (purchases?.length === 0) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 fixed  top-[50%] left-[50%] "
        color="blue"
      />
    );
  return (
    <div className="rounded-sm darkModeTop bg-gray-300 p-1">
      <div>
        <Model>
          <Table>
            <Table.Header>
              {PurchaseHeader.map((el, index) => (
                <td
                  key={el}
                  className={`py-3 darkModeMiddle  ${
                    index === 1 || index === 3 || index === 6
                      ? "hidden md:block"
                      : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className={` font-semibold uppercase text-lg ${
                      index === 8 ? "pr-2" : ""
                    }`}
                  >
                    {el}
                  </Typography>
                </td>
              ))}
            </Table.Header>
            <Table.Body>
              {purchases?.map((el, index) => (
                <PurchaseRow
                  item={el}
                  key={el.id}
                  borderKey={index === purchases.length - 1}
                  hiddenFile={
                    index === 0 || index === 2 || index === 5 ? true : false
                  }
                />
              ))}
            </Table.Body>
            <Table.Footer>
              <Pagination count={count} />
            </Table.Footer>
          </Table>

          <Model.Window name={"purchaseEdit"}>
            <PurchaseForm />
          </Model.Window>
        </Model>
      </div>
    </div>
  );
}

export default PurchaseTable;
