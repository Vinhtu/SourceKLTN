import axios from 'axios';
import {
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  GET_ALL_CART_ADMIN_SUCCESS,
  GET_ALL_CART_ADMIN_FAIL,
  GET_ALL_CART_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_CART_ADMIN_ACCOUNT_FAIL,
  GET_CART_DETAIL_SUCCESS,
  GET_CART_DETAIL_FAIL,
  SEARCH_CART_SUCCESS,
  SEARCH_CART_FAIL,
  POST_CART_SUCCESS,
  POST_CART_FAIL,
  PUT_CART_SUCCESS,
  PUT_CART_FAIL,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
  START_QUERY,
  END_QUERY,
} from '../constants/carts';
import action from './action';
import { setNote } from './utils';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostCart = (data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .post(`http://localhost:8080/api/cart`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setNote(true, 'isPostCart'));
          dispatch(action(POST_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          dispatch(setNote(true, 'isPostCart'));
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(POST_CART_FAIL, cart));
        });
    };
  }
};

export const GetCarts = (token) => {
  if (token) {
    return async (dispatch) => {
      await axios
        .get(`http://localhost:8080/api/cart`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ALL_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err,
          };
          dispatch(action(GET_ALL_CART_FAIL, cart));
        });
    };
  }
};

export const GetCartAccount = (id, token) => {
  if (token) {
    return async (dispatch) => {
      await axios
        .get(`http://localhost:8080/api/cart/account/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ALL_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err,
          };
          dispatch(action(GET_ALL_CART_FAIL, cart));
        });
    };
  }
};

export const GetAdminCarts = (token) => {
  if (token) {
    return async (dispatch) => {
      await axios
        .get(`http://localhost:8080/api/cart/admin/all`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ALL_CART_ADMIN_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(GET_ALL_CART_ADMIN_FAIL, cart));
        });
    };
  }
};
export const GetAdminAccountCarts = (token) => {
  if (token) {
    return async (dispatch) => {
      await axios
        .get(`http://localhost:8080/api/cart/admin/account`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ALL_CART_ADMIN_ACCOUNT_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(GET_ALL_CART_ADMIN_ACCOUNT_FAIL, cart));
        });
    };
  }
};
export const GetCart = (id, token) => {
  if (token) {
    return (dispatch) => {
      axios
        .get(`http://localhost:8080/api/cart/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_CART_DETAIL_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(GET_CART_DETAIL_FAIL, cart));
        });
    };
  }
};

export const SearchCart = (id, token) => {
  if (token) {
    return (dispatch) => {
      axios
        .get(`http://localhost:8080/api/cart/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(SEARCH_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(SEARCH_CART_FAIL, cart));
        });
    };
  }
};

export const PutCart = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/cart/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_CART_FAIL, cart));
        });
    };
  }
};

export const DeleteCart = (id, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .delete(`http://localhost:8080/api/cart/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(DELETE_CART_SUCCESS, res.data));
        })
        .catch((err) => {
          const cart = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(DELETE_CART_FAIL, cart));
        });
    };
  }
};
