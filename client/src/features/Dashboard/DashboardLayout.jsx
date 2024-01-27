import { Card, Spinner } from "@material-tailwind/react";
import Stats from "./Stats";

import LineChart from "./LineCharts";
import PieChart from "./PieChart.jsx";
import { useDashboardData } from "./useGetDashboard.js";
import Empty from "../../UI/Empty.jsx";
function DashboardLayout() {
  const { data, isLoading = true, numberDays } = useDashboardData();

  // PiChart label
  let chartLabel = [];
  data?.product?.filter((el) => {
    if (!chartLabel.includes(el.type.toUpperCase())) {
      return chartLabel.push(el.type.toUpperCase());
    }
    return el;
  });

  // Pi chart Data
  const PieChartData = chartLabel.map((el) =>
    data?.product
      ?.filter((product) => product.type.toUpperCase() === el)
      ?.reduce((pre, cur) => pre + cur.quantity, 0)
  );

  //total sales
  const totalSale = data?.sales?.reduce(
    (pre, cur) =>
      pre + (cur?.price - (cur?.price * cur?.discount) / 100) * cur.quantity,
    0
  );
  // total honey
  const totalHoney = data?.product
    ?.filter((el) => el?.type === "شهت" || el?.type === "عسل")
    ?.reduce((pre, cur) => pre + cur?.quantity, 0);

  // total boxes
  const boxes = data?.boxes?.reduce((pre, cur) => pre + cur?.boxes, 0);

  // total purchase
  const totalPurchase = data?.purchase?.reduce(
    (pre, cur) => pre + cur?.price * cur?.quantity,
    0
  );

  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 absolute backdrop-blur-sm top-[50%] left-[50%] "
        color="blue"
      />
    );
  if (!data) return <Empty />;
  //top level bg-[#111827]//middle level bg-[#1f2937] / buttom level dark:bg-[#374151]
  return (
    <Card className="bg-inherit rounded-none gap-y-12 py-4 darkModeTop  grid-rows-[auto_1fr]">
      <Stats
        sale={totalSale}
        totalHoney={totalHoney}
        boxes={boxes}
        totalPurchase={totalPurchase}
      />
      <div className=" grid lg:grid-cols-[1fr_0.9fr] grid-rows-[auto_auto] px-2 gap-3">
        <div>
          <LineChart
            numberDays={numberDays}
            sale={data?.sales}
            purchase={data?.purchase}
          />
        </div>
        <PieChart chartLabel={chartLabel} PieChartData={PieChartData} />
      </div>
    </Card>
  );
}

export default DashboardLayout;
