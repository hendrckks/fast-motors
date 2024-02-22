import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
    },
    logInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { logInStart, logInSuccess, logInFailure } = userSlice.actions;

export default userSlice.reducer;
