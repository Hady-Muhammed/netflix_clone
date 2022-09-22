import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER(state, { type, payload }) {
        state.email = payload
        state.isLoggedIn = true;
    },
    LOG_OUT(state,action) {
      state.email = "";
      state.isLoggedIn = false;
    }
  },
});

export const {SET_USER , LOG_OUT} = authSlice.actions;

export default authSlice.reducer;
