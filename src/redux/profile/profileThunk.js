import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileService } from "../../services/usersService";
import { selectAuth } from "../auth/authSelect";
import { token } from "../../http";

export const getProfileThunk = createAsyncThunk(
  "profile/getInfo",
  async (_, { getState }) => {
    try {
      const { access_token, token_type } = selectAuth(getState());
      token.set(`${token_type} ${access_token}`)
      const data = getProfileService();
      return data;
    } catch (error) {}
  }
);
