import { Card, Typography } from "@material-tailwind/react";
import DashboardLayout from "../features/Dashboard/DashboardLayout";
import Filter from "../UI/Filter";

function Dashboard() {
  return (
    <Card className="h-full darkModeTop rounded-sm bg-gray-300  grid grid-rows-[auto_1fr]">
      <div className="flex  rounded-sm  justify-between items-center">
        <Filter
          filterField={"last"}
          options={[
            { value: 7, label: "هفت روز" },
            { value: 30, label: "سی روز" },
            { value: 90, label: "نود روز" },
          ]}
        />
      </div>
      <DashboardLayout />
    </Card>
  );
}

export default Dashboard;
