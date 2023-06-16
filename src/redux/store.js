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
import { authReducer } from "./auth/authSlice";
import { profileReducer } from "./profile/profileSlice";

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["items"],
  // blacklist: ['isModalOpen', 'search']
};

const authPersistConfig = {
  key: "auth",
  // whitelist: ['token'],
  storage,
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedUsersReducer,
    posts: postsReducer,
    auth: persistedAuthReducer,
    profile: profileReducer
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
