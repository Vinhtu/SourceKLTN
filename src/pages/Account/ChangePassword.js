import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import {
  GetAccount,
  PutAccount,
  PutAccountPassword,
  Register,
} from '../../redux/actions/accounts';

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
import LayoutAccount from '../../components/LayoutAccount';
import { useTranslation } from 'react-i18next';

const ChangePassword = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataAccount, setDataLogin] = React.useState({
    passwordLast: '',
    password: '',
    confirmPasswordNew: '',
  });

  const { isPutAccount, isPutPassword, accountDetail } = useSelector(
    (state) => state.account,
  );

  const [errorLogin, setErrorLogin] = React.useState(null);
  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch, isPutPassword]);

  const handleDataAccount = (e) => {
    setDataLogin({ ...dataAccount, [e.target.id]: e.target.value });
  };

  const editInfoAccount = () => {
    if (
      !(
        dataAccount.passwordLast === '' ||
        dataAccount.password === '' ||
        dataAccount.confirmPasswordNew === ''
      )
    ) {
      if (dataAccount.passwordLast === accountDetail.password) {
        if (dataAccount.password === dataAccount.confirmPasswordNew) {
          dispatch(PutAccountPassword(account_id, dataAccount, token));
          setErrorLogin(null);
          setDataLogin({
            ...dataAccount,
            passwordLast: '',
            password: '',
            confirmPasswordNew: '',
          });
        } else {
          setErrorLogin('Mật khẩu xác nhận phải giống !');
        }
      } else {
        setErrorLogin('Mật khẩu phải giống mật khẩu cũ !');
      }
    } else {
      setErrorLogin('Thông tin không được để trống !');
    }
  };

  // const onLogin = () => {
  //   let re =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   if (re.test(dataLogin.username)) {
  //     setErrUsername('');
  //     if (dataLogin.password.length > 5 && dataLogin.username.length <= 20) {
  //       setErrPassword('');
  //       dispatch(LoginX(dataLogin));
  //     } else {
  //       setErrPassword('Password tu 6 - 20 ky tu');
  //     }
  //   } else {
  //     setErrUsername('Thong tin phai la email');
  //   }
  // };

  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="ChangePassword">
          {' '}
          <Box className={classes.head_body_account}>
            <Typography variant="h2">
              {' '}
              {t('account.change_password')}
            </Typography>
          </Box>
          <Box className={classes.content_body_account}>
            <Box className={classes.box_form_login}>
              <input
                type="text"
                id="passwordLast"
                placeholder={`${t('account.input_password_last')}`}
                value={dataAccount.passwordLast}
                onChange={handleDataAccount}
                className={classes.input_login}
              />
              <input
                type="text"
                id="password"
                placeholder={`${t('account.input_password_new')}`}
                value={dataAccount.password}
                className={classes.input_login}
                onChange={handleDataAccount}
              />
              <input
                type="text"
                id="confirmPasswordNew"
                placeholder={`${t('account.input_comform_password_new')}`}
                value={dataAccount.confirmPasswordNew}
                className={classes.input_login}
                onChange={handleDataAccount}
              />

              {errorLogin ? (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  {errorLogin}
                </Typography>
              ) : isPutPassword === 'success' ? (
                <Typography
                  variant="body1"
                  color="text.success"
                  sx={{ marginBottom: 1 }}
                >
                  Thay doi thanh cong !
                </Typography>
              ) : isPutPassword === 'fail' ? (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  Thay doi that bai !
                </Typography>
              ) : null}

              <Box className={classes.box_btn_form}>
                <Box
                  onClick={() => editInfoAccount()}
                  className={classes.btn_login}
                >
                  {' '}
                  {t('account.btn_change_password')}
                </Box>
              </Box>
            </Box>
          </Box>
        </LayoutAccount>
      </Box>
    </Layout>
  );
};

export default ChangePassword;
