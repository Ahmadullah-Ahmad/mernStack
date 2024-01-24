import { format } from "date-fns";

export const sales = [
  {
    product: "A-300",
    customer: "Khalid",
    phone: "079873453",
    discount: 0,
    price: 550,
    productQuantiy: 5,
    sellType: "cash",
  },
  {
    product: "A-100",
    customer: "Walid",
    phone: "073873453",
    discount: 2,
    price: 450,
    productQuantiy: 3,
    sellType: "cash",
  },
  {
    product: "A-200",
    customer: "Khan",
    phone: "072873453",
    discount: 2,
    price: 650,
    productQuantiy: 4,
    sellType: "cash",
  },
  {
    product: "A-400",
    customer: "Ahmad",
    phone: "074873453",
    discount: 2,
    price: 650,
    productQuantiy: 4,
    sellType: "cash",
  },
  {
    product: "A-500",
    customer: "Ahmad",
    phone: "074873453",
    discount: 2,
    price: 650,
    productQuantiy: 4,
    sellType: "cash",
  },
];

export function add(data) {
  sales.push(data);
}

export const category = [
  {
    name: "first",
    type: "A-33",
    price: 300,
    quantity: 34,
  },
  {
    name: "second",
    type: "B-33",
    price: 200,
    quantity: 34,
  },
  {
    name: "third",
    type: "C-33",
    price: 400,
    quantity: 34,
  },
  {
    name: "forth",
    type: "D-33",
    price: 500,
    quantity: 34,
  },
  {
    name: "Fifth",
    type: "D-33",
    price: 500,
    quantity: 34,
  },
];

export const AddCategory = (data) => {
  category.push(data);
};

// "seller",
//   "phone",
//   "location",
//   "name",
//   "qunatity",
//   "price",
//   "pay",
//   "total",

export const purchase = [
  {
    id: 1,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
  {
    id: 2,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
  {
    id: 3,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
  {
    id: 4,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
  {
    id: 5,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
  {
    id: 6,
    seller: "Khan wali",
    phone: "078345345",
    location: "Kabul",
    name: "Computer",
    quantity: 5,
    price: 4500,
    pay: "cash",
  },
];

// ["expend name", "Withdraw By", "amount", "date", ""]
export const Expend = [
  {
    id: 1,
    name: "Get computer",
    withdrawBy: "Ahmadullah",
    amount: 3000,
    date: format(Date.now(), "yyyy-dd-M"),
  },
  {
    id: 2,
    name: "Washing machine",
    withdrawBy: "Waliullah",
    amount: 3500,
    date: format(Date.now(), "yyyy-dd-M"),
  },
  {
    id: 3,
    name: "Home",
    withdrawBy: "Asadullah",
    amount: 2000,
    date: format(Date.now(), "yyyy-dd-M"),
  },
];

// "", "name", "role", "branch", "location", "hired", ""
export const BranchData = [
  {
    id: 1,
    name: "Branch one",
    location: "kabul",
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: "Branch two",
    location: "Ghazni",
    createdAt: Date.now(),
  },
  {
    id: 3,
    name: "Branch three",
    location: "Waradak",
    createdAt: Date.now(),
  },
];
// "guardian","boxes","Food","Growth","honey","Location","rent","total","date",
export const KeepData = [
  {
    id: 1,
    guardian: "Khan",
    box: 3,
    food: 400,
    growth: 3,
    honey: 4,
    location: "kabul",
    rent: 300,
  },
  {
    id: 2,
    guardian: "Khan wali",
    box: 2,
    food: 300,
    growth: 2,
    honey: 3,
    location: "kabul",
    rent: 200,
  },
  {
    id: 3,
    guardian: "M.Hamid",
    box: 4,
    food: 100,
    growth: 5,
    honey: 6,
    location: "kabul",
    rent: 600,
  },
];
