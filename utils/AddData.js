// Mdodels
import productModel from "../models/product.js";
import branchModel from "../models/branch.js";
import userModel from "../models/user.js";
import expendModel from "../models/expenditurs.js";
import customerModel from "../models/customer.js";
import saveBeeModel from "../models/beeSave.js";
import foodModel from "../models/food.js";
import honeyExtractionModel from "../models/honeyExtract.js";
import purchaseModel from "../models/purchase.js";
import salesModel from "../models/sales.js";
// Data
import { englishBranch, pashtoBranch } from "../public/data/branchData.js";
import { englishProduct, pashtoProduct } from "../public/data/productData.js";
import { englishUsers, pashtoUsers } from "../public/data/userData.js";
import { englishSpend, pashtoSpend } from "../public/data/spendData.js";
import {
  pashtoCustomer,
  englishCustomer,
} from "../public/data/customerData.js";
import { pashtoBee, englishBee } from "../public/data/beeSaveData.js";
import { englishFood, pashtoFood } from "../public/data/foodData.js";
import honeyExtrachData from "../public/data/honeyExtrachData.js";
import {
  englishPurchase,
  pashtoPurchase,
} from "../public/data/purchaseData.js";
import salesData from "../public/data/salesData.js";

//English
export function addProductEng() {
  englishProduct.map((el) => productModel.create(el));
}

export function addBranchEng() {
  englishBranch.map((el) => branchModel.create(el));
}

export function addUsersEng() {
  englishUsers.map((el) => userModel.create(el));
}

export function addSpendDataEng() {
  englishSpend.map((el) => expendModel.create(el));
}

export function addCustomersEng() {
  englishCustomer.map((el) => customerModel.create(el));
}

export function addBeeSaveEng() {
  englishBee.map((el) => saveBeeModel.create(el));
}

export function addFoodEng() {
  englishFood.map((el) => foodModel.create(el));
}
export function addPurchaseEng() {
  englishPurchase.map((el) => purchaseModel.create(el));
}

//Pashto
export function addProductPash() {
  pashtoProduct.map((el) => productModel.create(el));
}

export function addBranchPash() {
  pashtoBranch.map((el) => branchModel.create(el));
}

export function addUsersPash() {
  pashtoUsers.map((el) => userModel.create(el));
}

export function addSpendDataPash() {
  pashtoSpend.map((el) => expendModel.create(el));
}

export function addCustomersPash() {
  pashtoCustomer.map((el) => customerModel.create(el));
}

export function addBeeSavePash() {
  pashtoBee.map((el) => saveBeeModel.create(el));
}

export function addFoodPash() {
  pashtoFood.map((el) => foodModel.create(el));
}
export function addPurchasePash() {
  pashtoPurchase.map((el) => purchaseModel.create(el));
}

//common
export function addHoneyExtract() {
  honeyExtrachData.map((el) => honeyExtractionModel.create(el));
}
export function addSale() {
  salesData.map((el) => salesModel.create(el));
}
