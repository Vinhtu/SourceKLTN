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
import { GetOrderAccount } from '../../redux/actions/orders';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import usePagination from '../../components/Pagination';

const OrderAccountRun = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { orderDetail } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(GetOrderAccount(account_id, token));
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });
  const [dataOrder, setDataOrder] = React.useState([]);

  useEffect(() => {
    setDataOrder([]);

    for (let i = 0; i < orderDetail?.length; i += 1) {
      if (orderDetail[i].status === 'Runing') {
        setDataOrder((current) => [...current, orderDetail[i]]);
      }
    }
  }, [orderDetail]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(dataOrder?.length / PER_PAGE);
  const _DATA = usePagination(dataOrder ? dataOrder : [], PER_PAGE);
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
        <LayoutAccount breadcrumb="OrderRun">
          {_DATA.currentData().map((item) => {
            return (
              <Box>
                <Typography sx={{ marginBottom: 0.5 }}>
                  Đơn hàng: {new Date(item.create_date).toLocaleDateString()}
                </Typography>
                <Typography sx={{ marginBottom: 0.5 }}>
                  Tổng tiền: {ConvertVND(item.t_price)}
                </Typography>
                <Typography sx={{ marginBottom: 0.5 }}>
                  Hình thức thanh toán: {item.type_pay}
                </Typography>
                <Typography sx={{ marginBottom: 0.5 }}>
                  Trang thái thanh toán: {item.status_pay}
                </Typography>
                {item.orderitem.map((orderItem) => {
                  return <ProductCheckoutItem data={orderItem} account />;
                })}
              </Box>
            );
          })}

          <Box className={classes.box_pagination_comment}>
            <Box></Box>
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

export default OrderAccountRun;
