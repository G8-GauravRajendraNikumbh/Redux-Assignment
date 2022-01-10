import { ADD_USER } from "./actionTypes";

export const addUser = (user) => {
  return { type: ADD_USER, user };
};
