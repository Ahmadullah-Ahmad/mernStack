import { Back } from "../hooks/Back";
import { Button, Typography } from "@material-tailwind/react";

function Empty({ data }) {
  return (
    <>
      <div className=" darkModeTop flex-col bg-inherit flex items-center justify-center mt-16">
        <Typography className="uppercase darkModeTop font-normal text-3xl text-gray-800">
          {" "}
          {/* The {data} data is not found{" "} */}
          معلومات درباره یی <span className="text-blue-500">{data}</span> یافته
          نشد
        </Typography>
      </div>
    </>
  );
}

export default Empty;
