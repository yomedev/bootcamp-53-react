import { createSlice } from "@reduxjs/toolkit";
import usersJson from "../../data/users.json";

const initialState = {
  items: usersJson,
  search: "",
  isModalOpen: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserAction: (state, { payload }) => {
      state.items = state.items.filter((user) => user.id !== payload);
    },
    createNewUserAction: {
      prepare: (user) => ({ payload: { ...user, id: Date.now() } }),
      reducer: (state, { payload }) => {
        state.items.unshift(payload);
        state.isModalOpen = false;
      },
    },
    toggleModalAction: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeSearchAction: (state, { payload }) => {
      state.search = payload;
    },
    clearStateAction: () => initialState,
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  deleteUserAction,
  createNewUserAction,
  toggleModalAction,
  changeSearchAction,
} = usersSlice.actions;
