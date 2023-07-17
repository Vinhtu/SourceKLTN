import {
  SEARCH_CHARACTER_SUCCESS,
  SEARCH_CHARACTER_FAIL,
} from '../constants/searchs';

// const intialState = {
// 	isPostNOTIFICATION: false,
// };

const SearchReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_CHARACTER_SUCCESS:
      return { ...state, dataSearch: payload };
    case SEARCH_CHARACTER_FAIL:
      return { ...state };

    default:
      return { ...state };
  }
};

export default SearchReducer;
