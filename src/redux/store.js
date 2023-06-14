import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { counterReducer } from "./counter/counterReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postsReducer } from "./posts/postsSlice";

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["items"],
  // blacklist: ['isModalOpen', 'search']
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

// const myMiddleware = (state) => (next) => (action) => next(action);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedUsersReducer,
    posts: postsReducer
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // middleware: (getDefaultMiddleware) => {
  //   const middlewares = getDefaultMiddleware();
  //   console.log(middlewares);
  //   return middlewares.concat(myMiddleware);
  // },
});

export const persistor = persistStore(store);
