import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession, signOut } from "next-auth/react";
import Router from "next/router";
import request from "../request";
import axios from "axios";

const baseURL = `https://ecomm.fly8.us/api/`

export const signupRequest = createAsyncThunk(
  "signup/signupRequest",
  async (payload, thunkAPI) => {
    const response = await request
      .post("api/v1/auth/signup", payload)
      .then((response) => response.data);
    return response;
  }
);

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
