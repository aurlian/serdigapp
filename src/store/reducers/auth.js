import { AUTH_LOGIN } from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isLoggedIn: action.isLoggedIn
      };
      break;
    default:
      return state;
  }
};

export default authReducer;
