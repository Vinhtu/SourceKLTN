import {
  GET_ALL_EVALUATE_SUCCESS,
  GET_ALL_EVALUATE_FAIL,
  GET_ALL_EVALUATE_ADMIN_SUCCESS,
  GET_ALL_EVALUATE_ADMIN_FAIL,
  GET_ALL_EVALUATE_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_EVALUATE_ADMIN_ACCOUNT_FAIL,
  GET_EVALUATE_DETAIL_SUCCESS,
  GET_EVALUATE_DETAIL_FAIL,
  SEARCH_EVALUATE_SUCCESS,
  SEARCH_EVALUATE_FAIL,
  POST_EVALUATE_SUCCESS,
  POST_EVALUATE_FAIL,
  PUT_EVALUATE_SUCCESS,
  PUT_EVALUATE_FAIL,
  DELETE_EVALUATE_SUCCESS,
  DELETE_EVALUATE_FAIL,
  START_QUERY,
  END_QUERY,
} from '../constants/evaluates';

const intialState = {
  isPostEvaluate: false,
  isPutEvaluate: false,
  isDeleteEvaluate: false,
};

const EvaluateReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return {
        ...state,
        isPostEvaluate: false,
        isPutEvaluate: false,
        isDeleteEvaluate: false,
      };
    case END_QUERY:
      return {
        ...state,
        isPostEvaluate: false,
        isPutEvaluate: false,
        isDeleteEvaluate: false,
      };

    case GET_ALL_EVALUATE_SUCCESS:
      return { ...state, evaluateList: payload };
    case GET_ALL_EVALUATE_FAIL:
      return { ...state };

    case GET_ALL_EVALUATE_ADMIN_SUCCESS:
      return { ...state, evaluateAdminList: payload };
    case GET_ALL_EVALUATE_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_EVALUATE_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, evaluateAdminAccountList: payload };
    case GET_ALL_EVALUATE_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_EVALUATE_DETAIL_SUCCESS:
      return { ...state, evaluateDetail: payload };
    case GET_EVALUATE_DETAIL_FAIL:
      return { ...state };
    case SEARCH_EVALUATE_SUCCESS:
      return { ...state, evaluateListSearch: payload };
    case SEARCH_EVALUATE_FAIL:
      return { ...state };
    case POST_EVALUATE_SUCCESS:
      return { ...state, isPostEvaluate: payload };
    case POST_EVALUATE_FAIL:
      return { ...state, isPostEvaluate: payload };
    case PUT_EVALUATE_SUCCESS:
      return { ...state, isPutEvaluate: payload };
    case PUT_EVALUATE_FAIL:
      return { ...state, isPutEvaluate: payload };
    case DELETE_EVALUATE_SUCCESS:
      return { ...state, isDeleteEvaluate: payload };
    case DELETE_EVALUATE_FAIL:
      return { ...state, isDeleteEvaluate: payload };
    default:
      return { ...state };
  }
};

export default EvaluateReducer;
