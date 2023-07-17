import {
  SET_NOTE,
  SET_LEANGUAGE,
  GET_PROVINCE_SUCCESS,
  GET_PROVINCE_FAIL,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAIL,
  GET_WARD_SUCCESS,
  GET_WARD_FAIL,
} from '../constants/utils';
import action from './action';
import axios from 'axios';

export const setNote = (open, type) => {
  const data = {
    open: open,
    type: type,
  };
  return (dispatch) => {
    dispatch(action(SET_NOTE, data));
  };
};

export const setLanguage = (language) => {
  return (dispatch) => {
    dispatch(action(SET_LEANGUAGE, language));
  };
};

export const GetProvinces = (token) => {
  return (dispatch) => {
    axios
      .get(
        `https://online-gateway.ghn.vn/shiip/public-api/master-data/province`,
        {
          headers: {
            token: `${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(action(GET_PROVINCE_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_PROVINCE_FAIL, notification));
      });
  };
};

export const GetDistricts = (token, province_id) => {
  return (dispatch) => {
    axios
      .post(
        `https://online-gateway.ghn.vn/shiip/public-api/master-data/district`,
        {
          province_id: parseInt(province_id),
        },
        {
          headers: {
            token: `${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(action(GET_DISTRICT_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_DISTRICT_FAIL, notification));
      });
  };
};

export const GetWards = (token, district_id) => {
  return (dispatch) => {
    axios
      .post(
        `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward`,
        {
          district_id: parseInt(district_id),
        },
        {
          headers: {
            token: `${token}`,
          },
        },
      )
      .then((res) => {
        dispatch(action(GET_WARD_SUCCESS, res.data));
      })
      .catch((err) => {
        const notification = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_WARD_FAIL, notification));
      });
  };
};
