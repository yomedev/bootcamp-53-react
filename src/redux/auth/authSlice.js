import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../constants/fetchStatus";
import { loginThunk } from "./authThunk";

const initialState = {
  access_token: "",
  token_type: "",
  status: fetchStatus.Idle,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.access_token = payload.access_token;
        state.token_type = payload.token_type;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      });
  },
});

export const authReducer = authSlice.reducer;
export const {logoutAction} = authSlice.actions