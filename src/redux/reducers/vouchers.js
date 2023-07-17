import {
  GET_ALL_VOUCHER_SUCCESS,
  GET_ALL_VOUCHER_FAIL,
  GET_ALL_VOUCHER_ADMIN_SUCCESS,
  GET_ALL_VOUCHER_ADMIN_FAIL,
  GET_ALL_VOUCHER_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_VOUCHER_ADMIN_ACCOUNT_FAIL,
  GET_VOUCHER_DETAIL_SUCCESS,
  GET_VOUCHER_DETAIL_FAIL,
  SEARCH_VOUCHER_SUCCESS,
  SEARCH_VOUCHER_FAIL,
  POST_VOUCHER_SUCCESS,
  POST_VOUCHER_FAIL,
  PUT_VOUCHER_SUCCESS,
  PUT_VOUCHER_FAIL,
  DELETE_VOUCHER_SUCCESS,
  DELETE_VOUCHER_FAIL,
} from '../constants/vouchers';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const VoucherReducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_VOUCHER_SUCCESS:
      return { ...state, voucherList: payload };
    case GET_ALL_VOUCHER_FAIL:
      return { ...state };

    case GET_ALL_VOUCHER_ADMIN_SUCCESS:
      return { ...state, voucherAdminList: payload };
    case GET_ALL_VOUCHER_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_VOUCHER_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, voucherAdminAccountList: payload };
    case GET_ALL_VOUCHER_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_VOUCHER_DETAIL_SUCCESS:
      return { ...state, voucherDetail: payload };
    case GET_VOUCHER_DETAIL_FAIL:
      return { ...state, voucherDetail: false };
    case SEARCH_VOUCHER_SUCCESS:
      return { ...state, voucherListSearch: payload };
    case SEARCH_VOUCHER_FAIL:
      return { ...state };
    case POST_VOUCHER_SUCCESS:
      return { ...state, isPostVoucher: true };
    case POST_VOUCHER_FAIL:
      return { ...state, isPostVoucher: false };
    case PUT_VOUCHER_SUCCESS:
      return { ...state, isPutVoucher: true };
    case PUT_VOUCHER_FAIL:
      return { ...state, isPutVoucher: false };
    case DELETE_VOUCHER_SUCCESS:
      return { ...state, voucher: payload };
    case DELETE_VOUCHER_FAIL:
      return { ...state, voucher: payload };
    default:
      return { ...state };
  }
};

export default VoucherReducer;
