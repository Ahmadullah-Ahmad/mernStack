import { Card, Typography } from "@material-tailwind/react";

export function DetailsCard({ title, value }) {
  return (
    <Card className="w-full p-5 my-1 flex flex-row darkModeButtom justify-center gap-x-8 shadow-none  mx-3 bg-gray-50 md:p-5  ">
      <Typography
        className="uppercase text-center font-normal darkModeButtom text-gray-800"
        variant="paragraph"
      >
        {title} :
      </Typography>
      <Typography
        className="uppercase text-center font-normal darkModeButtom text-gray-800"
        variant="paragraph"
      >
        {value}
      </Typography>
    </Card>
  );
}
