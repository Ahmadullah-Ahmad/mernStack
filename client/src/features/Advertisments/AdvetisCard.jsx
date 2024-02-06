import { Card, Typography } from "@material-tailwind/react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { URL } from "../../utils/constant";
import { NavLink } from "react-router-dom";
function AdvetisCard({ item }) {
  return (
    <Card
      color="transparent"
      className="flex justify-center items-center shadow-none darkModeMiddle  bg-gray-100 p-4"
      role="listitem"
    >
      <div className="flex justify-center">
        <img
          src={`${URL + item.photo}`}
          alt="product"
          width={180}
          className="rounded-lg w-full sm:h-32 object-cover object-center"
        />
      </div>
      <div className="flex  justify-end container  darkModeMiddle" role="table">
        <div className="text-right ">
          <Typography className=" font-semibold   gap-4">
            نام : <span className=" font-normal ">{item?.name}</span>
          </Typography>
          <Typography className="  gap-4  font-semibold">
            قیمت :{" "}
            <span className=" font-normal">{item?.salePrice} افغانی</span>
          </Typography>
        </div>
        <NavLink
          to={`/home/${item.id}`}
          size="sm"
          variant="text"
          className="  px-2 absolute left-1 bottom-1 rounded-md py-[1px] hover:text-gray-50 hover:bg-blue-700 transition-all duration-100"
        >
          <HiOutlineArrowLeft size={20} width={50} />
        </NavLink>
      </div>
    </Card>
  );
}

export default AdvetisCard;
/*


<div className="flex justify-center">
        <img
          src={URL + item.photo}
          alt="product"
          width={180}
          className="rounded-lg h-28 w-64 object-cover object-center"
        />
      </div>
      <div
        className="flex justify-center container darkModeMiddle"
        role="table"
      >
        <table>
          <tbody>
            <tr className="p-4">
              <td>
                <Typography className="px-4 capitalize">Name</Typography>
              </td>
              <td>
                <Typography className="px-4 capitalize">
                  {item?.name}
                </Typography>
              </td>
            </tr>
            <tr className="p-4">
              <td>
                <Typography className="px-4 capitalize">Price</Typography>
              </td>
              <td>
                <Typography className="px-4 capitalize">
                  {formatCurrency(item?.salePrice)}
                </Typography>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="flex justify-end">
                  <NavLink
                    to={`/home/${item.id}`}
                    size="sm"
                    variant="text"
                    className="darkModeButtom text-black bg-gray-300 px-2 rounded-md py-1 hover:text-gray-50 hover:bg-blue-700 transition-all duration-100"
                  >
                    // {/* <Button size="sm" variant="text" className="darkModeSubimt"> }
                    // Details
                    {/* </Button> }
                 /* </NavLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
 */
