import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./goods/goodsSlice";
import { cartReducer } from "./goods/cartSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
});
