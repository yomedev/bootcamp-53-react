import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { getPosts } from "../services/postsServices";

export const getPostsThunk = () => async (dispatch) => {
  dispatch({ type: "loading" });
  try {
    const posts = await getPosts();
    dispatch({ type: "success", payload: posts });
  } catch (error) {
    dispatch({ type: "error", payload: error });
  }
};

const middleware = (store) => (next) => (action) => {
  console.log(action);
  if (typeof action === "function") {
    return next(action(store.dispatch));
  }
  return next(action);
};

// const partialMiddleware = middleware(store)(next)
// partialMiddleware(action)

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(middleware))
);

// const sum = (a, b = 0) => a + b
// // const result = sum(num1, num2)

// const sumCurr = (a) => {
//   return (b) => a + b
// }

// const num1 = 5

// const func = sumCurr(num1)

// const num2 = 6

// const result = func(num2)
