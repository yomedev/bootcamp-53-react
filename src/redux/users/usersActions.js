import { CHANGE_SEARCH, CREATE_USER, DELETE_USER, TOGGLE_MODAL } from "./usersTypes";

export const deleteUserAction = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const createNewUserAction = (user) => ({
  type: CREATE_USER,
  payload: {...user, id: Date.now()},
});

export const toggleModalAction = () => ({
  type: TOGGLE_MODAL,
});

export const changeSearchAction = (value) => ({
  type: CHANGE_SEARCH,
  payload: value
});
