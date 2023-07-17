import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { GetAccount, LoginX } from '../../redux/actions/accounts';

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  MenuItem,
  Pagination,
} from '@mui/material';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';

const ForgetPassword = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = React.useState({
    username: 'vinhtu125@gmail.com',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    dispatch(LoginX(dataLogin));
    navigate('/');
  };
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_login}>
        <Box className={classes.box_form_login}>
          <Box className={classes.form_login}>
            <input
              type="text"
              id="username"
              placeholder={`${t('login.placeholder_username')}`}
              value={dataLogin.username}
              onChange={handleDataLogin}
              className={classes.input_login}
            />
            <Box className={classes.btn_login}>
              {' '}
              {t('login.btn_get_password')}
            </Box>
          </Box>
          <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
            {t('login.btn_sub_get_password')}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default ForgetPassword;
