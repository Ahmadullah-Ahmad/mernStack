import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import Pagination from "../../UI/Pagination";
import CustomerSaleRow from "./CustomerPurchaseRow";
const customerSaleHeader = ["نام", "قیمت", "مقداز", "تاریخ"];

function CustoemerSalesTable({ product, count }) {
  if (product?.length === 0)
    return (
      <div>
        <Typography variant="h5" className="text-center uppercase">
          خریداری مشتری
        </Typography>

        <Typography className="flex text-red-200 py-4  justify-center font-bold uppercase  mt-8 text-xl items-center">
          خریداری ندارد
        </Typography>
      </div>
    );
  return (
    <div className="bg-transparent" dir="rtl">
      <Typography variant="h5" className="text-center">
        خریداری مشتری
      </Typography>
      <Table>
        <Table.Header>
          {customerSaleHeader?.map((el, index) => (
            <td className="py-3 darkModeMiddle" key={index}>
              <Typography
                variant="small"
                className={`font-semibold uppercase ${
                  index === 0 ? "pr-2" : ""
                }`}
              >
                {el}
              </Typography>
            </td>
          ))}
        </Table.Header>
        <Table.Body>
          {product?.map((el, index) => (
            <CustomerSaleRow item={el} key={el.id} />
          ))}
        </Table.Body>
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </div>
  );
}

export default CustoemerSalesTable;
