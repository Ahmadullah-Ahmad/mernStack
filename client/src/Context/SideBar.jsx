import { createContext, useContext, useReducer } from "react";

const productInitialState = { product: "همه" };

function productReducer(state, action) {
  switch (action.type) {
    case "":
      return { ...state, product: "همه" };
    case action.type:
      return { ...state, product: action.type };
    // case "مچی":
    //   return { ...state, product: "مچی" };
    // case "خرما":
    //   return { ...state, product: "خرما" };
    // case "بوتل":
    //   return { ...state, product: "بوتل" };
    // case "ګورده":
    //   return { ...state, product: "ګورده" };
    // case "معجون":
    //   return { ...state, product: "معجون" };
    default:
      new Error("No type found");
  }
}

const SaleInitialState = { sale: "ALL" };

function saleReducer(state, action) {
  switch (action.type) {
    case "":
      return { ...state, sale: "همه" };
    case "شهت":
      return { ...state, sale: "شهت" };
    case "مچی":
      return { ...state, sale: "مچی" };
    case "خرما":
      return { ...state, sale: "خرما" };
    case "بوتل":
      return { ...state, sale: "بوتل" };
    case "ګورده":
      return { ...state, sale: "ګورده" };
    case "معجون":
      return { ...state, sale: "معجون" };
    default:
      new Error("No type found");
  }
}

const SideBarContext = createContext();

function SideProvider({ children }) {
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  const [saleState, saleDispatch] = useReducer(saleReducer, SaleInitialState);
  return (
    <SideBarContext.Provider
      value={{ productState, productDispatch, saleState, saleDispatch }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBar() {
  const context = useContext(SideBarContext);
  if (!context) Error("Context is used outside of scope");
  return context;
}

export default SideProvider;
