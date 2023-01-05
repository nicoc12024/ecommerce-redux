import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/CartSlice";
import CheckOutReducer from "./Slice/CheckOutSlice";

export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer,
  },
});
