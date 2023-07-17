import axios from 'axios';
import {
  GET_ALL_BRAND_SUCCESS,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_ADMIN_SUCCESS,
  GET_ALL_BRAND_ADMIN_FAIL,
  GET_ALL_BRAND_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_BRAND_ADMIN_ACCOUNT_FAIL,
  GET_BRAND_DETAIL_SUCCESS,
  GET_BRAND_DETAIL_FAIL,
  SEARCH_BRAND_SUCCESS,
  SEARCH_BRAND_FAIL,
  POST_BRAND_SUCCESS,
  POST_BRAND_FAIL,
  PUT_BRAND_SUCCESS,
  PUT_BRAND_FAIL,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAIL,
} from '../constants/brands';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostBrand = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/brand`, data)
      .then((res) => {
        dispatch(action(POST_BRAND_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_BRAND_FAIL, brand));
      });
  };
};

export const GetBrands = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/brand`)
      .then((res) => {
        dispatch(action(GET_ALL_BRAND_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_BRAND_FAIL, brand));
      });
  };
};

export const GetAdminBrands = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/brand/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_BRAND_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_BRAND_ADMIN_FAIL, brand));
      });
  };
};
export const GetAdminAccountBrands = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/brand/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_BRAND_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_BRAND_ADMIN_ACCOUNT_FAIL, brand));
      });
  };
};
export const GetBrand = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/brand/${id}`)
      .then((res) => {
        dispatch(action(GET_BRAND_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_BRAND_DETAIL_FAIL, brand));
      });
  };
};

export const SearchBrand = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/brand/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_BRAND_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_BRAND_FAIL, brand));
      });
  };
};

export const PutBrand = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/brand/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_BRAND_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_BRAND_FAIL, brand));
      });
  };
};

export const DeleteBrand = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/brand/${id}`)
      .then((res) => {
        dispatch(action(DELETE_BRAND_SUCCESS, res.data));
      })
      .catch((err) => {
        const brand = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_BRAND_FAIL, brand));
      });
  };
};
