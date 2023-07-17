import {
  GET_ALL_AFFILATESHOP_SUCCESS,
  GET_ALL_AFFILATESHOP_FAIL,
  GET_ALL_AFFILATESHOP_ADMIN_SUCCESS,
  GET_ALL_AFFILATESHOP_ADMIN_FAIL,
  GET_ALL_AFFILATESHOP_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_AFFILATESHOP_ADMIN_ACCOUNT_FAIL,
  GET_AFFILATESHOP_DETAIL_SUCCESS,
  GET_AFFILATESHOP_DETAIL_FAIL,
  SEARCH_AFFILATESHOP_SUCCESS,
  SEARCH_AFFILATESHOP_FAIL,
  POST_AFFILATESHOP_SUCCESS,
  POST_AFFILATESHOP_FAIL,
  PUT_AFFILATESHOP_SUCCESS,
  PUT_AFFILATESHOP_FAIL,
  DELETE_AFFILATESHOP_SUCCESS,
  DELETE_AFFILATESHOP_FAIL,
} from '../constants/affilateshops';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const AffilateshopReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_AFFILATESHOP_SUCCESS:
      return { ...state, affilateshopList: payload };
    case GET_ALL_AFFILATESHOP_FAIL:
      return { ...state };

    case GET_ALL_AFFILATESHOP_ADMIN_SUCCESS:
      return { ...state, affilateshopAdminList: payload };
    case GET_ALL_AFFILATESHOP_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_AFFILATESHOP_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, affilateshopAdminAccountList: payload };
    case GET_ALL_AFFILATESHOP_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_AFFILATESHOP_DETAIL_SUCCESS:
      return { ...state, affilateshopDetail: payload };
    case GET_AFFILATESHOP_DETAIL_FAIL:
      return { ...state };
    case SEARCH_AFFILATESHOP_SUCCESS:
      return { ...state, affilateshopListSearch: payload };
    case SEARCH_AFFILATESHOP_FAIL:
      return { ...state };
    case POST_AFFILATESHOP_SUCCESS:
      return { ...state, isPostAffilateshop: true };
    case POST_AFFILATESHOP_FAIL:
      return { ...state, isPostAffilateshop: false };
    case PUT_AFFILATESHOP_SUCCESS:
      return { ...state, isPutAffilateshop: true };
    case PUT_AFFILATESHOP_FAIL:
      return { ...state, isPutAffilateshop: false };
    case DELETE_AFFILATESHOP_SUCCESS:
      return { ...state, affilateshop: payload };
    case DELETE_AFFILATESHOP_FAIL:
      return { ...state, affilateshop: payload };
    default:
      return { ...state };
  }
};

export default AffilateshopReducer;
