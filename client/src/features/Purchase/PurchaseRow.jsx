import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { useState } from "react";
import { HiEllipsisVertical, HiPencil, HiTrash } from "react-icons/hi2";

import { useUser } from "../Authentication/useUser";
import ComfirmDelete from "../../UI/ComfirmDelete";
import Model from "../../UI/Model";
import Table from "../../UI/Table";
import { formatCurrency, formatQuantity } from "../../utils/helpers";
import { useDelete } from "./useDeletePurchase";
import MenuLists from "../../UI/MenuLists";
// quantity,price,pay,createdAt,location
function PurchaseRow({ item, borderKey }) {
  const className =
    "py-1 darkModeMiddle border-b border-blue-gray-50 dark:border-gray-900";

  const { user } = useUser();

  const total = item.price * item.quantity;
  // price,quantity,location,pay,productName,productType,customerName,phone
  const editObj = {
    id: item.id,
    customerName: item?.customer?.name,
    phone: item?.customer?.phone,
    productType: item?.product?.type,
    productName: item?.product?.name,
    pay: item.pay,
    location: item.location,
    quantity: item.quantity,
    price: item.price,
  };
  const [openModel, setOpenModel] = useState(false);
  const { Delete, isDeleting } = useDelete();
  function deleteItem() {
    Delete(item.id);
    setOpenModel(false);
  }
  return (
    <>
      <Table.Row>
        <td className={`${className}  `}>
          <MenuLists>
            {user?.role !== "user" ? (
              <MenuItem
                onClick={() => setOpenModel((el) => !el)}
                className="flex items-center text-red-300 hover:text-red-300"
              >
                <HiTrash size={20} className="" />
                <Typography className="px-4 font-semibold uppercase  ">
                  حذب کردن
                </Typography>
              </MenuItem>
            ) : null}
            <div>
              <Model.Open open={"purchaseEdit"} formData={editObj}>
                <MenuItem className="flex items-center ">
                  <HiPencil size={20} className="" />
                  <Typography className="px-4 font-semibold uppercase  ">
                    تعغیرکردن
                  </Typography>
                </MenuItem>
              </Model.Open>
            </div>
          </MenuLists>
        </td>

        <td className={`${className} capitalize `} dir="rtl">
          <Typography variant="small">{formatCurrency(total)} </Typography>
        </td>
        <td className={`${className} capitalize hidden md:block`}>
          <Typography variant="small">
            {format(new Date(item.createdAt), "yyyy-MM-dd")}
          </Typography>
        </td>

        <td className={`${className} capitalize relative `} dir="rtl">
          <Typography variant="small" className={``}>
            {formatCurrency(item.price)}{" "}
            <span
              className={`absolute bottom-0 right-2 text-[10px]  ${
                item?.pay ? "text-blue-300" : "text-red-300"
              }`}
            >
              {item.pay ? "" : "(قرض)"}
            </span>
          </Typography>
        </td>

        <td className={`${className} capitalize `} dir="rtl">
          <Typography variant="small">
            {formatQuantity(item.quantity)}
          </Typography>
        </td>

        <td className={`${className}  capitalize hidden md:block md:pt-[15px]`}>
          <Typography variant="small" className="text-lg">
            {item.location}
          </Typography>
        </td>
        <td className={`${className} capitalize `}>
          <Typography variant="small" className="text-lg">
            {item?.product?.name}
          </Typography>
        </td>
        <td className={`${className} hidden md:block`}>
          <Typography variant="small" className="text-gray-500">
            {item?.customer?.phone}
          </Typography>
        </td>

        <td className={`${className}  pr-2 capitalize  `}>
          <Typography variant="small" className="text-lg">
            {item?.customer?.name}
            {/* <p className="text-gray-500 text-xs">{item?.customer.phone}</p> */}
          </Typography>
        </td>
      </Table.Row>

      <ComfirmDelete
        open={openModel}
        disabled={isDeleting}
        onDelete={deleteItem}
        resourceName="معلومات "
        close={setOpenModel}
      />
    </>
  );
}

export default PurchaseRow;
