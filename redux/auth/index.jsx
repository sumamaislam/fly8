import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import request from "../request";
import axios from "axios";
import RequestMessage from "../../components/common/RequestMessage";
import { toast } from "react-toastify";

const baseURL = `https://ecomm.fly8.us/api/`

const initialState = {
  updateUser: {},
  isLoadingUser: false,
};

export const signupRequest = createAsyncThunk(
  "signup/signupRequest",
  async (payload, thunkAPI) => {
    const response = await request
      .post("api/v1/auth/signup", payload)
      .then((response) => response.data);
    return response;
  }
);


export const updatedUser = createAsyncThunk("user/updateUser", async (payload, thunkAPI) => {
  try {
    const session = await getSession();
    const response = await axios
      .post(`${baseURL}user/update?token=${session?.user?.token}`, payload)
      .then((response) => response.data);
    toast(<RequestMessage message="Successful Update Account!" />, { autoClose: 8000 });
    // Router.push("/");
    const data = {
      "email": session?.user?.user?.email,
      "password": session?.user?.user?.password,
    }
    signIn("credentials", { ...data, redirect: false }).then((response) => {
      // if (response?.ok) {
      //   Router.push("/");
      // }
    });
    return response;
  } catch (error) {
    console.log("Error", error);
    toast(<RequestMessage message="Update Failed!" />);
    return null;
  }
});

export const logoutRequest = createAsyncThunk(
  "login/logoutRequest",
  async (payload, thunkAPI) => {
    try {
      const session = await getSession();
      const response = await axios
        .post(`${baseURL}user/logout?token=${session?.user?.token}`)
        .then(() => {
          signOut({ redirect: false }).then(() => Router.push("/login"));
        });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(
          `${baseURL}/api/v1/password/reset${payload?.token ? "/" + payload.token : ""}`,
          payload
        )
        .then((data) => data);
      Router.push("/login");
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      // state.selectedUser = action?.payload?.user?.selectedUser?.id ? action.payload.user.selectedUser : state?.selectedUser;
      state.updateUser = action?.payload?.auth?.updateUser ? action.payload.auth.updateUser : state?.updateUser;
    });
    builder.addCase(updatedUser.pending, (state) => {
      state.isLoadingUser = true;
    });
    builder.addCase(updatedUser.fulfilled, (state, action) => {
      state.updateUser = action.payload;
      state.isLoadingUser = false;
    });
    builder.addCase(updatedUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});
