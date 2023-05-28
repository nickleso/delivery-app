import { createSlice } from "@reduxjs/toolkit";
import { sendCartDataAndAddHistory } from "./operations";

const historyInitialState = {
  historyList: [],
  isLoading: false,
  error: null,
};

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(sendCartDataAndAddHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendCartDataAndAddHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.historyList = action.payload;
      })
      .addCase(sendCartDataAndAddHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const historyReducer = historySlice.reducer;
