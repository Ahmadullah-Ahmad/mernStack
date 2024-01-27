import { MenuItem, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ComfirmDelete from "../../UI/ComfirmDelete";
import Model from "../../UI/Model";
import Table from "../../UI/Table";
import { formatCurrency, formatQuantity } from "../../utils/helpers";
import { useDelete } from "./useDeleteSale";
import { useUser } from "../Authentication/useUser";
import MenuLists from "../../UI/MenuLists";

function SaleRow({ item, borderKey }) {
  const className = ` darkModeMiddle ${
    borderKey ? "" : "border-b border-blue-gray-50 dark:border-gray-900"
  }`;
  const { user } = useUser();
  const total =
    (item?.price - (item?.price * item?.discount) / 100) * item.quantity;

  const EditObject = {
    id: item.id,
    discount: item.discount,
    quantity: item.quantity,
    pay: item.pay,
    product: item.product?.name,
    customerName: item.customer?.name,
    phone: item.customer?.phone,
    price: item.price,
  };

  const { saleDelete, isDeleting } = useDelete();
  const [openModel, setOpenModel] = useState(false);
  function deleteItem() {
    saleDelete(item.id);
    setOpenModel(false);
  }
  return (
    <>
      <Table.Row>
        <td className={`${className} `} colSpan={2}>
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
              <Model.Open open={"SaleEdit"} formData={EditObject}>
                <MenuItem className="flex items-center ">
                  <HiPencil size={20} className="" />
                  <Typography className="px-4 font-semibold uppercase  ">
                    تعغیر کردی
                  </Typography>
                </MenuItem>
              </Model.Open>
            </div>
          </MenuLists>
        </td>
        <td className={`${className} `} dir="rtl">
          <Typography variant="small">{formatCurrency(total)} </Typography>
        </td>
        {/* <td className={`${className} capitalize  `}>
          <Typography
            variant="small"
            className={`text-lg ${
              item.pay ? "text-blue-500" : "text-light-blue-800"
            }`}
          >
            {item.pay ? "نغد" : "قرض"}
          </Typography>
        </td> */}
        <td className={`${className} capitalize `} dir="rtl">
          <Typography variant="small">
            {formatQuantity(item.quantity)}
          </Typography>
        </td>
        <td className={`${className} capitalize relative`} dir="rtl">
          <Typography variant="small">
            {formatCurrency(item.price)}
            <Typography
              variant="small"
              className={`absolute bottom-0 right-2 text-[10px] ${
                item.pay ? "" : "text-red-300"
              }`}
            >
              {item.pay ? "" : "(قرض)"}
            </Typography>
          </Typography>
        </td>

        <td className={`${className} capitalize text-base darkModeMiddle  `}>
          <Typography variant="small" className="pt-[]">
            {item.discount}%
          </Typography>
        </td>
        <td className={`${className} capitalize `}>
          {item.customer?.name ? (
            <Typography variant="small">{item.customer?.name}</Typography>
          ) : (
            ""
          )}
          {item.customer?.phone ? (
            <Typography variant="small" className="text-gray-500 ">
              {item.customer?.phone}
            </Typography>
          ) : (
            ""
          )}
        </td>
        <td className={`${className} capitalize  pr-2`}>
          <Typography variant="small" className="text-lg">
            {item.product?.name}
          </Typography>
        </td>
      </Table.Row>
      <ComfirmDelete
        open={openModel}
        disabled={isDeleting}
        onDelete={deleteItem}
        resourceName={` جنس ${item.product?.name} فروختشده `}
        close={setOpenModel}
      />
    </>
  );
}

export default SaleRow;
