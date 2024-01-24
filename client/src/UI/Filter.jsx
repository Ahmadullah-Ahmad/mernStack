import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";
function Filter({ filterField, options }) {
  const [searchParmas, setSearchParams] = useSearchParams();
  const currentField = searchParmas.get(filterField) || options?.at(0).value;

  function handleClick(value) {
    // setSearchParams(filterField, value);
    searchParmas.set(filterField, value);
    if (searchParmas.get("page")) searchParmas.set("page", 1);
    setSearchParams(searchParmas);
  }
  return (
    <Tabs value={currentField} className="darkModeButtom">
      <TabsHeader className="bg-gray-50 darkModeButtom rounded-md shadow-none dark:opacity-80 w-auto">
        {options?.map((option) => (
          <Tab
            key={option.value}
            value={option.value}
            onClick={() => {
              handleClick(option.value);
            }}
            className="w-auto px-3  sm:text-lg rounded-md dark:text-gray-500  uppercase md:px-6 font-semibold dark:focus:text-black"
          >
            {option.label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

export default Filter;
