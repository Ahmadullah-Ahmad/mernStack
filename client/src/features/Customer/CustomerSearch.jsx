import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function CustomerSearch() {
  const { register, reset, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  function handlSearch(data) {
    console.log(data);
    searchParams.set("search", data.name);
    setSearchParams(searchParams);
    reset();
  }
  return (
    <form
      className="md:flex items-center justify-end darkModeTop hidden bg-gray-300 gap-4 py-1 pr-3"
      onSubmit={handleSubmit(handlSearch)}
    >
      <div>
        <Input
          type="text"
          color="blue"
          label="جستجو با نام مشتری"
          {...register("name", { required: true })}
        />
      </div>
      <div className="pl-5">
        <Button
          size="md"
          color="blue-gray"
          variant="filled"
          type="submit"
          className="py-1 text-lg"
        >
          جستجو
        </Button>
      </div>
    </form>
  );
}

export default CustomerSearch;
