import {
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_ADMIN_SUCCESS,
  GET_ALL_PRODUCT_ADMIN_FAIL,
  GET_ALL_PRODUCT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_PRODUCT_ADMIN_ACCOUNT_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAIL,
  PUT_PRODUCT_SUCCESS,
  PUT_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  GET_ALL_PRODUCT_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_CATEGORY_FAIL,
  GET_ALL_PRODUCT_TOP_SALE_SUCCESS,
  GET_ALL_PRODUCT_TOP_SALE_FAIL,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  START_QUERY,
  END_QUERY,
  GET_RECOMMENDER_PRODUCT_SUCCESS,
  GET_RECOMMENDER_PRODUCT_FAIL,
} from '../constants/products';

const intialState = {
  postComment: false,
};

const ProductReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return { ...state, postComment: false };
    case END_QUERY:
      return { ...state, postComment: false };
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, productList: payload };
    case GET_ALL_PRODUCT_FAIL:
      return { ...state };

    case GET_ALL_PRODUCT_CATEGORY_SUCCESS:
      return { ...state, productCategoryList: payload };
    case GET_ALL_PRODUCT_CATEGORY_FAIL:
      return { ...state };

    case GET_ALL_PRODUCT_TOP_SALE_SUCCESS:
      return { ...state, productTopSale: payload };
    case GET_ALL_PRODUCT_TOP_SALE_FAIL:
      return { ...state };

    case GET_RECOMMENDER_PRODUCT_SUCCESS:
      return { ...state, productRecommenderList: payload };
    case GET_RECOMMENDER_PRODUCT_FAIL:
      return { ...state };

    case GET_ALL_PRODUCT_ADMIN_SUCCESS:
      return { ...state, productAdminList: payload };
    case GET_ALL_PRODUCT_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_PRODUCT_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, productAdminAccountList: payload };
    case GET_ALL_PRODUCT_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case POST_COMMENT_SUCCESS:
      return { ...state, postComment: true };
    case POST_COMMENT_FAIL:

    case GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { ...state };
    case SEARCH_PRODUCT_SUCCESS:
      return { ...state, productListSearch: payload };
    case SEARCH_PRODUCT_FAIL:
      return { ...state };
    case POST_PRODUCT_SUCCESS:
      return { ...state, isPostProduct: true };
    case POST_PRODUCT_FAIL:
      return { ...state, isPostProduct: false };
    case PUT_PRODUCT_SUCCESS:
      return { ...state, isPutProduct: true };
    case PUT_PRODUCT_FAIL:
      return { ...state, isPutProduct: false };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, product: payload };
    case DELETE_PRODUCT_FAIL:
      return { ...state, product: payload };
    default:
      return { ...state };
  }
};

export default ProductReducer;
