// import { getSession, signOut } from "next-auth/react";
import Router from "next/router";

export const requestInterceptor = async (config) => {
  // const session = await getSession();
  // if (session?.user?.token) {
  //   let token = session?.user?.token;
  //   if (token) {
  //     try {
  //       config.headers.common.Authorization = token;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }

  return config;
};

export const errorInterceptor = (error) => {
  if (error?.message === "Network Error") {
    return Promise.reject({
      message: "Something went wrong, we are looking into that.",
      code: 500,
    });
  }
  if (error?.response) {
    if (
      error.response.status === 401 &&
      error.response.config &&
      !error.response.config.__isRetryRequest // eslint-disable-line no-underscore-dangle
    ) {
      console.log(error.response.data);
      // signOut({ redirect: false }).then(() => Router.push("/"));
    }
    return Promise.reject(error);
  }
};