import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_FAIL,
  LOGOUT_ACCOUNT_SUCCESS,
  LOGOUT_ACCOUNT_FAIL,
  GET_ALL_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT_FAIL,
  // GET_ACCOUNT_PAGE_SUCCESS,
  // GET_ACCOUNT_PAGE_FAIL,
  GET_ACCOUNT_DETAIL_SUCCESS,
  GET_ACCOUNT_DETAIL_FAIL,
  SEARCH_ACCOUNT_SUCCESS,
  SEARCH_ACCOUNT_FAIL,
  POST_ACCOUNT_SUCCESS,
  POST_ACCOUNT_FAIL,
  PUT_ACCOUNT_SUCCESS,
  PUT_ACCOUNT_FAIL,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
  START_QUERY,
  END_QUERY,
  PUT_ACCOUNT_VOUCHER_SUCCESS,
  PUT_ACCOUNT_VOUCHER_FAIL,
  PUT_PASSWORD_ACCOUNT_SUCCESS,
  PUT_PASSWORD_ACCOUNT_FAIL,
  // CLOSE_NOTIFICATION
} from '../constants/accounts';
import action from './action';
import { setNote } from './utils';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

// Customor login
// export const LoginAccount = (data) => {
//   return (dispatch) => {
//     axios
//       .post(`http://localhost:8080/api/account/login`, data)
//       .then((res) => {
//         dispatch(action(ACCOUNT_LOGIN_SUCCESS, res.data));
//       })
//       .catch((err) => {
//         const notification = {
//           open: true,
//           severity: 'error',
//           message: err.request.responseText,
//         };
//         dispatch(action(ACCOUNT_LOGIN_FAIL, notification));
//       });
//   };
// };

export const LoginX = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/account/login`, data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem('accountinfo', JSON.stringify(res.data.account));
          localStorage.setItem(
            'accessToken',
            JSON.stringify(res.data.accessToken),
          );
          localStorage.setItem(
            'refreshToken',
            JSON.stringify(res.data.refreshToken),
          );
        }

        dispatch(action(LOGIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(LOGIN_ACCOUNT_FAIL, notification));
      });
  };
};

export const LogoutX = (refresh) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/account/logout`, refresh)
      .then((res) => {
        dispatch(action(LOGOUT_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(LOGOUT_ACCOUNT_FAIL, notification));
      });
  };
};

export const RegisterAccount = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/account/register`, data)
      .then((res) => {
        dispatch(action(POST_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_ACCOUNT_FAIL, notification));
      });
  };
};

export const GetAccounts = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/account`)
      .then((res) => {
        dispatch(action(GET_ALL_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_ACCOUNT_FAIL, notification));
      });
  };
};

export const PostAccountDates = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/account/date/month`, data)
      .then((res) => {
        dispatch(action(GET_ALL_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_ACCOUNT_FAIL, notification));
      });
  };
};
export const GetAccount = (id, token) => {
  if (token) {
    return (dispatch) => {
      axios
        .get(`http://localhost:8080/api/account/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(GET_ACCOUNT_DETAIL_SUCCESS, res.data));
        })
        .catch((err) => {
          const notification = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(GET_ACCOUNT_DETAIL_FAIL, notification));
        });
    };
  }
};

export const SearchAccount = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/account/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_ACCOUNT_FAIL, notification));
      });
  };
};

export const PutAccount = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/account/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_ACCOUNT_SUCCESS, res.data));
        })
        .catch((err) => {
          const notification = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_ACCOUNT_FAIL, notification));
        });
    };
  }
};

export const PutAccountPassword = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/account/password/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_PASSWORD_ACCOUNT_SUCCESS, res.data));
        })
        .catch((err) => {
          const notification = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_PASSWORD_ACCOUNT_FAIL, notification));
        });
    };
  }
};
export const PutAccountOrder = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/account/order/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(PUT_ACCOUNT_SUCCESS, res.data));
        })
        .catch((err) => {
          const notification = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(PUT_ACCOUNT_FAIL, notification));
        });
    };
  }
};
export const PutAccountGiveVoucher = (id, idVoucher, token) => {
  if (token) {
    const data = { _idVoucher: idVoucher };
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/account/give/voucher/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setNote(true, 'isPutVoucherAccount'));
          return dispatch(action(PUT_ACCOUNT_VOUCHER_SUCCESS, res.data));
        })
        .catch((err) => {
          dispatch(setNote(true, 'isPutVoucherAccount'));
          const notification = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };

          return dispatch(action(PUT_ACCOUNT_VOUCHER_FAIL, notification));
        });
    };
  }
};

export const DeleteAccount = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/account/${id}`)
      .then((res) => {
        dispatch(action(DELETE_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_ACCOUNT_FAIL, notification));
      });
  };
};
