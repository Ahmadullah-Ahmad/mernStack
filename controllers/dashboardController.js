import { Op, Sequelize } from "sequelize";
import catchAsynC from "../utils/catchAsynC.js";
import Product from "../models/product.js";

export const countAllProduct = catchAsynC(async (req, res, next) => {
  const startDate = req.query.start;
  const endDate = req.query.end;

  const where = {};
  where.createdAt = {
    [Op.between]: [startDate, endDate],
  };
  const product = await req.branch.getProduct({
    attributes: ["id", "name", "quantity", "type"],
  });
  const boxes = await req.branch.getBeeSave({
    attributes: ["id", "boxes"],
  });
  const purchase = await req.branch.getPurchase({
    attributes: ["id", "price", "createdAt"],
  });
  const sales = await req.branch.getSales({
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
