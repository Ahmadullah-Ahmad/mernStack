import {
  Alert,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { HiXMark } from "react-icons/hi2";
import { formatCurrency } from "../utils/helpers";
import { format } from "date-fns";

function Notification({
  price,
  open,
  deadline,
  close,
  createdDate,
  customer,
  product,
  notify,
}) {
  return (
    <Dialog open={open} handler={close} dir="rtl" className=" ">
      <DialogHeader className="flex justify-between items-center rounded-md ">
        <HiXMark
          className="hover:text-blue-500 cursor-pointer "
          size={30}
          onClick={close}
        />
        <Typography variant="h4" className="text-red-400">
          تاریخ پرداخت قرض
        </Typography>
      </DialogHeader>
      {notify?.map((el) => (
        <Alert
          className="text-gray-700 dark:text-white my-1"
          key={el.id}
          color="lime"
        >
          این محترم{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-900">
            {el.customer?.name}
          </span>{" "}
          به تاریخ{" "}
          <span className="font-thin text-sm text-gray-800 dark:text-gray-900">
            {" "}
            {format(new Date(el.createdAt), "yyyy-dd-MMM")}
          </span>{" "}
          <span className="text-red-500 "> {el?.product?.name}</span> جنس پروخته
          شده است. که پرداخت باقیماده پول به تاریخ{" "}
          <span className="font-thin text-sm text-gray-800 dark:text-gray-900">
            {format(new Date(el.deadline), "yyyy-dd-MMM")}
          </span>{" "}
          وعده شده است. که ازشما مخواهیم که مبلغ{" "}
          <span className="font-thin text-sm  text-red-500">
            {formatCurrency(el.price)}
          </span>{" "}
          را تحویل ماید.
        </Alert>
      ))}
    </Dialog>
  );
}

export default Notification;
