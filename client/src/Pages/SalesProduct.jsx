import { Card, Button, Spinner } from "@material-tailwind/react";
import SalesTable from "../features/Sales/SalesTable";
import SortBy from "../UI/SortBy";
import product from "../utils/products";
import Model from "../UI/Model";
import Empty from "../UI/Empty";
import NavBarMenu from "../UI/NavBarMenu";

import SalesForm from "../features/Sales/SalesForm";
import { useSales } from "../features/Sales/useGetSales";
import { HiArrowLeft } from "react-icons/hi2";
import { Back } from "../hooks/Back";
import { useDashboardData } from "../features/Dashboard/useGetDashboard";

function Sales() {
  const { sells, isLoading } = useSales();
  const { data, isLoading: productLoading } = useDashboardData();

  // Menu label
  let chartLabel = ["همه"];
  data?.product?.filter((el) => {
    if (!chartLabel.includes(el.type.toUpperCase())) {
      return chartLabel.push(el.type.toUpperCase());
    }
    return el;
  });
  console.log(chartLabel);
  const { goBack } = Back();
  if (isLoading || productLoading)
    return (
      <Spinner
        className="h-16 w-16 fixed  top-[50%] left-[50%] "
        color="blue"
      />
    );
  if (sells?.length === 0)
    return (
      <>
        <div className="float-left bottom-5">
          <HiArrowLeft
            size={30}
            onClick={() => goBack()}
            className="cursor-pointer  hover:text-blue-600"
          />
        </div>
        <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Empty data={" فروشات"} />
          <div className="px-2 flex justify-center mt-4">
            <Model>
              <Model.Open open={"purchaseForm"}>
                <Button
                  variant="filled"
                  color="white"
                  className="bg-gray-400 text-gray-900"
                >
                  فروش جدید
                </Button>
              </Model.Open>

              <Model.Window name={"purchaseForm"}>
                <SalesForm />
              </Model.Window>
            </Model>
          </div>
        </div>
      </>
    );
  return (
    <Card className="grid  grid-rows-[auto_1fr] p-1 rounded-sm shadow-none darkModeTop bg-gray-300">
      <div className="flex flex-row items-center  rounded-none p-1  darkModeTop  ">
        <div className="flex justify-center gap-x-3 w-72">
          <SortBy
            routes={[
              { value: "", label: "ترتیب" },
              { value: "quantity-asc", label: "مقدار(صعودي‌)" },
              { value: "quantity-desc", label: "مقدار(نزولی)" },
              { value: "price-asc", label: "قیمت(صعودي‌)" },
              { value: "price-desc", label: "قیمت(نزولی)" },
            ]}
          />
          <NavBarMenu routes={chartLabel} />
        </div>
      </div>
      <SalesTable />
      <Model>
        <div className="p-1">
          <Model.Open open={"purchaseForm"}>
            <Button
              variant="filled"
              color="white"
              className="bg-gray-400 darkModeSubimt buttonText text-gray-900"
            >
              فروش جدید
            </Button>
          </Model.Open>

          <Model.Window name={"purchaseForm"}>
            <SalesForm />
          </Model.Window>
        </div>
      </Model>
    </Card>
  );
}

export default Sales;
