import React, { useEffect, useState } from 'react';
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
import NotificationAccountItem from '../../components/NotificationAccountItem';
import { useTranslation } from 'react-i18next';
import { GetNotificationAccount } from '../../redux/actions/notifications';
import usePagination from '../../components/Pagination';
const NotificationAccount = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = React.useState({
    username: 'vinhtu125@gmail.com',
    password: '123456',
  });

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    // dispatch(Login(dataLogin));
    navigate('/');
  };
  const { t, i18n } = useTranslation();

  const { notificationList, isPutNotification } = useSelector(
    (state) => state.notification,
  );

  useEffect(() => {
    dispatch(GetNotificationAccount(account_id, token));
  }, [isPutNotification]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(notificationList?.length / PER_PAGE);
  const _DATA = usePagination(
    notificationList ? notificationList : [],
    PER_PAGE,
  );
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    toTop();
  };
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });
  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="Notification">
          {_DATA.currentData().map((item) => {
            return <NotificationAccountItem data={item} />;
          })}
          <Box className={classes.box_pagination_comment}>
            <Box>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ cursor: 'pointer' }}
              >
                {t('account.mark_all_as_read')}
              </Typography>
            </Box>
            <Pagination
              color="secondary"
              shape="rounded"
              count={count}
              page={page}
              variant="outlined"
              onChange={handleChange}
            />
          </Box>
        </LayoutAccount>
      </Box>
    </Layout>
  );
};

export default NotificationAccount;
