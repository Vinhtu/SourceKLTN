import {
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_ADMIN_SUCCESS,
  GET_ALL_CATEGORY_ADMIN_FAIL,
  GET_ALL_CATEGORY_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_CATEGORY_ADMIN_ACCOUNT_FAIL,
  GET_CATEGORY_DETAIL_SUCCESS,
  GET_CATEGORY_DETAIL_FAIL,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_FAIL,
  POST_CATEGORY_SUCCESS,
  POST_CATEGORY_FAIL,
  PUT_CATEGORY_SUCCESS,
  PUT_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
} from '../constants/categorys';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const CategoryReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CATEGORY_SUCCESS:
      return { ...state, categoryList: payload };
    case GET_ALL_CATEGORY_FAIL:
      return { ...state };

    case GET_ALL_CATEGORY_ADMIN_SUCCESS:
      return { ...state, categoryAdminList: payload };
    case GET_ALL_CATEGORY_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_CATEGORY_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, categoryAdminAccountList: payload };
    case GET_ALL_CATEGORY_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_CATEGORY_DETAIL_SUCCESS:
      return { ...state, categoryDetail: payload };
    case GET_CATEGORY_DETAIL_FAIL:
      return { ...state };
    case SEARCH_CATEGORY_SUCCESS:
      return { ...state, categoryListSearch: payload };
    case SEARCH_CATEGORY_FAIL:
      return { ...state };
    case POST_CATEGORY_SUCCESS:
      return { ...state, isPostCategory: true };
    case POST_CATEGORY_FAIL:
      return { ...state, isPostCategory: false };
    case PUT_CATEGORY_SUCCESS:
      return { ...state, isPutCategory: true };
    case PUT_CATEGORY_FAIL:
      return { ...state, isPutCategory: false };
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, category: payload };
    case DELETE_CATEGORY_FAIL:
      return { ...state, category: payload };
    default:
      return { ...state };
  }
};

export default CategoryReducer;
