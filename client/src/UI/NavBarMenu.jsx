import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import { HiChevronDown } from "react-icons/hi2";
import { useSideBar } from "../Context/SideBar";
import useSetParams from "../hooks/useSetParams";

function MenuItemApp({ routes }) {
  const { setParams } = useSetParams();

  const {
    productState: { product },
    productDispatch,
  } = useSideBar();
  return (
    <div className="w-32 ">
      <Menu placement="bottom" className="">
        <MenuHandler>
          <Card className="flex cursor-pointer flex-row items-center justify-between rounded-md darkModeMiddle bg-gray-200 py-1 px-2 shadow-sm">
            <Typography className="text-sm uppercase md:text-base font-semibold">
              {product}
            </Typography>
            <HiChevronDown size={30} className="px-1" />
          </Card>
        </MenuHandler>
        <MenuList className="darkModeTop">
          {routes.map((el) => (
            <MenuItem
              key={el}
              onClick={() => {
                productDispatch({ type: el });
                setParams("type", el === "همه" ? "" : el);
              }}
            >
              <Typography className="uppercase font-semibold"> {el}</Typography>
            </MenuItem>
          ))}
          {/* {routes.map((el) => (
            <MenuItem
              key={el.url}
              onClick={() => {
                productDispatch({ type: el.url });
                setParams("type", el.url);
              }}
            >
              <Typography className="uppercase font-semibold">
                {" "}
                {el.text}
              </Typography>
            </MenuItem>
          ))} */}
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuItemApp;
