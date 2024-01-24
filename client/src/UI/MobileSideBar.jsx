import { createPortal } from "react-dom";
import { Card, Drawer, Typography } from "@material-tailwind/react";
import { route } from "./routes";
import Logo from "./Logo";
import RouterLink from "./RouterLink";
import { useUser } from "../features/Authentication/useUser";
import { useNavigate } from "react-router-dom";
import {
  HiArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { useLogOut } from "../features/Authentication/useLogOut";
import { useDarkMode } from "../Context/DarkModeContext";

function MobileSideBar({ open = false, close }) {
  const navigate = useNavigate();
  const { toggleDark, isDark } = useDarkMode();
  const { logOut } = useLogOut();
  const { user } = useUser();
  const filterRouter =
    user.role === "admin"
      ? route
      : route.filter((el) => el.path !== "branch" && el.path !== "users");
  return createPortal(
    <Drawer open={open} size={200} onClose={close} placement="right">
      <Card className=" z-[999] grid  grid-rows-[auto_auto_auto] transform transition-all duration-1000 h-full flex-col  rounded-sm bg-gray-300 darkModeMiddle">
        <div className="flex  flex-col items-center">
          <div className="absolute top-2 left-3">
            {isDark ? (
              <HiOutlineMoon
                className="cursor-pointer"
                size={20}
                onClick={() => toggleDark()}
              />
            ) : (
              <HiOutlineSun
                className="cursor-pointer"
                size={20}
                onClick={() => toggleDark()}
              />
            )}
          </div>
          <div
            onClick={() => {
              navigate("/home");
              close();
            }}
          >
            <Logo classNames={"rounded-full"} to="dashboard/home" />
          </div>
          <Typography className="pt-3">App Name</Typography>
        </div>
        <div className="px-1">
          <RouterLink route={filterRouter} close={close} />
        </div>
        <div
          className="my-1 w-full rounded-lg hover:bg-gray-400 dark:text-white hover:text-gray-50 flex items-center justify-start py-2 px-3  text-center capitalize"
          onClick={() => {
            navigate("/login");
            logOut();
            close();
          }}
        >
          <span className="mr-3 px-1">
            <HiArrowRightOnRectangle size={30} />
          </span>

          <Typography className="capitalize">Log Out</Typography>
        </div>
      </Card>
    </Drawer>,
    document.body
  );
}

export default MobileSideBar;

/*<Card className="fixed top-0 right-0  h-full w-[10rem] rounded-sm bg-gray-200 md:hidden">
      <Card className=" z-[999] flex transform transition-all duration-1000 h-full flex-col divide-y-2 divide-gray-500 rounded-sm bg-gray-200">
        <div className="flex  flex-col items-center  py-4">
          <Logo classNames={"rounded-full"} to="dashboard/home" />
          <Typography className="pt-3">App Name</Typography>
        </div>
        <div className="p-1">
          <RouterLink route={route} close={close} />
        </div>
      </Card>
    </Card>
    */
