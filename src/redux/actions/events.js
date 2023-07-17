import axios from 'axios';
import {
  GET_ALL_EVENT_SUCCESS,
  GET_ALL_EVENT_FAIL,
  GET_ALL_EVENT_ADMIN_SUCCESS,
  GET_ALL_EVENT_ADMIN_FAIL,
  GET_ALL_EVENT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_EVENT_ADMIN_ACCOUNT_FAIL,
  GET_EVENT_DETAIL_SUCCESS,
  GET_EVENT_DETAIL_FAIL,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAIL,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAIL,
  PUT_EVENT_SUCCESS,
  PUT_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
} from '../constants/events';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const PostEvent = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/event`, data)
      .then((res) => {
        dispatch(action(POST_EVENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_EVENT_FAIL, event));
      });
  };
};

export const Getevents = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/event`)
      .then((res) => {
        dispatch(action(GET_ALL_EVENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_EVENT_FAIL, event));
      });
  };
};

export const GetAdminEvents = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/event/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_EVENT_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_EVENT_ADMIN_FAIL, event));
      });
  };
};
export const GetAdminAccountEvents = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/event/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_EVENT_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_EVENT_ADMIN_ACCOUNT_FAIL, event));
      });
  };
};
export const GetEvent = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/event/${id}`)
      .then((res) => {
        dispatch(action(GET_EVENT_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_EVENT_DETAIL_FAIL, event));
      });
  };
};

export const GetEventDate = (date) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/event/date/${date}`)
      .then((res) => {
        dispatch(action(GET_EVENT_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_EVENT_DETAIL_FAIL, event));
      });
  };
};

export const SearchEvent = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/event/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_EVENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_EVENT_FAIL, event));
      });
  };
};

export const PutEvent = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/event/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_EVENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_EVENT_FAIL, event));
      });
  };
};

export const DeleteEvent = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/event/${id}`)
      .then((res) => {
        dispatch(action(DELETE_EVENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const event = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_EVENT_FAIL, event));
      });
  };
};
