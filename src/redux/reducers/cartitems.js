import {
  START_QUERY,
  END_QUERY,
  GET_ALL_CARTITEM_SUCCESS,
  GET_ALL_CARTITEM_FAIL,
  GET_ALL_CARTITEM_ADMIN_SUCCESS,
  GET_ALL_CARTITEM_ADMIN_FAIL,
  GET_ALL_CARTITEM_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_CARTITEM_ADMIN_ACCOUNT_FAIL,
  GET_CARTITEM_DETAIL_SUCCESS,
  GET_CARTITEM_DETAIL_FAIL,
  SEARCH_CARTITEM_SUCCESS,
  SEARCH_CARTITEM_FAIL,
  POST_CARTITEM_SUCCESS,
  POST_CARTITEM_FAIL,
  PUT_CARTITEM_SUCCESS,
  PUT_CARTITEM_FAIL,
  DELETE_CARTITEM_SUCCESS,
  DELETE_CARTITEM_FAIL,
} from '../constants/cartitems';

const intialState = {
  isPostCartItem: false,
  isPutCartItem: false,
  isDeleteCartItem: false,
};

const CartItemReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return {
        ...state,
        isPostCartItem: false,
        isPutCartItem: false,
        isDeleteCartItem: false,
      };
    case END_QUERY:
      return {
        ...state,
        isPostCartItem: false,
        isPostCartItem: false,
        isDeleteCartItem: false,
      };
    case GET_ALL_CARTITEM_SUCCESS:
      return { ...state, cartitemList: payload };
    case GET_ALL_CARTITEM_FAIL:
      return { ...state };

    case GET_ALL_CARTITEM_ADMIN_SUCCESS:
      return { ...state, cartitemAdminList: payload };
    case GET_ALL_CARTITEM_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_CARTITEM_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, cartitemAdminAccountList: payload };
    case GET_ALL_CARTITEM_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_CARTITEM_DETAIL_SUCCESS:
      return { ...state, cartitemDetail: payload };
    case GET_CARTITEM_DETAIL_FAIL:
      return { ...state };
    case SEARCH_CARTITEM_SUCCESS:
      return { ...state, cartitemListSearch: payload };
    case SEARCH_CARTITEM_FAIL:
      return { ...state };
    case POST_CARTITEM_SUCCESS:
      return { ...state, isPostCartItem: true };
    case POST_CARTITEM_FAIL:
      return { ...state, isPostCartItem: false };
    case PUT_CARTITEM_SUCCESS:
      return { ...state, isPutCartItem: true };
    case PUT_CARTITEM_FAIL:
      return { ...state, isPutCartItem: false };
    case DELETE_CARTITEM_SUCCESS:
      return { ...state, isDeleteCartItem: true };
    case DELETE_CARTITEM_FAIL:
      return { ...state, isDeleteCartItem: false };
    default:
      return { ...state };
  }
};

export default CartItemReducer;
