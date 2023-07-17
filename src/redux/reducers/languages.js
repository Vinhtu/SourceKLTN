import {
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_LANGUAGE_FAIL,
} from '../constants/languages';

const LanguageReducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE_SUCCESS:
      return { ...state, language: payload };
    case CHANGE_LANGUAGE_FAIL:
      return { ...state, language: 'vi' };
    default:
      return { ...state };
  }
};

export default LanguageReducer;
