import { Card, Typography } from "@material-tailwind/react";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import Chart from "react-apexcharts";

import { useChartDarkMode } from "../../hooks/chartDarkMode";
// import chartConfig from "../../utils/chartConfig";
const chartsConfig = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: "#ffffff40",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 15,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "light",
    style: { fontSize: "17px" },
  },
};

function LineChart({ sale, purchase, numberDays }) {
  const { legendColor, style } = useChartDarkMode();
  //specifying days
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numberDays),
    end: new Date(),
  });
  //Line Chart label
  const label = allDates.map((date) => {
    return format(date, "MMM dd");
  });

  //All sales for line Chart
  const saleData = allDates.map((date) => {
    return sale
      ?.filter((sale) => isSameDay(date, new Date(sale.createdAt)))
      ?.reduce((pre, cur) => pre + cur?.price, 0);
  });

  //All purchase for line Chart
  const purchaseData = allDates.map((date) => {
    return purchase
      ?.filter((purchase) => isSameDay(date, new Date(purchase.createdAt)))
      ?.reduce((pre, cur) => pre + cur?.price, 0);
  });

  const websiteViewsChart = {
    type: "area",
    height: 220,
    series: [
      {
        name: "فروشات",
        data: saleData,
      },
      {
        name: "خریداری",
        data: purchaseData,
      },
    ],
    colors: ["#4d41372b", "#713c71"],
    options: {
      ...chartsConfig,
      color: "#f1c92b",
      plotOptions: {
        bar: {
          columnWidth: "5%",
          borderRadius: 5,
        },
      },
      xaxis: {
        categories: label,
        labels: { ...style },
      },
      yaxis: {
        labels: { ...style },
      },
      legend: { labels: { ...legendColor } },
    },
  };
  return (
    <Card className="bg-gray-100 darkModeMiddle dark:text-white">
      <Typography className="text-center py-2 uppercase text-xl font-semibold">
        <span className="font-normal">
          {format(allDates.at(0), "MMM dd yyyy")}
        </span>{" "}
        تا{" "}
        <span className="font-medium">
          {format(allDates.at(-1), "MMM dd yyyy")}{" "}
        </span>
        فروشات از
      </Typography>
      <Chart {...websiteViewsChart} />
    </Card>
  );
}

export default LineChart;
// sales from {format(allDates.at(0), "MMM dd yyyy")} to{" "}
// {format(allDates.at(-1), "MMM dd yyyy")}
