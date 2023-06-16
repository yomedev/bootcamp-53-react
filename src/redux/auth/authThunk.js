import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserService } from "../../services/usersService";
import { token } from "../../http";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUserService(body);
      token.set(`${data.token_type} ${data.access_token}`) // 'Bearer adsfjalsdfj...'
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
