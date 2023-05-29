import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cart: [],
  cartTotal: 0,
  shoppingAvaible: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,

  reducers: {
    addItemToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
        itemInCart.totalPrice = itemInCart.price * itemInCart.quantity;
        state.cartTotal += itemInCart.price;
        return;
      }

      state.cart.push(action.payload);
      state.cartTotal += action.payload.price;
    },

    removeItemFromCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);

      if (itemInCart.quantity === 1) {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload
        );
        state.cart.splice(index, 1);
        state.cartTotal -= itemInCart.price;
        return;
      }

      itemInCart.quantity -= 1;
      itemInCart.totalPrice = itemInCart.price * itemInCart.quantity;
      state.cartTotal -= itemInCart.price;
    },

    refreshCart: (state, action) => {
      state.cart.splice(0, state.cart.length);
      state.cartTotal = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActoins = cartSlice.actions;
