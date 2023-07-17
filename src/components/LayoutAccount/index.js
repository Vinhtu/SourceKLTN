import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
import { useTranslation } from 'react-i18next';
import { GetAccount } from '../../redux/actions/accounts';

const LayoutAccount = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toInfoAccount = () => {
    navigate('/account');
  };
  const toNotification = () => {
    navigate('/account/notification');
  };
  const toChangePassword = () => {
    navigate('/account/change-password');
  };
  const toAccountPayment = () => {
    navigate('/account/payment');
  };
  const toOrderPending = () => {
    navigate('/account/order-pending');
  };
  const toOrderRun = () => {
    navigate('/account/order-run');
  };
  const toOrderBuy = () => {
    navigate('/account/order-buy');
  };
  const toSetting = () => {
    navigate('/account/setting');
  };
  const toAccountSale = () => {
    navigate('/account/setting');
  };

  const { t, i18n } = useTranslation();

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { accountDetail } = useSelector((state) => state.account);
  const { isPutComment } = useSelector((state) => state.comment);

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [isPutComment]);

  return (
    <Box className={classes.container_layout_account}>
      <Box className={classes.container_left_layout_account}>
        <Box className={classes.box_info_account}>
          <img
            src={
              accountDetail?.avatar
                ? accountDetail?.avatar
                : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            className={classes.img_account}
          />
          <Typography variant="subtitle2">{accountDetail?.fullname}</Typography>
        </Box>
        <Box className={classes.horizontal_devider}></Box>
        <Box className={classes.box_body_menu_account}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h3"> {t('account.my_account')}</Typography>
            <Box sx={{ marginLeft: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toInfoAccount()}
                color={props.breadcrumb === 'Account' ? 'text.success' : ''}
              >
                {t('account.info_account')}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toNotification()}
                color={
                  props.breadcrumb === 'Notification' ? 'text.success' : ''
                }
              >
                {t('account.note')}
              </Typography>
              <Typography
                variant="subtitle2"
                color={
                  props.breadcrumb === 'ChangePassword' ? 'text.success' : ''
                }
                sx={{ cursor: 'pointer' }}
                onClick={() => toChangePassword()}
              >
                {t('account.change_password')}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h3">{t('account.pay')}</Typography>
            <Box sx={{ marginLeft: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toAccountPayment()}
                color={
                  props.breadcrumb === 'PaymentAccount' ? 'text.success' : ''
                }
              >
                {t('account.payment')}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h3">{t('account.order')}</Typography>
            <Box sx={{ marginLeft: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toOrderPending()}
                color={
                  props.breadcrumb === 'OrderPending' ? 'text.success' : ''
                }
              >
                {t('account.order_pending')}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toOrderRun()}
                color={props.breadcrumb === 'OrderRun' ? 'text.success' : ''}
              >
                {t('account.order_run')}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ cursor: 'pointer' }}
                onClick={() => toOrderBuy()}
                color={props.breadcrumb === 'OrderBuy' ? 'text.success' : ''}
              >
                {t('account.order_buy')}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="h3"
              onClick={() => toSetting()}
              color={props.breadcrumb === 'Setting' ? 'text.success' : ''}
            >
              {t('account.setting')}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="h3"
              onClick={() => toAccountSale()}
              color={props.breadcrumb == 'BuyWith' ? 'text.success' : ''}
            >
              {t('account.sale_with_shop')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.container_right_layout_account}>
        {' '}
        {props.children}
      </Box>
    </Box>
  );
};

export default LayoutAccount;
