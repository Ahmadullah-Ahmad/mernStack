import { Spinner, Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import Model from "../../UI/Model";
import BranchRow from "./UserRow";
import UserForm from "./UserForm";
import { useBranchs } from "./useGetUsers";
import Pagination from "../../UI/Pagination";

const header = [
  "",
  "نام",
  "وظیفه",
  "استخدام",
  "نماینده گی",
  "ادرس",
  " ",
].reverse();

function BranchTable() {
  const { branches, count } = useBranchs();

  return (
    <div className="rounded-sm darkModeTop bg-gray-300 p-1">
      <Model>
        <Table>
          <Table.Header>
            {header.map((el, index) => (
              <td key={index} className={`py-2  darkModeMiddle `}>
                <Typography
                  variant="small"
                  className={`font-semibold text-lg uppercase ${
                    index === 0 ? "pl-2 darkModeMiddle" : ""
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
            <Pagination count={count} pageSize={6} />
          </Table.Footer>
        </Table>
        <Model.Window name={"userEdit"}>
          <UserForm />
        </Model.Window>
      </Model>
    </div>
  );
}

export default BranchTable;
