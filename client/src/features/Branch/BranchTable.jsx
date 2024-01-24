import { Spinner, Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import { BranchData } from "../../data/myAppData/Data";
import BranchRow from "./BranchRow";
// import { useBranchs } from "./useGetBranches";
import Pagination from "../../UI/Pagination";
import { useSearchParams } from "react-router-dom";
import { useBranchs } from "./useGetBranches";
import Model from "../../UI/Model";
import BranchForm from "./BranchForm";

const header = [
  "نام نمائنده گی",
  "ادرس",
  "شماره",
  "مجموعه سرمايه",
  "تاسیس",
  "",
].reverse();

function BranchTable({ title }) {
  const { branches, count, isLoading } = useBranchs();
  const [searchParams, setSearchParams] = useSearchParams();

  if (branches?.length === 0) {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  if (isLoading)
    return (
      <Spinner
        className="h-16 w-16 fixed  translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] "
        color="blue"
      />
    );
  return (
    <div className="rounded-sm darkModeTop bg-gray-300 p-1">
      <Model>
        <Table>
          <Table.Header>
            {header.map((el, index) => (
              <td key={index} className={`py-2 darkModeMiddle`}>
                <Typography
                  variant="small"
                  className={`font-semibold text-lg uppercase ${
                    index === 5 ? "pr-2 " : ""
                  } `}
                >
                  {el}
                </Typography>
              </td>
            ))}
          </Table.Header>
          <Table.Body>
            {branches?.map((el, index) => (
              <BranchRow
                item={el}
                key={el.id}
                borderKey={index === branches.length - 1}
              />
            ))}
          </Table.Body>

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
        <Model.Window name={"branchEdit"}>
          <BranchForm />
        </Model.Window>
      </Model>
    </div>
  );
}

export default BranchTable;
