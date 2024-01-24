import productModel from "./models/product.js";
import sequelize from "./utils/Database.js";
import app from "./app.js";
import dotenv from "dotenv";

import {
  addBranchPash,
  addProductPash,
  addUsersPash,
  addBeeSavePash,
  addCustomersPash,
  addFoodPash,
  addSpendDataPash,
  addPurchasePash,
  addHoneyExtract,
  addSale,
} from "./utils/AddData.js";

dotenv.config({ path: "./.env" });

// addBranchPash();
// addProductPash();
// addUsersPash();
// addBeeSavePash();
// addCustomersPash();
// addFoodPash();
// addSpendDataPash();
// addHoneyExtract();
// addPurchasePash();
// addSale();
const port = process.env.PORT || 3001;

sequelize
  // .sync({ alter: true })
  // .sync({ force: true })
  .sync()
  .then((data) => {
    app.listen(port, () => console.log("the app is listening to ", port));
  })
  .catch((err) => console.log(err));
