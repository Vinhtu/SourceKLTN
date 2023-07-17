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

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const BrandReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_BRAND_SUCCESS:
      return { ...state, brandList: payload };
    case GET_ALL_BRAND_FAIL:
      return { ...state };

    case GET_ALL_BRAND_ADMIN_SUCCESS:
      return { ...state, brandAdminList: payload };
    case GET_ALL_BRAND_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_BRAND_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, brandAdminAccountList: payload };
    case GET_ALL_BRAND_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_BRAND_DETAIL_SUCCESS:
      return { ...state, brandDetail: payload };
    case GET_BRAND_DETAIL_FAIL:
      return { ...state };
    case SEARCH_BRAND_SUCCESS:
      return { ...state, brandListSearch: payload };
    case SEARCH_BRAND_FAIL:
      return { ...state };
    case POST_BRAND_SUCCESS:
      return { ...state, isPostBrand: true };
    case POST_BRAND_FAIL:
      return { ...state, isPostBrand: false };
    case PUT_BRAND_SUCCESS:
      return { ...state, isPutBrand: true };
    case PUT_BRAND_FAIL:
      return { ...state, isPutBrand: false };
    case DELETE_BRAND_SUCCESS:
      return { ...state, brand: payload };
    case DELETE_BRAND_FAIL:
      return { ...state, brand: payload };
    default:
      return { ...state };
  }
};

export default BrandReducer;
