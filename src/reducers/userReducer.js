import { ADD_USER } from "../actions/actionTypes";

const INTIAL_STATE = {
  list: [],
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, list: [...state.list, action.user] };
    default:
      return state;
  }
};

export default userReducer;
