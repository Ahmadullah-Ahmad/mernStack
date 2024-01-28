import {
  Card,
  Input,
  Checkbox,
  Button,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAddSells } from "./useCreateSale";
import { useEditSales } from "./useEditSale";
function HoneyForm({ close, formData: sales = {} }) {
  const { id: editId, ...editValue } = sales;
  const isEidtSession = Boolean(editId);
  const { register, formState, handleSubmit } = useForm({
    defaultValues: isEidtSession ? editValue : {},
  });
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { addNewSell, isAdding } = useAddSells();
  const { EditSales, isEditting } = useEditSales();
  function handleFormSubmit(data) {
    if (isEidtSession) {
      data.id = editId;
      EditSales(
        { data },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ active: true });
            close?.();
            toast.success("این جنس بطوری موفقانه تعغیر شد");
          },
          onError: (err) => {
            toast.error(err.message);
            console.log(err.message);
          },
        }
      );
    } else {
      data.price = data.price - (data.price * data.discount) / 100;
      addNewSell(
        { sells: data },
        {
          onSuccess: () => {
            toast.success("این جنس بطوری موفقانه اضافه شد");
            queryClient.invalidateQueries({ active: true });
            close?.();
          },
        }
      );
      close();
    }
  }
  // discount, quantity, pay, customerName, phone, product;
  return (
    <Card className="w-full items-center p-4 darkModeMiddle shadow-none sm:w-[20rem] md:w-[35rem]">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="h-full md:w-[60%]"
      >
        <div className="items-center md:flex ">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            label="نام جنس"
            className="dark:text-white "
            {...register("product", {
              required: "The product name is required",
            })}
            error={errors?.product ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="number"
            className="dark:text-white "
            label="قیمت جنس"
            {...register("price", {
              required: "The product name is required",
            })}
            error={errors?.price ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            className="dark:text-white "
            type="number"
            label="تخفیف"
            {...register("discount", {
              required: "The product discount is required",
              valueAsNumber: "Only number",
            })}
            error={errors?.discount ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            label="نام مشتری"
            className="dark:text-white "
            {...register("customerName", {
              required: "The product name is required",
            })}
            error={errors?.customerName ? true : false}
          />
        </div>

        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            className="dark:text-white "
            label="شماره مشتری"
            {...register("phone")}
            error={errors?.phone ? true : false}
          />
        </div>

        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="number"
            className="dark:text-white "
            label="مقدار جنس"
            {...register("quantity", {
              required: "The product count is required",
              valueAsNumber: "Only number",
            })}
            error={errors?.quantity ? true : false}
          />
        </div>

        <div className="py-2 flex relative justify-end">
          <Checkbox
            label={
              <Typography className="absolute top-4 dark:text-white right-10 items-center text-lg">
                تادیه
              </Typography>
            }
            className="dark:text-white "
            value={true}
            {...register("pay")}
            color="blue"
            dir="rtl"
          />
        </div>
        <div className="flex items-center justify-end">
          <div className="px-3">
            <Button
              type="reset"
              variant="outlined"
              onClick={() => {
                close();
              }}
              color="blue"
              className="darkModeCancel font-semibold"
            >
              لغو کردن
            </Button>
          </div>
          <Button
            type="submit"
            className="darkModeSubmit font-semibold"
            color="blue"
          >
            {isAdding || isEditting ? <Spinner /> : "ثبت کردن"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default HoneyForm;
