import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { LoginX, RegisterAccount } from '../../redux/actions/accounts';

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

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = React.useState({
    fullname: 'abc',
    username: 'vinhtu125@gmail.com',
    password: '123456',
    phone: '123',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };
  const { isPostAccount } = useSelector((state) => state.account);

  const [errUsername, setErrUsername] = React.useState('');
  const [errPassword, setErrPassword] = React.useState('');
  const [errText, setErrText] = React.useState('');

  const [stateRegister, setStateRegister] = React.useState('');

  const onLogin = () => {
    // dispatch(LoginX(dataLogin));
    navigate('/login');
  };
  const toRegister = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !(
        dataLogin.fullname === '' ||
        dataLogin.username === '' ||
        dataLogin.password === '' ||
        dataLogin.phone === ''
      )
    ) {
      if (re.test(dataLogin.username)) {
        setErrUsername('');
        if (dataLogin.password.length > 5 && dataLogin.username.length <= 20) {
          dispatch(RegisterAccount(dataLogin));
          setErrPassword('');
          setErrUsername('');
          setErrText('');
        } else {
          setErrPassword('Password từ 6-20 ký tự');
        }
      } else {
        setErrUsername('Tên đăng nhập phải là gmail');
      }
    } else {
      setErrText('Thông tin không được để trống');
    }
  };

  // useEffect(() => {
  //   if (accountLogin) {
  //     navigate('/');
  //   } else if (accountLogin === 'fail') {
  //     setStateLogin('Username or password valid !');
  //   }
  // }, [accountLogin]);

  const toForgetPassword = () => {
    navigate('/forget-password');
  };

  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb sub1="Register" />
      <Box className={classes.container_login}>
        <Box className={classes.box_form_login}>
          <input
            type="text"
            id="fullname"
            placeholder={`${t('login.placeholder_name')}`}
            value={dataLogin.fullname}
            onChange={handleDataLogin}
            className={classes.input_login}
          />

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
            type="text"
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
            className={classes.input_login}
            onChange={handleDataLogin}
          />
          <input
            type="number"
            id="phone"
            placeholder="Nhập số điện thoại"
            value={dataLogin.phone}
            onChange={handleDataLogin}
            className={classes.input_login}
          />
          {isPostAccount === 'success' && (
            <Typography
              variant="body1"
              color="text.success"
              sx={{ marginBottom: 0.5 }}
            >
              Đăng ký thành công
            </Typography>
          )}
          {isPostAccount === 'fail' && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 0.5 }}
            >
              Đăng ký thất bại
            </Typography>
          )}
          {errText && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 0.5 }}
            >
              {errText}
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

export default Register;
