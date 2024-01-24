import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import FoodRow from "./FoodRow";
import Model from "../../UI/Model";
import FoodForm from "./FoodForm";

import Empty from "../../UI/Empty";
const FoodHeader = ["نام", "مقدار", "قیمت", "تاریخ", ""].reverse();

function FoodTable({ Food, keepId }) {
  if (Food.length === 0 && keepId) return <Empty data={"غذا"} />;
  return (
    <div className=" w-full">
      <Model>
        <Typography className="text-center font-semibold text-lg uppercase">
          غذا دادن به زنبور
        </Typography>
        <Table>
          <Table.Header>
            {FoodHeader.map((el, index) => (
              <td className="py-2 darkModeMiddle" key={index}>
                <Typography
                  variant="small"
                  className={`font-semibold text-lg uppercase ${
                    index === 4 ? "pr-2" : ""
                  }`}
                >
                  {el}
                </Typography>
              </td>
            ))}
          </Table.Header>
          <Table.Body>
            {Food?.map((el, index) => (
              <FoodRow
                item={el}
                key={el.id}
                keepId={keepId}
                borderKey={index === Food.length - 1}
              />
            ))}
          </Table.Body>
        </Table>
        <Model.Window name={"editFood"}>
          <FoodForm keepId={keepId} />
        </Model.Window>
      </Model>
    </div>
  );
}

export default FoodTable;
