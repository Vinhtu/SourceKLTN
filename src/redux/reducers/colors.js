import {
  GET_ALL_COLOR_SUCCESS,
  GET_ALL_COLOR_FAIL,
  GET_ALL_COLOR_ADMIN_SUCCESS,
  GET_ALL_COLOR_ADMIN_FAIL,
  GET_ALL_COLOR_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_COLOR_ADMIN_ACCOUNT_FAIL,
  GET_COLOR_DETAIL_SUCCESS,
  GET_COLOR_DETAIL_FAIL,
  SEARCH_COLOR_SUCCESS,
  SEARCH_COLOR_FAIL,
  POST_COLOR_SUCCESS,
  POST_COLOR_FAIL,
  PUT_COLOR_SUCCESS,
  PUT_COLOR_FAIL,
  DELETE_COLOR_SUCCESS,
  DELETE_COLOR_FAIL,
} from '../constants/colors';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const ColorReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_COLOR_SUCCESS:
      return { ...state, colorList: payload };
    case GET_ALL_COLOR_FAIL:
      return { ...state };

    case GET_ALL_COLOR_ADMIN_SUCCESS:
      return { ...state, colorAdminList: payload };
    case GET_ALL_COLOR_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_COLOR_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, colorAdminAccountList: payload };
    case GET_ALL_COLOR_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_COLOR_DETAIL_SUCCESS:
      return { ...state, colorDetail: payload };
    case GET_COLOR_DETAIL_FAIL:
      return { ...state };
    case SEARCH_COLOR_SUCCESS:
      return { ...state, colorListSearch: payload };
    case SEARCH_COLOR_FAIL:
      return { ...state };
    case POST_COLOR_SUCCESS:
      return { ...state, isPostColor: true };
    case POST_COLOR_FAIL:
      return { ...state, isPostColor: false };
    case PUT_COLOR_SUCCESS:
      return { ...state, isPutColor: true };
    case PUT_COLOR_FAIL:
      return { ...state, isPutColor: false };
    case DELETE_COLOR_SUCCESS:
      return { ...state, color: payload };
    case DELETE_COLOR_FAIL:
      return { ...state, color: payload };
    default:
      return { ...state };
  }
};

export default ColorReducer;
