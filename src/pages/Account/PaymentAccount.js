import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { Register } from '../../redux/actions/accounts';

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

const PaymentAccount = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = React.useState({
    username: 'vinhtu125@gmail.com',
    password: '123456',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    // dispatch(Login(dataLogin));
    navigate('/');
  };
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="PaymentAccount">
          {' '}
          <Box className={classes.head_body_account}>
            <Typography variant="h2"> {t('account.payment')}</Typography>
          </Box>
          <Box className={classes.content_body_account}>
            <Box className={classes.box_add_payment}>
              <Typography className={classes.txt_add_payment}>
                {t('account.add_account_payment')}
              </Typography>
            </Box>
            <Box className={classes.box_payment}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{ marginBottom: 2 }}
                  color="text.success"
                >
                  TRUONG NGOC VINH TU
                </Typography>
                <Typography variant="h2" sx={{ marginBottom: 2 }}>
                  9234 2344 9435 3562
                </Typography>
                <Box className={classes.box_time_code} sx={{ marginBottom: 1 }}>
                  <Typography>12/02</Typography>
                  <Typography>ZIP: 898</Typography>
                </Box>
              </Box>
              <Box className={classes.box_edit_payment}>
                <Box></Box>
                <Box>
                  <Typography color="primary" sx={{ fontStyle: 'italic' }}>
                    {t('account.edit')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </LayoutAccount>
      </Box>
    </Layout>
  );
};

export default PaymentAccount;
