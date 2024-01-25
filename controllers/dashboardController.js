import { Op, Sequelize } from "sequelize";
import catchAsynC from "../utils/catchAsynC.js";

export const countAllProduct = catchAsynC(async (req, res, next) => {
  const product = await req.branch.getProduct({
    attributes: ["id", "name", "quantity", "type"],
  });
  const boxes = await req.branch.getBeeSave({
    attributes: ["id", "boxes", "branchId"],
  });
  const purchase = await req.branch.getPurchase({
    where: { productId: { [Op.not]: null } },
    attributes: ["id", "price", "quantity", "createdAt"],
  });
  const sales = await req.branch.getSales({
    where: { productId: { [Op.not]: null } },
    attributes: ["id", "createdAt", "quantity", "discount", "price"],
  });

  res.status(200).json({
    status: "success",
    product,
    purchase,
    boxes,
    sales,
  });
});
