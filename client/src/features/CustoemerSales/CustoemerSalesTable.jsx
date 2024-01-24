import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import Pagination from "../../UI/Pagination";
import CustomerSaleRow from "./CustomerSaleRow";
const customerSaleHeader = ["نام", "قیمت", "مقدار", "تاریخ"];

function CustoemerSalesTable({ product, count }) {
  if (product?.length === 0)
    return (
      <div>
        <Typography variant="h5" className="text-center uppercase">
          فروش مشتری
        </Typography>

        <Typography className="flex text-red-200 py-4 justify-center font-bold uppercase  mt-8 text-xl items-center">
          فروش ندارد
        </Typography>
      </div>
    );
  return (
    <div dir="rtl">
      <Typography variant="h5" className="text-center">
        فروش مشتری
      </Typography>
      <div className="">
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
              <CustomerSaleRow
                item={el}
                key={el.id}
                borderKey={index === product?.length - 1}
              />
            ))}
          </Table.Body>
          <Table.Footer>
            <Pagination count={count} pageSize={5} />
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}

export default CustoemerSalesTable;
