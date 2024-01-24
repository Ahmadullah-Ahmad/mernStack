import { Card, Spinner, Typography } from "@material-tailwind/react";
import { DetailsCard } from "./DetailsCard";
import { Back } from "../../hooks/Back";
import { useCustomerOne } from "./useGetOneCustomer";
import CustoemerSalesTable from "../CustoemerSales/CustoemerSalesTable";
import CustomerPurchaseTable from "../CustoemerPurchase/CustoemerPuchaseTable";
import { formatCurrency } from "../../utils/helpers";
import { HiOutlineArrowLeft } from "react-icons/hi2";

function CustomerDatails() {
  const { customer, purchase, sale, isLoading } = useCustomerOne();
  const { goBack } = Back();
  const totalPurchase = customer?.purchase?.reduce(
    (pre, cur) => cur.price * cur.quantity + pre,
    0
  );
  const totalLoanOnMe = customer?.purchase
    ?.filter((el) => el?.pay === false)
    .reduce((pre, cur) => cur.quantity * cur.price + pre, 0);

  const totalSales = customer?.Sales?.reduce(
    (pre, cur) => cur.price * cur.quantity + pre,
    0
  );
  const totalLoanOnCustomer = customer?.Sales?.filter(
    (el) => el?.pay === false
  ).reduce((pre, cur) => cur.quantity * cur.price + pre, 0);
  console.log(customer);
  if (isLoading)
    return (
      <div className="flex items-center h-[100dvh] w-full justify-center">
        <Spinner className="h-16 w-16 " color="blue" />
      </div>
    );

  return (
    <Card className=" rounded-sm h-full darkModeTop bg-gray-200 p-2 shadow-none ">
      <HiOutlineArrowLeft
        size={25}
        onClick={() => goBack()}
        className="cursor-pointer hover:text-blue-300"
      />
      <div>
        <div className="flex justify-center md:flex-row flex-col">
          <DetailsCard title={"Name"} value={customer?.name} />
          <DetailsCard title={"phone"} value={customer?.phone} />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col gap-2 pt-2 flex-col">
        <div>
          <CustoemerSalesTable product={customer?.Sales} count={sale} />
          {customer?.Sales?.length !== 0 ? (
            <div className="flex justify-between items-center p-1">
              <Typography variant="small">
                Total Sales:
                <span className="px-2">{formatCurrency(totalSales)}</span>
              </Typography>
              <Typography variant="small">
                Total Loan:
                <span className="px-2">
                  {formatCurrency(totalLoanOnCustomer)}
                </span>
              </Typography>
            </div>
          ) : null}
        </div>
        <div>
          <CustomerPurchaseTable
            product={customer?.purchase}
            count={purchase}
          />
          {customer?.purchase?.length !== 0 ? (
            <div className="flex justify-between items-center p-1">
              <Typography variant="small">
                Total Purchase:
                <span className="px-2">{formatCurrency(totalPurchase)}</span>
              </Typography>
              <Typography variant="small">
                Total Loan:
                <span className="px-2">{formatCurrency(totalLoanOnMe)}</span>
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default CustomerDatails;
