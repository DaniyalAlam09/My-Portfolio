import axios from 'axios';

// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

// Action Creators
export const register = (payload) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:4000/users/register',  payload );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error)
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

export const login = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    const res = await axios.post('http://localhost:4000/users/login',  payload, config );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log(error)
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};


export const fetchUser = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.get('http://localhost:4000/users/my-profile',config);
    const user = res.data;

    dispatch({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    // Handle any error during the API request
    dispatch({ type: FETCH_USER_FAIL, payload: error.message });
  }
};

export const logout = () => ({ type: LOGOUT });
