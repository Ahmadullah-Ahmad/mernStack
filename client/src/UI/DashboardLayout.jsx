import { Card } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideBar from "./SideBar";

function DashboardLayout() {
  return (
    <>
      <Card className=" grid min-h-screen grid-rows-1 divide-blue-gray-50 bg-gray-50 md:grid md:grid-cols-[1fr_0.16fr]  dark:bg-blue-gray-700 dark:divide-none">
        <div className="grid h-full grid-rows-[auto_1fr]  darkModeTop ">
          <div>
            <Header
              urls={[
                { path: "درباره", url: "/about" },
                { path: "تماس", url: "/contact" },
                { path: "صفحه اصلی", url: "/home" },
              ]}
              auth={{ url: "/login" }}
            />
          </div>

          <div className=" bg-gray-300 darkModeTop">
            <Outlet />
          </div>
        </div>

        <div className="hidden md:block dark:bg-blue-gray-700">
          <SideBar />
        </div>
      </Card>
    </>
  );
}

export default DashboardLayout;
