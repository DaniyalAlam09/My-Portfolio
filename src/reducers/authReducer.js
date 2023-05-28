import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  LOGOUT,
} from '../actions/authActions';

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchUserError: null,
      };

    case FETCH_USER_FAIL:
      return {
        ...state,
        user: null,
        fetchUserError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
