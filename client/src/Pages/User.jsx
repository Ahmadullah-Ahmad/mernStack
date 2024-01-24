import { Button, Card, Spinner } from "@material-tailwind/react";
import { Navigate } from "react-router-dom";
import { useUser } from "../features/Authentication/useUser";
import UserForm from "../features/User/UserForm";
import UserTable from "../features/User/UserTable";
import Model from "../UI/Model";
import { useBranchs } from "../features/User/useGetUsers";
import { HiArrowLeft } from "react-icons/hi2";
import { Back } from "../hooks/Back";
import Empty from "../UI/Empty";

function User() {
  const { user } = useUser();
  const { branches, isLoading } = useBranchs();
  const { goBack } = Back();
  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 absolute backdrop-blur-sm top-[50%] left-[50%] "
        color="blue"
      />
    );
  if (branches?.length === 0)
    return (
      <>
        <div className="float-left bottom-5">
          <HiArrowLeft
            size={30}
            onClick={() => goBack()}
            className="cursor-pointer  hover:text-blue-600"
          />
        </div>
        <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Empty data={"کارمندان"} />
          <div className="px-2 flex justify-center mt-4">
            <Model>
              <Model.Open open={"purchaseForm"}>
                <Button
                  variant="filled"
                  color="white"
                  className="bg-gray-400 text-gray-900 darkModeSubimt buttonText"
                >
                  استخدام کردن
                </Button>
              </Model.Open>

              <Model.Window name={"purchaseForm"}>
                <UserForm />
              </Model.Window>
            </Model>
          </div>
        </div>
      </>
    );
  return user?.role === "admin" ? (
    <Card className=" rounded-sm h-full darkModeTop bg-gray-300 p-2 shadow-none ">
      <UserTable />
      <div className="pr-4">
        <Model>
          <Model.Open open={"userWindow"}>
            <Button
              variant="filled"
              color="white"
              className="bg-gray-400 darkModeSubimt buttonText text-gray-900"
            >
              استخدام کردن
            </Button>
          </Model.Open>
          <Model.Window name={"userWindow"}>
            <UserForm />
          </Model.Window>
        </Model>
      </div>
    </Card>
  ) : (
    <Navigate to={"/home"} />
  );
}

export default User;
