import { createReducer } from "@reduxjs/toolkit";
// import { ANDROID, IPHONE } from "./counterTypes";
import { androidAction, iphoneAction } from "./counterActions";

const initialState = { android: 0, iphone: 0 };

// const counter = {
//   [ANDROID]: (state) => ({ ...state, android: state.android + 1 }),
//   [IPHONE]: (state) => ({ ...state, iphone: state.iphone + 1 }),
// };

// const obj = {
//   method: (a, b) => a + b,
// };

// obj.method(2, 3);

// dispatch({type: 'test'}) 

// export const counterReducer1 = (state = initialState, action) => {
//   if (!counter[action.type]) {
//     return state
//   }

//   return counter[action.type](state)
// };

export const counterReducer = createReducer(initialState, {
  [androidAction]: (state) => ({ ...state, android: state.android + 1 }),
  [iphoneAction]: (state) => ({ ...state, iphone: state.iphone + 1 }),
})


