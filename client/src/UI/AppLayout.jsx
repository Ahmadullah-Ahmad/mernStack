import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import { useUser } from "../features/Authentication/useUser";
import Header from "./Header";

function AppLayout() {
  const { user } = useUser();
  return (
    <Card className="min-h-screen rounded-none darkModeTop">
      {/* min-h-[calc(100dvh-88.5dvh)] */}
      <div className=" dark:text-white  shadow-md w-full">
        <Header
          logo={"/image/logo.jpg"}
          urls={
            user && user.role
              ? [
                  { path: "درباره", url: "/about" },
                  { path: "تماس", url: "/contact" },
                  { path: "معاملات", url: "/dashboard/home" },
                  { path: "صفحه اصلی", url: "/home" },
                ]
              : [
                  { path: "درباره", url: "/about" },
                  { path: "تماس", url: "/contact" },
                  { path: "صفحه اصلی", url: "/home" },
                ]
          }
          auth={{ path: "داخل شدن", url: "/login" }}
        />
      </div>
      {/* min-h-[calc(100dvh-20.5dvh)] { path: "dashboard", url: "/dashboard/home" },*/}
      <CardBody className=" bg-gray-100 p-0">
        <Outlet />
      </CardBody>
      {/* <CardFooter className="h-[calc(100dvh-91dvh)] darkModeMiddle bg-gray-100">
        Footer
      </CardFooter> */}
    </Card>
  );
}

export default AppLayout;
