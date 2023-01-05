import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request from "../request";
import { setLoading } from "../global";
import { emptyCart, setDataCoupans, setTotalPrice, setTotalQuantity } from "../product";
import RequestMessage from "../../components/common/RequestMessage";
import { toast } from "react-toastify";
import Router from "next/router";
import { getSession } from "next-auth/react";

const initialState = {
  orders: {},
  loading: false,
  error: "",
  orderDetail: {},
  secret: "",
  history: {},
};

const baseURL = `https://ecomm.fly8.us/api/`


export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload, thunkAPI) => {
    try {
      // await thunkAPI.dispatch(setLoading(true));
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
      // await thunkAPI.dispatch(setLoading(false));
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
      const session = await getSession();
      thunkAPI.dispatch(setLoading(true));
      const response = await axios
        .get(`${baseURL}user/orders?token=${session?.user?.token}`)
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
      thunkAPI.dispatch(setLoading(false));
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
      // await thunkAPI.dispatch(setLoading(true));
      const response = await axios
        .post(`${baseURL}change_status/${payload}`, { mode: "cors" })
        .then((response) => response.data)
        // const response = await axios
        //   .post(
        //     `${baseURL}user/login`,
        //     { email: "amran6421@gmail.com", password: "1234" },
        //     { mode: "cors" }
        //   )
        .then((response) => response.data);
      // await thunkAPI.dispatch(setLoading(false));
      thunkAPI.dispatch(setTotalPrice(0));
      thunkAPI.dispatch(setTotalQuantity(0));
      thunkAPI.dispatch(emptyCart());
      thunkAPI.dispatch(setDataCoupans());
      thunkAPI.dispatch(setLoading(false));
      localStorage.setItem(
        "localCart",
        JSON.stringify({ carts: [], totalPrice: 0, totalQuantity: 0 , dataCoupans: {}})
      );
      Router.push("/profile");
      toast(<RequestMessage message="Payment Verified!" />);
      toast(<RequestMessage message="Thank you for shopping with us!" />, {
        autoClose: 8000,
      });
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
    setSecret: (state, action) => {
      state.secret = action.payload;
    },
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
      state.history = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(orderHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setSecret } = orderSlice.actions;

export default orderSlice.reducer;
