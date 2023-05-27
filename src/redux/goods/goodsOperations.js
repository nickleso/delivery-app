import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://fakestoreapi.com/products`;

export const fetchGoodsByCategory = createAsyncThunk(
  "goods/fetchByCategory",
  async (category, thunkAPI) => {
    const url = `/category/${category}`;
    try {
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// submit cart

// export const addItemToCart = createAsyncThunk(
//   "goods/addNotice",
//   async (item, thunkAPI) => {
//     try {
//       const response = await axios.post("/cart/addItem", item);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
