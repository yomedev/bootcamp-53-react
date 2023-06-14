import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPostService, deletePostService, getPostsService } from "../../services/postsServices";

// const getPostsThunk = () => async (dispatch) => {
//   dispatch({ type: "pending" });
//   try {
//     const posts = await getPostsService();
//     dispatch({ type: "fullfilled", payload: posts });
//   } catch (error) {
//     dispatch({ type: "rejected", payload: error });
//   }
// };

export const getPostsThunk = createAsyncThunk("getPosts", async (_, thunkApi) => {
  try {
    return getPostsService()
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
});

export const createPostThunk = createAsyncThunk("createPost", (body, thunkApi) => {
  return createPostService(body);
});

export const deletePostThunk = createAsyncThunk("deletePost", (id, thunkApi) => {
  return deletePostService(id);
});
