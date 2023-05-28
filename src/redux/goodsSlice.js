import { createSlice } from "@reduxjs/toolkit";
import { fetchGoodsByCategory } from "./operations";

const goodsInitialState = {
  goodsList: [],
  isLoading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState: goodsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGoodsByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGoodsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.goodsList = action.payload;
      })
      .addCase(fetchGoodsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const goodsReducer = goodsSlice.reducer;
