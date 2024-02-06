import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import { formatCurrency, formatQuantity } from "../../utils/helpers";
import { differenceInHours, format, parseISO } from "date-fns";
import { useState } from "react";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import Notification from "../../UI/Notification";

function CustomerSaleRow({ item, borderKey }) {
  const className = "border-b border-blue-gray-50 py-2 darkModeMiddle";
  const date = new Date();
  const hourDiference = differenceInHours(
    parseISO(item.deadline),
    parseISO(new Date(date.getTime()).toISOString())
  );
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Table.Row>
        <td className={`${className} capitalize relative`}>
          <Typography variant="small">
            {format(new Date(item?.createdAt), "yyyy-MM-dd")}
          </Typography>
          {hourDiference <= 24 && hourDiference > 0 && !item?.pay ? (
            <div className=" absolute top-0 right-1">
              <HiMiniChatBubbleLeftEllipsis
                className="text-red-700 cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
          ) : null}
        </td>
        <td className={`${className} capitalize `}>
          <Typography variant="small" dir="rtl">
            {formatQuantity(item?.quantity)}
          </Typography>
        </td>
        <td className={`${className} capitalize relative`}>
          <div dir="rtl">
            {formatCurrency(item?.price * item?.quantity)}{" "}
            <span
              className={`absolute bottom-0 right-2 text-[10px]  ${
                item?.pay ? "" : "text-red-300"
              }`}
            >
              {item.pay ? "" : "(قرض)"}
            </span>
          </div>
        </td>

        <td className={`${className} pr-2 capitalize`}>
          <Typography variant="small">{item?.product?.name}</Typography>
        </td>
      </Table.Row>
      <Notification
        open={open}
        close={close}
        customer={item.customer?.name}
        createdDate={format(new Date(item.createdAt), "yyyy-dd-MMM")}
        product={item?.product?.name}
        deadline={format(new Date(item.deadline), "yyyy-dd-MMM")}
        price={formatCurrency(item.price)}
      />
    </>
  );
}

export default CustomerSaleRow;
