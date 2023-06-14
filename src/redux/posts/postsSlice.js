import { createSlice } from "@reduxjs/toolkit";
import { createPostThunk, deletePostThunk, getPostsThunk } from "./postsThunk";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

const initialState = {
  items: [],
  isLoding: false,
  isError: false,
  status: fetchStatus.Idle,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoding = true;
        state.status = fetchStatus.Loading;
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.isLoding = false;
        state.status = fetchStatus.Success;
        state.items = payload;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.isLoding = false;
        state.isError = true;
        state.status = fetchStatus.Error;
      })
      .addCase(createPostThunk.pending, (state) => {
        state.isLoding = true;
        state.status = fetchStatus.Loading;
      })
      .addCase(createPostThunk.fulfilled, (state, { payload }) => {
        state.isLoding = false;
        state.status = fetchStatus.Success;
        state.items.push(payload);
      })
      .addCase(createPostThunk.rejected, (state) => {
        state.isLoding = false;
        state.isError = true;
        state.status = fetchStatus.Error;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.isLoding = true;
        state.status = fetchStatus.Loading;
      })
      .addCase(deletePostThunk.fulfilled, (state, { payload }) => {
        state.isLoding = false;
        state.status = fetchStatus.Success;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(deletePostThunk.rejected, (state) => {
        state.isLoding = false;
        state.isError = true;
        state.status = fetchStatus.Error;
      });

    // [getPostsThunk.pending]: (state) => {
    //   state.isLoding = true;
    //   state.status = fetchStatus.Loading;
    // },
    // [getPostsThunk.fulfilled]: (state, { payload }) => {
    //   state.isLoding = false;
    //   state.status = fetchStatus.Success;
    //   state.items = payload;
    // },
    // [getPostsThunk.rejected]: (state) => {
    //   state.isLoding = false;
    //   state.isError = true;
    //   state.status = fetchStatus.Error;
    // },
  },
});

export const postsReducer = postsSlice.reducer;
