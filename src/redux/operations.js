import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = `https://delivery-app-node-production.up.railway.app`;

export const fetchGoodsByCategory = createAsyncThunk(
  "goods/fetchFoodsByCategory",
  async (category, thunkAPI) => {
    try {
      const result = await axios.get(`/goods/${category}`);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchHistory = createAsyncThunk(
  "history/getAllHistory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/orders");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchHistoryByName = createAsyncThunk(
  "history/getHistoryByName",
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(`/orders/name/${name}`);

      if (response.data.data.length < 1) {
        toast.error("No results(", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchHistoryByEmail = createAsyncThunk(
  "history/getHistoryByEmail",
  async (email, thunkAPI) => {
    try {
      const response = await axios.get(`/orders/email/${email}`);

      if (response.data.data.length < 1) {
        toast.error("No results(", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendCartDataAndAddHistory = createAsyncThunk(
  "history/addCart",
  async (cart, thunkAPI) => {
    try {
      const response = await axios.post("/orders/create", cart);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
