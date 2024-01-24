import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import { formatCurrency } from "../../utils/helpers";
import { format } from "date-fns";

function CustomerSaleRow({ item, borderKey }) {
  const className = "border-b border-blue-gray-50 py-2 darkModeMiddle";

  return (
    <Table.Row>
      <td className={`${className} p-2 capitalize`}>
        <Typography variant="small">{item?.product?.name}</Typography>
      </td>
      <td className={`${className} capitalize `}>
        <div>
          {formatCurrency(item?.price * item?.quantity)}{" "}
          {item?.pay ? (
            ""
          ) : (
            <p
              className={`text-[10px] mx-auto text-justify ${
                item?.pay ? "" : "text-red-400"
              }`}
            >
              you should pay
            </p>
          )}
        </div>
      </td>
      <td className={`${className} capitalize `}>
        <Typography variant="small">{item?.quantity}</Typography>
      </td>

      <td className={`${className} capitalize`}>
        <Typography variant="small">
          {format(new Date(item?.createdAt), "yyyy-MM-dd")}
        </Typography>
      </td>
    </Table.Row>
  );
}

export default CustomerSaleRow;
