import axios from 'axios';
import {
  SEARCH_CHARACTER_SUCCESS,
  SEARCH_CHARACTER_FAIL,
} from '../constants/searchs';
import action from './action';

export const SearchCharacter = (x) => {
  const body = { character: x };
  console.log(body, 'body');
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/search/search-character`, body)
      .then((res) => {
        dispatch(action(SEARCH_CHARACTER_SUCCESS, res.data));
      })
      .catch((err) => {
        const payment = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_CHARACTER_FAIL, payment));
      });
  };
};
