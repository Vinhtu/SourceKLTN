import axios from 'axios';
import {
  GET_ALL_EVALUATE_SUCCESS,
  GET_ALL_EVALUATE_FAIL,
  GET_ALL_EVALUATE_ADMIN_SUCCESS,
  GET_ALL_EVALUATE_ADMIN_FAIL,
  GET_ALL_EVALUATE_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_EVALUATE_ADMIN_ACCOUNT_FAIL,
  GET_EVALUATE_DETAIL_SUCCESS,
  GET_EVALUATE_DETAIL_FAIL,
  SEARCH_EVALUATE_SUCCESS,
  SEARCH_EVALUATE_FAIL,
  POST_EVALUATE_SUCCESS,
  POST_EVALUATE_FAIL,
  PUT_EVALUATE_SUCCESS,
  PUT_EVALUATE_FAIL,
  DELETE_EVALUATE_SUCCESS,
  DELETE_EVALUATE_FAIL,
  START_QUERY,
  END_QUERY,
} from '../constants/evaluates';
import action from './action';
import { setNote } from './utils';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostEvaluate = (data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .post(`http://localhost:8080/api/evaluate`, data)
      .then((res) => {
        dispatch(setNote(true, 'isPostEvaluate'));
        dispatch(action(POST_EVALUATE_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(setNote(true, 'isPostEvaluate'));
        dispatch(action(POST_EVALUATE_FAIL, evaluate));
      });
  };
};

export const GetEvaluates = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/evaluate`)
      .then((res) => {
        dispatch(action(GET_ALL_EVALUATE_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_EVALUATE_FAIL, evaluate));
      });
  };
};

export const GetAdminEvaluates = () => {
  return async (dispatch) => {
    dispatch(action(START_QUERY, true));
    await axios
      .get(`http://localhost:8080/api/evaluate/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_EVALUATE_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_EVALUATE_ADMIN_FAIL, evaluate));
      });
  };
};
export const GetAdminAccountEvaluates = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/evaluate/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_EVALUATE_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_EVALUATE_ADMIN_ACCOUNT_FAIL, evaluate));
      });
  };
};
export const GetEvaluate = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/evaluate/${id}`)
      .then((res) => {
        dispatch(action(GET_EVALUATE_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_EVALUATE_DETAIL_FAIL, evaluate));
      });
  };
};

export const GetEvaluateDate = (date) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/evaluate/date/${date}`)
      .then((res) => {
        dispatch(action(GET_EVALUATE_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_EVALUATE_DETAIL_FAIL, evaluate));
      });
  };
};

export const SearchEvaluate = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/evaluate/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_EVALUATE_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_EVALUATE_FAIL, evaluate));
      });
  };
};

export const PutEvaluate = (id, data) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .put(`http://localhost:8080/api/evaluate/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_EVALUATE_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_EVALUATE_FAIL, evaluate));
      });
  };
};

export const DeleteEvaluate = (id) => {
  return (dispatch) => {
    dispatch(action(START_QUERY, true));
    axios
      .delete(`http://localhost:8080/api/evaluate/${id}`)
      .then((res) => {
        dispatch(action(DELETE_EVALUATE_SUCCESS, res.data));
      })
      .catch((err) => {
        const evaluate = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_EVALUATE_FAIL, evaluate));
      });
  };
};
