import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";
import { emptyCart, setTotalPrice, setTotalQuantity } from "../product";
import RequestMessage from "../../components/common/RequestMessage";

const initialState = {
  orders: [],
  loading: false,
  error: "",
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}checkout`,payload,{mode:'cors'}).then((response) => response.data)
      await thunkAPI.dispatch(setTotalPrice(0));
      await thunkAPI.dispatch(setTotalQuantity(0));
      await thunkAPI.dispatch(emptyCart());
      localStorage.setItem(
        "localCart",
        JSON.stringify({ carts: [], totalPrice: 0, totalQuantity: 0 })
      );
      toast(<RequestMessage message="Payment Verified!" />);
      toast(<RequestMessage message="Thank you for shopping with us!" />, {
        autoClose: 8000,
      });
      Router.push("/");
      return response;
    } catch (error) {
      console.log("error", error);
      toast(<RequestMessage message="Order failed!" />);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      //   console.log("HYDRATE", action.payload);
      //   state.brands = action?.payload?.brands?.brands?.data?.length > 0 ? action.payload.brands.brands : state.brands;
    });

    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;
