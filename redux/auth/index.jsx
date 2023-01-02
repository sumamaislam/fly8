import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { baseURL } from "../request";
import { setLoading } from "../global";
import { emptyCart, setTotalPrice, setTotalQuantity } from "../product";
import RequestMessage from "../../components/common/RequestMessage";
import { toast } from "react-toastify";
import Router from "next/router";

const initialState = {
  orders: [],
  loading: false,
  error: ""
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(`${baseURL}checkout`, payload, { mode: "cors" })
        .then((response) => response.data);
      // await thunkAPI.dispatch(setTotalPrice(0));
      // await thunkAPI.dispatch(setTotalQuantity(0));
      // await thunkAPI.dispatch(emptyCart());
      // localStorage.setItem(
      //   "localCart",
      //   JSON.stringify({ carts: [], totalPrice: 0, totalQuantity: 0 })
      // );
      // toast(<RequestMessage message="Payment Verified!" />);
      // toast(<RequestMessage message="Thank you for shopping with us!" />, {
      //   autoClose: 8000,
      // });
      // Router.push("/");
      return response;
    } catch (error) {
      console.log("error", error);
      toast(<RequestMessage message="Order failed!" />);
    }
  }
);

export const orderHistory = createAsyncThunk(
  "order/orderHistory",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .get(`${baseURL}users/orders?token=${payload}`, { mode: "cors" })
        .then((response) => response.data);
      // await thunkAPI.dispatch(setTotalPrice(0));
      // await thunkAPI.dispatch(setTotalQuantity(0));
      // await thunkAPI.dispatch(emptyCart());
      // localStorage.setItem(
      //   "localCart",
      //   JSON.stringify({ carts: [], totalPrice: 0, totalQuantity: 0 })
      // );
      // toast(<RequestMessage message="Payment Verified!" />);
      // toast(<RequestMessage message="Thank you for shopping with us!" />, {
      //   autoClose: 8000,
      // });
      // Router.push("/");
      return response;
    } catch (error) {
      console.log("error", error);
      // toast(<RequestMessage message="Order failed!" />);
    }
  }
);

export const createOrderReal = createAsyncThunk(
  "order/createOrderNew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}checkout`,payload,{mode:'cors'}).then((response) => response.data)
      // const response = await axios
      //   .post(
      //     `${baseURL}user/login`,
      //     { email: "amran6421@gmail.com", password: "1234" },
      //     { mode: "cors" }
      //   )
        .then((response) => response.data);
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
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      state.orders =
        action?.payload?.order?.orders?.data?.length > 0
          ? action.payload.order.orders
          : state.orders;
      state.orderDetail =
        action?.payload?.order?.orderDetail?.data?.length > 0
          ? action.payload.order.orderDetail
          : state.orderDetail;
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
    builder.addCase(createOrderReal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrderReal.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createOrderReal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(orderHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(orderHistory.fulfilled, (state, action) => {
      state.orderHistory = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(orderHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;
