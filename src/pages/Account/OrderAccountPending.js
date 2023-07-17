import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { Register } from '../../redux/actions/accounts';
import Modal from '@mui/material/Modal';
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
  Radio,
} from '@mui/material';
import useStyles from './styles';
import LayoutAccount from '../../components/LayoutAccount';
import userEvent from '@testing-library/user-event';
import {
  GetOrder,
  GetOrderAccount,
  PutCancelOrder,
} from '../../redux/actions/orders';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import colors from '../../lib/colors';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import usePagination from '../../components/Pagination';

const OrderAccountPending = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { orderDetail, isPutCancelOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(GetOrderAccount(account_id, token));
  }, [dispatch, isPutCancelOrder]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });

  const [dataOrder, setDataOrder] = React.useState([]);

  useEffect(() => {
    setDataOrder([]);

    for (let i = 0; i < orderDetail?.length; i += 1) {
      if (orderDetail[i].status === 'Pending') {
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

  const [cancelOrder, setCancelOrder] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState('Nhầm địa chỉ');
  const handleChangeOrder = (event) => {
    setSelectedValue(event.target.value);
  };

  const [selectItem, setSelectItem] = React.useState({ id: '', data: '' });

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeOrder,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const deleteOrderItem = (item) => {
    setSelectItem({ ...selectItem, id: item._id, data: item });
    setCancelOrder(true);
  };
  const ToCancelOrder = () => {
    dispatch(PutCancelOrder(selectItem.id, selectItem.data, token));
    setCancelOrder(false);
  };
  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="OrderPending">
          {_DATA.currentData().map((item) => {
            return (
              <Box sx={{ marginBottom: 2 }}>
                {item.status_pay === 'Đã thanh toán' ? null : (
                  <Box
                    mb={1}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => deleteOrderItem(item)}
                  >
                    <Typography color="text.secondary">Huỷ</Typography>
                  </Box>
                )}

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
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ width: '95%' }}>
                        <ProductCheckoutItem data={orderItem} account />
                      </Box>
                    </Box>
                  );
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
      <Modal
        open={cancelOrder}
        onClose={() => setCancelOrder(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.model_edit_address}>
          <Box>
            <Box className={classes.box_radio_type_pay}>
              <Typography variant="body1">Nhầm địa chỉ</Typography>
              <Radio
                {...controlProps('Nhầm địa chỉ')}
                size="20px"
                sx={{
                  color: colors.gray,
                  '&.Mui-checked': {
                    color: colors.primary,
                  },
                }}
              />
            </Box>
            <Box className={classes.box_radio_type_pay}>
              <Typography variant="body1">Sai mặt hàng</Typography>
              <Radio
                {...controlProps('Sai mặt hàng')}
                size="20px"
                sx={{
                  color: colors.gray,
                  '&.Mui-checked': {
                    color: colors.primary,
                  },
                }}
              />
            </Box>
            <Box className={classes.box_radio_type_pay}>
              <Typography variant="body1">Trùng đơn hàng</Typography>
              <Radio
                {...controlProps('Trùng đơn hàng')}
                size="20px"
                sx={{
                  color: colors.gray,
                  '&.Mui-checked': {
                    color: colors.primary,
                  },
                }}
              />
            </Box>
            <Box className={classes.box_radio_type_pay}>
              <Typography variant="body1">Lý do khác</Typography>
              <Radio
                {...controlProps('Lý do khác')}
                size="20px"
                sx={{
                  color: colors.gray,
                  '&.Mui-checked': {
                    color: colors.primary,
                  },
                }}
              />
            </Box>
          </Box>
          <Box mt={4} className={classes.box_btn}>
            <Box
              className={classes.btn_cancle}
              onClick={() => setCancelOrder(false)}
            >
              Trở về
            </Box>
            <Box className={classes.btn_save} onClick={() => ToCancelOrder()}>
              {' '}
              Huỷ đơn hàng
            </Box>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

export default OrderAccountPending;
