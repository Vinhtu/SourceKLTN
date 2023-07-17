import {
  START_QUERY,
  END_QUERY,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_FAIL,
  LOGOUT_ACCOUNT_SUCCESS,
  LOGOUT_ACCOUNT_FAIL,
  GET_ALL_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNT_FAIL,
  GET_ACCOUNT_PAGE_SUCCESS,
  GET_ACCOUNT_PAGE_FAIL,
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
  CLOSE_NOTIFICATION,
  PUT_ACCOUNT_VOUCHER_SUCCESS,
  PUT_ACCOUNT_VOUCHER_FAIL,
  PUT_PASSWORD_ACCOUNT_SUCCESS,
  PUT_PASSWORD_ACCOUNT_FAIL,
} from '../constants/accounts';

const intialState = {
  isPostAccount: false,
  isPutAccount: false,
  isPutVoucherAccount: false,
  isLogout: false,
  accountLogin: false,
  isPutPassword: false,
};

const AccountReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return {
        ...state,
        isPutAccount: false,
        isPutVoucherAccount: false,
        isLogout: false,
        accountLogin: false,
        isPutPassword: false,
        isPostAccount: false,
      };
    case END_QUERY:
      return {
        ...state,
        isPutAccount: false,
        isPutVoucherAccount: false,
        isLogout: false,
        isPutPassword: false,
        isPostAccount: false,
      };
    case LOGIN_ACCOUNT_SUCCESS:
      return { ...state, accountLogin: payload, isLogout: false };
    case LOGIN_ACCOUNT_FAIL:
      return { ...state, accountLogin: 'fail' };

    case LOGOUT_ACCOUNT_SUCCESS:
      return { ...state, isLogout: payload, accountLogin: false };
    case LOGOUT_ACCOUNT_FAIL:
      return { ...state, isLogout: payload };
    case GET_ALL_ACCOUNT_SUCCESS:
      return { ...state, accountList: payload };
    case GET_ALL_ACCOUNT_FAIL:
      return { ...state };
    case GET_ACCOUNT_PAGE_SUCCESS:
      return { ...state, accountListPage: payload };
    case GET_ACCOUNT_PAGE_FAIL:
      return { ...state };
    case GET_ACCOUNT_DETAIL_SUCCESS:
      return { ...state, accountDetail: payload };
    case GET_ACCOUNT_DETAIL_FAIL:
      return { ...state };
    case SEARCH_ACCOUNT_SUCCESS:
      return { ...state, account_list_search: payload };
    case SEARCH_ACCOUNT_FAIL:
      return { ...state };

    case POST_ACCOUNT_SUCCESS:
      return { ...state, isPostAccount: payload };
    case POST_ACCOUNT_FAIL:
      return { ...state, isPostAccount: payload };

    case PUT_PASSWORD_ACCOUNT_SUCCESS:
      return { ...state, isPutPassword: payload };
    case PUT_PASSWORD_ACCOUNT_FAIL:
      return { ...state, isPutPassword: payload };

    case PUT_ACCOUNT_SUCCESS:
      return { ...state, isPutAccount: payload };
    case PUT_ACCOUNT_FAIL:
      return { ...state, isPutAccount: payload };

    case PUT_ACCOUNT_VOUCHER_SUCCESS:
      return { ...state, isPutVoucherAccount: payload };
    case PUT_ACCOUNT_VOUCHER_FAIL:
      return { ...state, isPutVoucherAccount: payload };

    case DELETE_ACCOUNT_SUCCESS:
      return { ...state, notification: payload };
    case DELETE_ACCOUNT_FAIL:
      return { ...state, notification: payload };

    case CLOSE_NOTIFICATION:
      return { ...state, notification: payload };
    default:
      return { ...state };
  }
};

export default AccountReducer;
