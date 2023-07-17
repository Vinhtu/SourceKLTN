import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { LoginX, Register } from '../../redux/actions/accounts';

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

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accountLogout } = useSelector((state) => state.account);

  const [stateLogin, setStateLogin] = React.useState('');

  const [errUsername, setErrUsername] = React.useState('');
  const [errPassword, setErrPassword] = React.useState('');

  const { accountLogin } = useSelector((state) => state.account);
  const [dataLogin, setDataLogin] = React.useState({
    username: 'vinhtu125@gmail.com',
    password: '123456',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(dataLogin.username)) {
      setErrUsername('');
      if (dataLogin.password.length > 5 && dataLogin.username.length <= 20) {
        setErrPassword('');
        dispatch(LoginX(dataLogin));
      } else {
        setErrPassword('Password tu 6 - 20 ky tu');
      }
    } else {
      setErrUsername('Thong tin phai la email');
    }
  };
  const toRegister = () => {
    navigate('/register');
  };
  const toForgetPassword = () => {
    navigate('/forget-password');
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (accountLogin) {
      navigate('/');
    } else if (accountLogin === 'fail') {
      setStateLogin('Username or password valid !');
    }
  }, [accountLogin]);

  // useEffect(() => {
  //   if (accountLogout) {
  //     navigate('/login');
  //   }
  // }, [accountLogout]);

  return (
    <Layout>
      <Breadcrumb sub1="Login" />
      <Box className={classes.container_login}>
        <Box className={classes.box_form_login}>
          {errUsername && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 0.5 }}
            >
              {errUsername}
            </Typography>
          )}
          <input
            type="email"
            id="username"
            placeholder={`${t('login.placeholder_username')}`}
            value={dataLogin.username}
            onChange={handleDataLogin}
            className={classes.input_login}
          />
          {errPassword && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 0.5 }}
            >
              {errPassword}
            </Typography>
          )}

          <input
            type="password"
            id="password"
            placeholder={`${t('login.placeholder_password')}`}
            value={dataLogin.password}
            className={classes.input_login_password}
            onChange={handleDataLogin}
          />
          {stateLogin && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 0.5 }}
            >
              {stateLogin}
            </Typography>
          )}
          <Box className={classes.box_btn_form}>
            <Box onClick={() => onLogin()} className={classes.btn_login}>
              {' '}
              {t('login.btn_login')}
            </Box>
            <Box className={classes.btn_register} onClick={() => toRegister()}>
              {' '}
              {t('login.btn_register')}
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography
              color="primary"
              onClick={() => toForgetPassword()}
              sx={{ cursor: 'pointer' }}
            >
              {t('login.forget_password')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
