import {
  GET_ALL_SIZE_SUCCESS,
  GET_ALL_SIZE_FAIL,
  GET_ALL_SIZE_ADMIN_SUCCESS,
  GET_ALL_SIZE_ADMIN_FAIL,
  GET_ALL_SIZE_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_SIZE_ADMIN_ACCOUNT_FAIL,
  GET_SIZE_DETAIL_SUCCESS,
  GET_SIZE_DETAIL_FAIL,
  SEARCH_SIZE_SUCCESS,
  SEARCH_SIZE_FAIL,
  POST_SIZE_SUCCESS,
  POST_SIZE_FAIL,
  PUT_SIZE_SUCCESS,
  PUT_SIZE_FAIL,
  DELETE_SIZE_SUCCESS,
  DELETE_SIZE_FAIL,
} from '../constants/sizes';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const SizeReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_SIZE_SUCCESS:
      return { ...state, sizeList: payload };
    case GET_ALL_SIZE_FAIL:
      return { ...state };

    case GET_ALL_SIZE_ADMIN_SUCCESS:
      return { ...state, sizeAdminList: payload };
    case GET_ALL_SIZE_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_SIZE_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, sizeAdminAccountList: payload };
    case GET_ALL_SIZE_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_SIZE_DETAIL_SUCCESS:
      return { ...state, sizeDetail: payload };
    case GET_SIZE_DETAIL_FAIL:
      return { ...state };
    case SEARCH_SIZE_SUCCESS:
      return { ...state, sizeListSearch: payload };
    case SEARCH_SIZE_FAIL:
      return { ...state };
    case POST_SIZE_SUCCESS:
      return { ...state, isPostSize: true };
    case POST_SIZE_FAIL:
      return { ...state, isPostSize: false };
    case PUT_SIZE_SUCCESS:
      return { ...state, isPutSize: true };
    case PUT_SIZE_FAIL:
      return { ...state, isPutSize: false };
    case DELETE_SIZE_SUCCESS:
      return { ...state, size: payload };
    case DELETE_SIZE_FAIL:
      return { ...state, size: payload };
    default:
      return { ...state };
  }
};

export default SizeReducer;
