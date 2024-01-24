import { Card, Spinner, Typography } from "@material-tailwind/react";
import { useProductOne } from "./useGetOne";
import { URL } from "../../utils/constant";
import { formatCurrency } from "../../utils/helpers";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Back } from "../../hooks/Back";

function Advertisment() {
  const { product, isLoading } = useProductOne();

  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 absolute backdrop-blur-sm top-[50%] left-[50%] "
        color="blue"
      />
    );

  return (
    <Card className="w-[80%] darkModeTop  shadow-none  mt-5 relative h-[90%]   sm:gap-10 bg-transparent">
      <Card className="pt-6  text-right grid grid-cols-[1fr_1fr] shadow-sm rounded-md relative h-full bg-gray-200 darkModeMiddle">
        <div className="flex justify-center ">
          <img
            className="md:h-72 sm:h-64 object-cover   object-center rounded-md "
            src={`${URL + product?.photo}`}
            alt="product"
          />
        </div>
        <div className=" text-right pr-6 ">
          <div>
            <Typography className="py-2 font-semibold text-xl">
              نام : <span className="ml-4 font-normal">{product?.name}</span>
            </Typography>
            <Typography className="py-2 font-semibold text-xl">
              قیمت :{" "}
              <span className="ml-4 font-normal">
                {formatCurrency(product?.salePrice)}
              </span>
            </Typography>
            <Typography className="py-2 font-semibold text-xl">
              جزئیات
              <br />
              <span className=" bg-clip-text font-normal textWrap">
                {product?.description}
              </span>
            </Typography>
          </div>
        </div>
      </Card>
    </Card>
  );
}

export default Advertisment;
/*
<div className="p-2 h-[80dvh] flex items-center ">
      <div className="flex gap-x-8 sm:flex-row flex-col items-center">
        <div>
          <img
            className="md:h-96 sm:h-64 object-cover object-center rounded-md "
            src={`${URL + product?.photo}`}
            alt="product"
          />
        </div>
        <div className="uppercase">
          <div className="flex gap-3 ">
            <Typography>Name:</Typography>
            <Typography> {product?.name}</Typography>
          </div>
          <div className="flex gap-3">
            <Typography>Price:</Typography>
            <Typography> {formatCurrency(product?.salePrice)}</Typography>
          </div>
          <div className="flex gap-3">
            <Typography>Description:</Typography>
            <Typography> {product?.description}</Typography>
          </div>
        </div>
      </div>
    </div>
*/
