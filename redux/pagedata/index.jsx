import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { setLoading } from "../global";
import { request2 } from "../request"; 

const initialState = {
  mainData: {},
  isLoading: false,
};

export const getPageData = createAsyncThunk("data/getPageData", async (_, thunkAPI) => {
  try {
    let response;
    thunkAPI.dispatch(setLoading(true));
    response = await request2.get(`data`).then((response) => response.data);
    thunkAPI.dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
});

export const mainDataSlice = createSlice({
  name: "pagedata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      //   state.selectedUser = action?.payload?.user?.selectedUser?.id ? action.payload.user.selectedUser : state?.selectedUser;
      //   state.usersQuery = action?.payload?.user?.users?.usersQuery?.id ? action.payload.user.users.usersQuery : state?.usersQuery;
    });
    builder.addCase(getPageData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPageData.fulfilled, (state, action) => {
      state.contactUs = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPageData.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});

export default mainDataSlice.reducer;