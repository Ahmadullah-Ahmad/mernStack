import { Spinner, Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import HoneyRow from "./SalesRow";
import { useSales } from "./useGetSales";
import Pagination from "../../UI/Pagination";
import Model from "../../UI/Model";
import SalesForm from "./SalesForm";

const colums = [
  "جنس",
  "مشتری",
  "تخفیف",
  "قیمت",
  "مقدار",
  "پرداخت",
  "مجموعه",
  "",
  "",
].reverse();
function SaleTable() {
  const { count, isLoading, sells } = useSales();
  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 fixed  top-[50%] left-[50%] "
        color="blue"
      />
    );
  return (
    <div className="rounded-sm p-1  darkModeTop">
      <Model>
        <div>
          <Table>
            <Table.Header>
              {colums.map((el, index) => (
                <td
                  className={`py-3 darkModeMiddle 
                  `}
                  key={index}
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
              {sells?.map((el, index) => (
                <HoneyRow
                  item={el}
                  key={el.id}
                  borderKey={index === sells.length - 1}
                />
              ))}
            </Table.Body>
            <Table.Footer>
              <Pagination count={count} pageSize={7} />
            </Table.Footer>
          </Table>

          <Model.Window name={"SaleEdit"}>
            <SalesForm />
          </Model.Window>
        </div>
      </Model>
    </div>
  );
}

export default SaleTable;
