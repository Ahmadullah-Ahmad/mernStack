import { Card, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useChartDarkMode } from "../../hooks/chartDarkMode";
/* 
Dark Mode
fill: {
      colors: [
        "#4ecdc4",
        "#c7f464",
        "#81d4fa",
        "#fd6a6a",
        "#869ca7",
        "#22c55e",
      ],
    },
    */
function PieChart({ chartLabel, PieChartData }) {
  const { legendColor, fillColor } = useChartDarkMode();
  const option = {
    // fill: "#df00f",
    colors: fillColor.colors,
    legend: {
      horizontalAlign: "center",
      position: "right",
      containerMargin: { top: "20px" },
      width: "50%",
      floating: true,
      fontSize: "16px",
      labels: { ...legendColor },
    },
    grid: {
      padding: { right: true, left: true, top: true, bottom: true },
    },
    labels: chartLabel,
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    dataLabels: { enabled: true, style: { fontSize: "8px", padding: "4px" } },

    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
    },
    fill: { ...fillColor },
  };

  return (
    <Card className="bg-gray-100 darkModeMiddle dark:text-white">
      <Typography className="text-center py-3 uppercase text-xl font-semibold">
        مجموع تولیدات
      </Typography>
      <Chart type="donut" series={PieChartData} height={200} options={option} />
    </Card>
  );
}

export default PieChart;
