// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer } from "./users/usersSlice";
import { counterReducer } from "./counter/counterReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   users: usersReducer,
// });

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['items'],
  // blacklist: ['isModalOpen', 'search']
}

const persistedUsersReducer = persistReducer(persistConfig, usersReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: persistedUsersReducer,
  },
  devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)


// if (typeof reducer === 'object') {
//   combineReducers(reducer)
// }

// export const store = createStore(rootReducer, composeWithDevTools());
