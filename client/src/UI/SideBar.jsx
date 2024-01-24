import { Card, Typography } from "@material-tailwind/react";
import { useUser } from "../features/Authentication/useUser";
import Logo from "./Logo";
import MobileSideBar from "./MobileSideBar";
import RouterLink from "./RouterLink";
import { route } from "./routes";
function SideBar() {
  const { user } = useUser();
  const filterRouter =
    user?.role === "admin"
      ? route
      : route.filter((el) => el.path !== "branch" && el.path !== "users");
  return (
    <>
      <Card className=" grid h-full grid-rows-[auto_1fr] rounded-sm shadow-none darkModeMiddle bg-gray-50">
        <div className="flex h-24 items-center justify-center p-3 shadow-sm">
          <div className="flex flex-col text-center dark:text-white">
            <Logo
              logo={"/image/logo.jpg"}
              size="lg"
              classNames={"rounded-full"}
            />

            <Typography>نام شرکت</Typography>
          </div>
        </div>
        <div className="p-1 ">
          <RouterLink route={filterRouter} />
        </div>
      </Card>
      <MobileSideBar />
    </>
  );
}

export default SideBar;
