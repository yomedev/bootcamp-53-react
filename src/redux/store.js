import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const store = createStore(reducer, initialState, composeWithDevTools());
