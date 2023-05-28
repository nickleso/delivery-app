import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./goodsSlice";
import { cartReducer } from "./cartSlice";
import { historyReducer } from "./dataAndHistoSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    history: historyReducer,
  },
});
