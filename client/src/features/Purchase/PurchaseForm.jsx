import {
  Button,
  Card,
  Input,
  Checkbox,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAddPurchase } from "./useCreatePurchase";
import { useEditPurchase } from "./useEditPurchase";
import { useState } from "react";

function PurchaseForm({ close, formData: purchase = {} }) {
  const { id: editId, ...editValue } = purchase;
  const isEidtSession = Boolean(editId);

  const { register, formState, handleSubmit } = useForm({
    defaultValues: isEidtSession ? editValue : {},
  });
  const { errors } = formState;

  const { addNewPurchase, isAdding } = useAddPurchase();
  const { EditPurchase, isEditting } = useEditPurchase();
  const queryClient = useQueryClient();

  const [hideDeadline, setHideDeadline] = useState(
    isEidtSession ? editValue.pay : false
  );
  function handleFormSubmit(data) {
    if (isEidtSession) {
      data.id = editId;
      EditPurchase(
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
            close?.();
          },
        }
      );
    } else {
      addNewPurchase(
        { purchase: data },
        {
          onSuccess: () => {
            toast.success("این جنس بطوری موفقانه تعغیر شد");
            queryClient.invalidateQueries({ active: true });
            close?.();
          },
          onError: (error) => {
            toast.success(error.message);
            close?.();
          },
        }
      );
    }
  }

  // price,quantity,location,pay,productName,productType,customerName,phone,
  return (
    <Card className="w-full items-center p-4 darkModeMiddle shadow-none sm:w-[20rem] md:w-[35rem]">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="h-full md:w-[60%]"
      >
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            className="dark:text-white"
            label="نام مشتری"
            {...register("customerName", {
              required: "The Seller name is required",
            })}
            error={errors?.customerName ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            className="dark:text-white"
            label="شماره مشتری"
            {...register("phone")}
            error={errors?.phone ? true : false}
          />
        </div>

        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            className="dark:text-white"
            type="text"
            label="ادرس مشتری"
            {...register("location", {
              required: "The location name is required",
            })}
            error={errors?.location ? true : false}
          />
        </div>

        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            className="dark:text-white"
            label="نام جنس"
            {...register("productName", {
              required: "The material name is required",
            })}
            error={errors?.productName ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="text"
            className="dark:text-white"
            label="نوع جنس"
            {...register("productType", {
              required: "The Type type is required",
            })}
            error={errors?.productType ? true : false}
          />
        </div>
        <div className="py-2">
          <Input
            dir="rtl"
            color="light-blue"
            type="number"
            className="dark:text-white"
            label="مقدار جنس"
            min={0}
            {...register("quantity", {
              required: "The quantity is required",
              valueAsNumber: "Only number",
            })}
            error={errors?.quantity ? true : false}
          />
        </div>

        <div className="pt-2 ">
          <Input
            dir="rtl"
            color="light-blue"
            type="number"
            className="dark:text-white"
            label="قیمت جنس"
            min={0}
            {...register("price", {
              required: "The Material count is required",
            })}
            error={errors?.price ? true : false}
          />
          {errors?.root?.message}
        </div>

        <div className=" flex relative justify-end">
          <Checkbox
            label={
              <Typography className="absolute top-2 right-10 dark:text-white items-center text-lg">
                تادیه
              </Typography>
            }
            className="dark:text-white "
            value={true}
            {...register("pay")}
            color="blue"
            onClick={() => setHideDeadline((el) => !el)}
          />
        </div>
        {hideDeadline ? null : (
          <>
            <div className="mb-3">
              <Input
                type="date"
                {...register("deadline")}
                label="تاریخ پرداخت قرضه"
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-end">
          <div className="px-3">
            <Button
              type="reset"
              variant="outlined"
              color="light-blue"
              onClick={() => {
                close();
              }}
              className="darkModeCancel font-semibold"
            >
              لغو کردن
            </Button>
          </div>
          <Button
            type="submit"
            variant="filled"
            color="blue"
            className="darkModeSubmit font-semibold"
          >
            {isAdding || isEditting ? <Spinner /> : "ثبت کردن"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default PurchaseForm;
