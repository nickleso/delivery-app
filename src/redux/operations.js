import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://delivery-app-node-production.up.railway.app/orders`;

// goods from fakeAPI
export const fetchGoodsByCategory = createAsyncThunk(
  "goods/fetchByCategory",
  async (category, thunkAPI) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;

    try {
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// goods from DB
export const fetchHistory = createAsyncThunk(
  "history/getAllHistory",
  async (_, thunkAPI) => {
    // const url = `https://delivery-app-node-production.up.railway.app/orders`;

    try {
      const response = await axios.get();
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendCartDataAndAddHistory = createAsyncThunk(
  "history/addCart",
  async (cart, thunkAPI) => {
    // const url = `https://delivery-app-node-production.up.railway.app/orders`;

    try {
      const response = await axios.post("/", cart);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
