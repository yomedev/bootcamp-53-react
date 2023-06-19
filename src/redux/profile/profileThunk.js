import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileService } from "../../services/usersService";
import { selectAuth } from "../auth/authSelect";
import { token } from "../../http";
import { logoutAction } from "../auth/authSlice";

export const getProfileThunk = createAsyncThunk(
  "profile/getInfo",
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      const { access_token, token_type } = selectAuth(getState());
      token.set(`${token_type} ${access_token}`)
      const data = await getProfileService();
      return data;
    } catch (error) {
      token.unset()
      dispatch(logoutAction())
      return rejectWithValue()
    }
  }
);
