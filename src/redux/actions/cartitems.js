import axios from 'axios';
import {
  GET_ALL_CARTITEM_SUCCESS,
  GET_ALL_CARTITEM_FAIL,
  GET_ALL_CARTITEM_ADMIN_SUCCESS,
  GET_ALL_CARTITEM_ADMIN_FAIL,
  GET_ALL_CARTITEM_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_CARTITEM_ADMIN_ACCOUNT_FAIL,
  GET_CARTITEM_DETAIL_SUCCESS,
  GET_CARTITEM_DETAIL_FAIL,
  SEARCH_CARTITEM_SUCCESS,
  SEARCH_CARTITEM_FAIL,
  POST_CARTITEM_SUCCESS,
  POST_CARTITEM_FAIL,
  PUT_CARTITEM_SUCCESS,
  PUT_CARTITEM_FAIL,
  DELETE_CARTITEM_SUCCESS,
  DELETE_CARTITEM_FAIL,
  START_QUERY,
  END_QUERY,
} from '../constants/cartitems';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostCartItem = (data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .post(`http://localhost:8080/api/cartitem`, data)
      .then((res) => {
        dispatch(action(POST_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_CARTITEM_FAIL, cartitem));
      });
  };
};

export const GetCartItems = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/cartitem`)
      .then((res) => {
        dispatch(action(GET_ALL_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_CARTITEM_FAIL, cartitem));
      });
  };
};

export const GetAdminCartItems = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/cartitem/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_CARTITEM_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_CARTITEM_ADMIN_FAIL, cartitem));
      });
  };
};
export const GetAdminAccountCartItems = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/cartitem/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_CARTITEM_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_CARTITEM_ADMIN_ACCOUNT_FAIL, cartitem));
      });
  };
};
export const GetCartItem = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/cartitem/${id}`)
      .then((res) => {
        dispatch(action(GET_CARTITEM_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_CARTITEM_DETAIL_FAIL, cartitem));
      });
  };
};

export const SearchCartItem = (id) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .get(`http://localhost:8080/api/cartitem/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_CARTITEM_FAIL, cartitem));
      });
  };
};

export const PutCartItem = (id, data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .put(`http://localhost:8080/api/cartitem/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_CARTITEM_FAIL, cartitem));
      });
  };
};

export const PutChangeAmountCartItem = (id, data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .put(`http://localhost:8080/api/cartitem/changeamount/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_CARTITEM_FAIL, cartitem));
      });
  };
};

export const DeleteCartItem = (id, data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .delete(`http://localhost:8080/api/cartitem/${id}/${data}`)
      .then((res) => {
        dispatch(action(DELETE_CARTITEM_SUCCESS, res.data));
      })
      .catch((err) => {
        const cartitem = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_CARTITEM_FAIL, cartitem));
      });
  };
};
