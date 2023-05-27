import { createSlice } from "@reduxjs/toolkit";

const goodsInitialState = {
  cart: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: goodsInitialState,

  reducers: {
    addItemToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
        itemInCart.totalPrice = itemInCart.price * itemInCart.quantity;
        state.cartTotal = itemInCart.totalPrice;
        return;
      }

      state.cart.push(action.payload);
      state.cartTotal += action.payload.price;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActoins = cartSlice.actions;
