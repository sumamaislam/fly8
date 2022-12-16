import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request from "../request";
// import { toast } from "react-toastify";
// import RequestMessage from "../../src/RequestMessage";

const initialState = {
  // homeData: [],
  header: {},
  isLoading: false,
  vapes: {},
  image: {},
  gummies: {},
  quality: {},
  footer: {}
};

export const navDataRequest = createAsyncThunk(
  "navbar/navDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`featured-links`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);

export const footerDataRequest = createAsyncThunk(
  "footer/footerDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`footer`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);


export const qualityDataRequest = createAsyncThunk(
  "quality/qualityDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`services`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);

export const gummiesDataRequest = createAsyncThunk(
  "gummies/gummiesDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`products?highlight=featured`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);


export const bannerDataRequest = createAsyncThunk(
  "banner/bannerDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`sliders`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);

export const vapeDataRequest = createAsyncThunk(
  "vape/vapeDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await request
        .get(`products?highlight=best`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);

export const homeDataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      // state.homeData = action?.payload?.home?.homeData?.banner?.length > 0 && action?.payload?.home?.homeData?.footer?.length > 0 && action?.payload?.home?.homeData?.header?.length > 0 && action?.payload?.home?.homeData?.home?.length > 0 && action?.payload?.home?.homeData?.product?.length > 0 ?  action.payload.home.homeData : state?.homeData;
      state.header = action?.payload?.home?.header ? action.payload.home.header : state?.header;
      state.image = action?.payload?.home?.image ? action.payload.home.image : state?.image;
      state.vapes = action?.payload?.home?.vapes ? action.payload.home.vapes : state?.vapes;
      state.gummies = action?.payload?.home?.gummies ? action.payload.home.gummies : state?.gummies;
      state.quality = action?.payload?.home?.quality ? action.payload.home.quality : state?.quality;
      state.footer = action?.payload?.home?.footer ? action.payload.home.footer : state?.footer;
      // state.home = action?.payload?.home ? action.payload.home : state?.home;
      // state.footer = action?.payload?.footer ? action.payload.footer : state?.footer;
      // state.header = action?.payload?.header ? action.payload.header : state?.header;
      //   state.usersQuery = action?.payload?.user?.users?.usersQuery?.id ? action.payload.user.users.usersQuery : state?.usersQuery;
    });
    // builder.addCase(sentDataRequest.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(sentDataRequest.fulfilled, (state, action) => {
    //   state.homeData = action.payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(sentDataRequest.rejected, (state, action) => {
    //   state.isLoading = false;
    //   console.log("Error:", { message: action.payload.message });
    // });
    builder.addCase(bannerDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(bannerDataRequest.fulfilled, (state, action) => {
      state.image = action.payload;
      state.isLoading = false;
    });
    builder.addCase(bannerDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
    builder.addCase(gummiesDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(gummiesDataRequest.fulfilled, (state, action) => {
      state.gummies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(gummiesDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
    builder.addCase(vapeDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(vapeDataRequest.fulfilled, (state, action) => {
      state.vapes = action.payload;
      state.isLoading = false;
    });
    builder.addCase(vapeDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
    builder.addCase(navDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(navDataRequest.fulfilled, (state, action) => {
      state.header = action.payload;
      state.isLoading = false;
    });
    builder.addCase(navDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
    builder.addCase(qualityDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(qualityDataRequest.fulfilled, (state, action) => {
      state.quality = action.payload;
      state.isLoading = false;
    });
    builder.addCase(qualityDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
    builder.addCase(footerDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(footerDataRequest.fulfilled, (state, action) => {
      state.footer = action.payload;
      state.isLoading = false;
    });
    builder.addCase(footerDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});

export default homeDataSlice.reducer;
