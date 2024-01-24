import Express from "express";

import { countAllProduct } from "../controllers/dashboardController.js";
import { protectRoute } from "../controllers/authController.js";
const router = Express.Router();

router.use(protectRoute);
router.route("/").get(countAllProduct);

// router
//   .route("/:id")
//   .get(getOneCustomer)
//   .patch(updateCustomer)
//   .delete(deleteCustomer);
export default router;
