import usersJson from "../../data/users.json";
import { DELETE_USER } from "./usersTypes";

const initialState = {
  items: usersJson,
  search: "",
  isModalOpen: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        items: state.items.filter((user) => user.id !== action.payload),
      };
    case "CREATE_USER":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        items: [action.payload, ...state.items],
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case "CHANGE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
