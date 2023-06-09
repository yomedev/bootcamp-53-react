import { DELETE_USER } from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        users: {
          ...state.users,
          items: state.users.items.filter((user) => user.id !== action.payload),
        },
      };
    case "CREATE_USER":
      return {
        users: {
          ...state.users,
          isModalOpen: !state.users.isModalOpen,
          items: [action.payload, ...state.users.items],
        },
      };
    case "TOGGLE_MODAL":
      return {
        users: {
          ...state.users,
          isModalOpen: !state.users.isModalOpen,
        },
      };
    case "CHANGE_SEARCH":
      return {
        users: {
          ...state.users,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
