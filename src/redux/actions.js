import { DELETE_USER } from "./types";

export const deleteUserAction = (userId) => ({ type: DELETE_USER, payload: userId})