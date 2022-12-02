import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
// import request from "../request";
// import { toast } from "react-toastify";
// import RequestMessage from "../../src/RequestMessage";

const localCart =
  typeof localStorage !== "undefined" &&
  localStorage.getItem("localCart") &&
  JSON.parse(localStorage.getItem("localCart"));

const initialState = {
  // carts: localCarts && localCarts?.carts?.length > 0 ? localCarts.carts : [],
  // carts: [],
  // totalPrice: 0,
  // totalQuantity: 0,
  isLoading: false,

  carts: localCart?.carts?.length > 0 ? localCart.carts : [],
  totalPrice: localCart?.totalPrice ? localCart.totalPrice : 0,
  totalQuantity: localCart?.totalQuantity ? localCart.totalQuantity : 0,
};

// export const sentContactRequest = createAsyncThunk("contact/sentContactRequest", async (payload, thunkAPI) => {
//   try {
//     let response;
//     response = await request.post(`index.php/?firstname=${payload.firstname}&email=${payload.email}&message=${payload.message}`, payload).then((response) => response.data);
//     // toast(<RequestMessage message="Message sent successfully!" />);
//     return response;
//   } catch (error) {
//     console.log("Error", error);
//     // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
//     return null;
//   }
// });

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    addToCarts: (state, action) => {
      state.carts = [...state.carts, action.payload];
      // action.payload.router.push("/cart");
    },
    moveToCheckout: (state, action) => {
      state.carts = [...state.carts, action.payload];
      // action.payload.router.push("/checkout");
    },
    updateCart: (state, action) => {
      const index = state.carts.findIndex((o) => o.id === action.payload.id);
      if (index >= 0) {
        state.carts[index] = action.payload;
      }
    },
    emptyCart: (state, action) => { 
      state.carts = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    deleteCart: (state, action) => {
      state.carts = state.carts.filter((c) => c.id !== action.payload);
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(HYDRATE, (state, action) => {
    //   // console.log("HYDRATE", action.payload);
    //   //   state.selectedUser = action?.payload?.user?.selectedUser?.id ? action.payload.user.selectedUser : state?.selectedUser;
    //   //   state.usersQuery = action?.payload?.user?.users?.usersQuery?.id ? action.payload.user.users.usersQuery : state?.usersQuery;
    // });
    // builder.addCase(sentContactRequest.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(sentContactRequest.fulfilled, (state, action) => {
    //   state.contactUs = action.payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(sentContactRequest.rejected, (state, action) => {
    //   state.isLoading = false;
    //   console.log("Error:", { message: action.payload.message });
    // });
  },
});
export const { setCarts, addToCarts, moveToCheckout, updateCart, emptyCart, deleteCart, setTotalPrice, setTotalQuantity} =
  productSlice.actions;

export default productSlice.reducer;