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
import { GetOrderAccount } from '../../redux/actions/orders';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import usePagination from '../../components/Pagination';
import colors from '../../lib/colors';
import { PostEvaluate } from '../../redux/actions/evaluates';
import { setNote } from '../../redux/actions/utils';
const OrderAccountBuy = (props) => {
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
  const { isPostEvaluate } = useSelector((state) => state.evaluate);

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
      if (orderDetail[i].status === 'Complete') {
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

  const [selectedValue, setSelectedValue] = React.useState('1 Sao');
  const handleChangeOrder = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectItem, setSelectItem] = React.useState({ data: '' });

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeOrder,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const deleteOrderItem = (item) => {
    setSelectItem({
      ...selectItem,

      data: item,
      account_id: account_id,
    });
    setCancelOrder(true);
  };
  const ToEvaluate = () => {
    selectItem.star = selectedValue;
    dispatch(PostEvaluate(selectItem));
    setCancelOrder(false);
  };

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="OrderBuy">
          {' '}
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
                  return (
                    <Box display="flex" alignItems="center">
                      <Box
                        mb={1}
                        mr={1}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => deleteOrderItem(orderItem)}
                      >
                        <Typography color="text.secondary">Đánh giá</Typography>
                      </Box>{' '}
                      <ProductCheckoutItem data={orderItem} account />
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
              <Typography variant="body1">1 Sao</Typography>
              <Radio
                {...controlProps('1 Sao')}
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
              <Typography variant="body1">2 Sao</Typography>
              <Radio
                {...controlProps('2 Sao')}
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
              <Typography variant="body1">3 Sao</Typography>
              <Radio
                {...controlProps('3 Sao')}
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
              <Typography variant="body1">4 Sao</Typography>
              <Radio
                {...controlProps('4 Sao')}
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
              <Typography variant="body1">5 Sao</Typography>
              <Radio
                {...controlProps('5 Sao')}
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
            <Box className={classes.btn_save} onClick={() => ToEvaluate()}>
              {' '}
              Đánh giá
            </Box>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

export default OrderAccountBuy;
