import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import ProductCartItem from '../../components/ProductCartItem';
import Breadcrumb from '../../components/Breadcrumb';
import { GetCartAccount, GetCarts } from '../../redux/actions/carts';
import { useNavigate } from 'react-router-dom';
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
import colors from '../../lib/colors';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import './style.css';
import useStyles from './styles';
import { LocationOn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
const CartPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModel, setOpenModel] = React.useState(false);
  const { cartList } = useSelector((state) => state.cart);
  const { accountDetail } = useSelector((state) => state.account);
  const { isPostCartItem } = useSelector((state) => state.cartitem);
  const { isPutCartItem } = useSelector((state) => state.cartitem);
  const { isDeleteCartItem } = useSelector((state) => state.cartitem);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [selectVoucher, setSelectVoucher] = React.useState();

  // useEffect(() => {
  //   dispatch(Get());
  // }, [dispatch]);

  const handleCheckout = () => {
    if (accountDetail != null) {
      if (accountDetail.streetAddress != null) {
        navigate('/checkout', {
          state: { accountDetail, voucher: selectVoucher, cartList },
        });
      } else {
        setOpenModel(true);
      }
    }
  };
  const saveAddress = () => {
    setOpenModel(false);
  };

  const setSelect = (item) => {
    setSelectVoucher(item);
  };

  const myFunction = () => {
    var x = document.getElementById('mySelect').value;
    setSelectVoucher(x);
  };

  const toCheckout = () => {
    navigate('/checkout');
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPostCartItem]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPutCartItem]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isDeleteCartItem]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });
  return (
    <Layout>
      {cartList?.data.length > 0 && (
        <>
          {openModel && (
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                opacity: 1,
                alignItems: 'center',
                zIndex: 999,
              }}
            >
              <div
                style={{
                  width: 600,
                  height: 500,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  opacity: 1,
                  padding: 16,
                }}
              >
                <div onClick={() => saveAddress()}> Save</div>
              </div>
            </div>
          )}
          <Breadcrumb breadcrumb="Cart" />
          <Box className={classes.container_cart}>
            <Box className={classes.container_left_cart}>
              <table className={classes.table_cart}>
                <thead>
                  <tr className={classes.tr_table_cart}>
                    <th className={classes.th_product}>
                      {' '}
                      <Typography variant="subtitle1">
                        {t('cart.txt_td_product')}
                      </Typography>
                    </th>
                    <th className={classes.th_filter}>
                      {' '}
                      <Typography variant="subtitle1">
                        {t('cart.txt_td_price')}
                      </Typography>
                    </th>
                    <th className={classes.th_filter}>
                      <Typography variant="subtitle1">
                        {t('cart.txt_td_amount')}
                      </Typography>
                    </th>
                    <th className={classes.th_filter}>
                      <Typography variant="subtitle1">
                        {t('cart.txt_td_total_price')}
                      </Typography>
                    </th>
                    <th className={classes.th_filter}>
                      <Typography variant="subtitle1">
                        {t('cart.txt_td_delete')}
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartList &&
                    cartList.data[0].cartitem.map((item) => (
                      <ProductCartItem data={item} />
                    ))}
                </tbody>
              </table>
              <Box></Box>
            </Box>
            <Box className={classes.container_right_cart}>
              <Box className={classes.head_right_cart}>
                <Typography variant="subtitle2" color="text.white">
                  {t('cart.total_product')}
                </Typography>
              </Box>
              <Box sx={{ padding: 2 }}>
                {/* <Box className={classes.box_address_cart}>
              <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                {t('cart.address')}
              </Typography>
              <Box className={classes.box_address_ship}>
                <LocationOn
                  sx={{ fontSize: 14, marginRight: 1, color: colors.gray }}
                />
                <Typography variant="subtitle1" color="text.gray">
                  {' '}
                  Ho Chi Minh
                </Typography>
              </Box>
            </Box> */}
                {/* <Box className={classes.horizontal_devider}></Box> */}
                <Box className={classes.content_total_cart}>
                  <Box className={classes.box_item_total_cart}>
                    <Typography variant="subtitle2">
                      {t('cart.total_product')}
                    </Typography>
                    <Typography variant="subtitle2">
                      {cartList && cartList.data[0].amount}
                    </Typography>
                  </Box>
                  <Box className={classes.box_item_total_cart}>
                    <Typography variant="subtitle2" color="primary">
                      {t('cart.vat')}
                    </Typography>
                    <Typography variant="subtitle2">0</Typography>
                  </Box>
                  <Box className={classes.box_item_total_cart}>
                    <Typography variant="subtitle2">
                      {t('cart.total_price')}
                    </Typography>
                    <Typography variant="subtitle2">
                      {ConvertVND(cartList && cartList.data[0].t_price)}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  className={classes.btn_total_cart}
                  onClick={() => toCheckout()}
                >
                  {/* <Typography variant="subtitle1" color="text.white"> */}
                  {t('cart.btn_checkout')}
                  {/* </Typography> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Layout>
  );
};

export default CartPage;
