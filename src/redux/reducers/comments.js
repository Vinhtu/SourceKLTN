import {
  START_QUERY,
  END_QUERY,
  GET_ALL_COMMENT_SUCCESS,
  GET_ALL_COMMENT_FAIL,
  GET_ALL_COMMENT_ADMIN_SUCCESS,
  GET_ALL_COMMENT_ADMIN_FAIL,
  GET_ALL_COMMENT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_COMMENT_ADMIN_ACCOUNT_FAIL,
  GET_COMMENT_DETAIL_SUCCESS,
  GET_COMMENT_DETAIL_FAIL,
  SEARCH_COMMENT_SUCCESS,
  SEARCH_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  PUT_COMMENT_SUCCESS,
  PUT_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
} from '../constants/comments';

const intialState = {
  isPutComment: false,
};

const CommentReducer = (state = intialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case START_QUERY:
      return { ...state, isPutComment: false };
    case END_QUERY:
      return { ...state, isPutComment: false };
    case GET_ALL_COMMENT_SUCCESS:
      return { ...state, commentList: payload };
    case GET_ALL_COMMENT_FAIL:
      return { ...state };

    case GET_ALL_COMMENT_ADMIN_SUCCESS:
      return { ...state, commentAdminList: payload };
    case GET_ALL_COMMENT_ADMIN_FAIL:
      return { ...state };
    case GET_ALL_COMMENT_ADMIN_ACCOUNT_SUCCESS:
      return { ...state, commentAdminAccountList: payload };
    case GET_ALL_COMMENT_ADMIN_ACCOUNT_FAIL:
      return { ...state };

    case GET_COMMENT_DETAIL_SUCCESS:
      return { ...state, commentDetail: payload };
    case GET_COMMENT_DETAIL_FAIL:
      return { ...state };
    case SEARCH_COMMENT_SUCCESS:
      return { ...state, commentListSearch: payload };
    case SEARCH_COMMENT_FAIL:
      return { ...state };
    case POST_COMMENT_SUCCESS:
      return { ...state, isPostComment: true };
    case POST_COMMENT_FAIL:
      return { ...state, isPostComment: false };
    case PUT_COMMENT_SUCCESS:
      return { ...state, isPutComment: true };
    case PUT_COMMENT_FAIL:
      return { ...state, isPutComment: false };
    case DELETE_COMMENT_SUCCESS:
      return { ...state, comment: payload };
    case DELETE_COMMENT_FAIL:
      return { ...state, comment: payload };
    default:
      return { ...state };
  }
};

export default CommentReducer;
