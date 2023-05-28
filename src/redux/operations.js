import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = `https://fakestoreapi.com/products`;

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
    try {
      const response = await axios.get("/history/getAllHistory");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendCartDataAndAddHistory = createAsyncThunk(
  "history/addCart",
  async (cart, thunkAPI) => {
    try {
      const response = await axios.post("/history/addCart", cart);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
