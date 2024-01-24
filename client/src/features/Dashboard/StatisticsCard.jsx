import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function StatisticsCard({ color, icon, title, value }) {
  return (
    <Card className="shadow-sm flex flex-row md:w-full w-[15rem] justify-center lg:justify-end gap-2 bg-gray-50 darkModeMiddle dark:text-white  flex-wrap md:p-5  p-1">
      <div className="px-2">
        <Typography
          className="uppercase text-center text-2xl font-semibold text-gray-500"
          variant="paragraph"
        >
          {title}
        </Typography>
        <Typography className="font-[500]" dir="rtl">
          {value}
        </Typography>
      </div>
      <div
        className={
          ` flex  justify-center items-center rounded-md h-[3.2rem] w-[3.2rem] ` +
          color
        }
      >
        {icon}
      </div>
    </Card>
  );
}
