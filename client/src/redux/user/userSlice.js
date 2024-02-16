import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  error: null,
  loading: false,
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginInStart: (state) => {
      state.loading = true;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { logInStart, logInSuccess, logInFailure } = userSlicer.actions;

export default userSlicer.reducer;
