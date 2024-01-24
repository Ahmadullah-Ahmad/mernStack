import { Typography } from "@material-tailwind/react";
import Table from "../../UI/Table";
import ExtractRow from "./ExtractRow";
import Model from "../../UI/Model";
import HoneyForm from "./HoneyForm";
import Empty from "../../UI/Empty";
const HoneyHeader = ["نوع عسل", "مقدار", "تاریخ", ""].reverse();

function HoneyTable({ Extract, keepId }) {
  if (Extract.length === 0 && keepId) return <Empty data={"عسل"} />;

  return (
    <div className=" w-full ">
      <Model>
        <Typography className="text-center font-semibold uppercase">
          کشیدن عسل
        </Typography>
        <Table>
          <Table.Header>
            {HoneyHeader.map((el, index) => (
              <td className="py-3 darkModeMiddle" key={index}>
                <Typography
                  variant="small"
                  className={`font-semibold uppercase ${
                    index === 3 ? "pr-2" : ""
                  }`}
                >
                  {el}
                </Typography>
              </td>
            ))}
          </Table.Header>
          <Table.Body>
            {Extract?.map((el, index) => (
              <ExtractRow
                item={el}
                key={el.id}
                borderKey={index === Extract?.length - 1}
              />
            ))}
          </Table.Body>
        </Table>
        <Model.Window name={"editExract"}>
          <HoneyForm keepId={keepId} />
        </Model.Window>
      </Model>
    </div>
  );
}

export default HoneyTable;
