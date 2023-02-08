import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepCount: 0,
  userDetail: [],
  addressDetails: []
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    stepCounter: (state, action) => {
      state.stepCount = action.payload;
    },
    userDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    addressDetails: (state, action) => {
      state.addressDetails = action.payload;
    },
  },
});

export const { stepCounter, userDetail, addressDetails } = userReducer.actions;

export default userReducer.reducer;
