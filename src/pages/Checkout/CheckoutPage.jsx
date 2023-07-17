import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { PostOrder } from '../../redux/actions/orders';
import Modal from '@mui/material/Modal';

import { GetCarts } from '../../redux/actions/carts';
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
  Radio,
} from '@mui/material';
import colors from '../../lib/colors';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import useStyles from './styles';
import { LocationOn } from '@mui/icons-material';
import ProductCartItem from '../../components/ProductCartItem';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import { useTranslation } from 'react-i18next';
import { GetAccount, PutAccountOrder } from '../../redux/actions/accounts';
import { GetVoucher } from '../../redux/actions/vouchers';
import Paypal from './Paypal';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import { Momo, Vnpay } from '../../redux/actions/payments';
import axios from 'axios';

var paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AXWrwDeP7g67oqX4Chgl-73CB8eAFK9pK1zawRMyK5RpMd6Yra3kHBawX5TbbDnDI-FyK8Z-YeeyLWix',
  client_secret:
    'EL9NSA--mJjdF6PEVFwNYPdmFwHkr6G6B9mUB-4bi-YtjZ5Za06cVQpH2vg4K7ZYvcuRtykU8kCsJ2ko',
});

const CheckoutPage = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { voucherDetail } = useSelector((state) => state.voucher);
  const { accountDetail, isPutAccount } = useSelector((state) => state.account);
  const { isPostOrder } = useSelector((state) => state.order);

  const { paymentMomo, paymentVnpay, isPostPayment } = useSelector(
    (state) => state.payment,
  );

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [voucher, setVoucher] = React.useState('');
  const [applyVoucher, setApplyVoucher] = React.useState({
    status: 'pending',
    voucher: {},
  });

  const [selectedValue, setSelectedValue] = React.useState(
    'Thanh toán khi nhận hàng',
  );
  const [totalPrice, setTotalPrice] = React
    .useState
    // parseInt(cartList.data[0]?.t_price) + parseInt(cartList.data[0]?.t_ship),
    ();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const checkout = () => {
    const body = {
      cartList,
      voucher: applyVoucher.voucher,
      typePay: selectedValue,
      statusPay: 'Chưa thanh toán',
      accountId: account_id,
      currency: 'VND',
      totalPrice:
        applyVoucher.status === 'true'
          ? parseInt(cartList?.data[0]?.t_price) +
            parseInt(cartList?.data[0]?.t_ship) -
            parseInt(applyVoucher.voucher.p_price)
          : parseInt(cartList?.data[0]?.t_price) +
            parseInt(cartList?.data[0]?.t_ship),
    };
    if (selectedValue === 'Thanh toán qua paypal') {
      // const navigate = useNavigate();
      navigate('/paypal', { state: body });
    } else if (selectedValue === 'Thanh toán qua momo') {
      // const axios = require('axios');

      // const momoEndpoint =
      //   'https://test-payment.momo.vn/gw_payment/transactionProcessor';

      // // Replace with your actual API credentials
      // const momoApiKey = 'F8BBA842ECF85';
      // const momoApiSecret = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';

      // // Payment information collected from the form
      // const amount = 100000;
      // const orderId = '123456';
      // const returnUrl = 'http://localhost:3000/checkout';

      // // Create a Unix timestamp for the request
      // const requestTime = Math.floor(Date.now() / 1000);

      // // Generate a unique request ID
      // const requestId = `your_prefix_${Date.now()}`;

      // // Create an object with the payment request parameters
      // const data = {
      //   partnerCode: momoApiKey,
      //   accessKey: momoApiKey,
      //   requestId: requestId,
      //   amount: amount,
      //   orderId: orderId,
      //   orderInfo: 'Payment for your order',
      //   returnUrl: returnUrl,
      //   notifyUrl: 'http://localhost:3000',
      //   requestType: 'captureMoMoWallet',
      //   signature: '',
      //   extraData: '',
      // };

      // // Create a signature for the request using SHA256 encryption
      // const rawSignature = `partnerCode=${data.partnerCode}&accessKey=${data.accessKey}&requestId=${data.requestId}&amount=${data.amount}&orderId=${data.orderId}&orderInfo=${data.orderInfo}&returnUrl=${data.returnUrl}&notifyUrl=${data.notifyUrl}&extraData=${data.extraData}`;
      // const signature = crypto
      //   .createHmac('sha256', momoApiSecret)
      //   .update(rawSignature)
      //   .digest('hex');
      // data.signature = signature;

      // // Send a POST request to the Momo API endpoint
      // axios
      //   .post(momoEndpoint, data)
      //   .then((response) => {
      //     // Redirect the user to the payment URL returned by Momo
      //     const paymentUrl = response.data.payUrl;
      //     res.redirect(paymentUrl);
      //   })
      //   .catch((error) => {
      //     console.log(error);

      //   });

      dispatch(Momo(body?.totalPrice));
    } else if (selectedValue === 'Thanh toán qua vnpay') {
      dispatch(Vnpay(body?.totalPrice));
    } else if (selectedValue === 'Thanh toán khi nhận hàng') {
      dispatch(PostOrder(body, token));
    }
  };
  const [editAddress, setEditAddress] = React.useState(false);

  const [openModel, setOpenModel] = React.useState(false);
  const saveAddress = () => {
    setOpenModel(false);
  };

  const { t, i18n } = useTranslation();

  const [dataAccount, setDataAccount] = React.useState({
    streetAddress: accountDetail?.streetAddress,
    wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
    cityAddress: accountDetail?.cityAddress,
    zipAddress: accountDetail?.zipAddress,
    cart: cartList && cartList?.data[0]?._id,
  });

  const handleDataAccount = (e) => {
    setDataAccount({ ...dataAccount, [e.target.id]: e.target.value });
  };

  const putAddress = () => {
    if (token) {
      dispatch(PutAccountOrder(account_id, dataAccount, token));
    }
    setEditAddress(false);
  };
  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [isPutAccount]);

  const validateVoucher = () => {
    let dem = 0;
    for (let i = 0; i < accountDetail?.voucher.length; i += 1) {
      if (accountDetail?.voucher[i].code === voucher) {
        dem += 1;
        setApplyVoucher({
          ...applyVoucher,
          status: 'true',
          voucher: accountDetail?.voucher[i],
        });
      }
      if (i === accountDetail?.voucher.length - 1) {
        if (dem === 0) {
          setApplyVoucher('false');

          setTotalPrice(
            parseInt(cartList?.data[0]?.t_price) +
              parseInt(cartList?.data[0]?.t_ship),
          );
        }
        // else {
        //   {
        //     applyVoucher.status === 'true' &&
        //       setTotalPrice(
        //         parseInt(cartList.data[0].t_price) +
        //           parseInt(cartList.data[0].t_ship) -
        //           parseInt(applyVoucher?.voucher?.p_price),
        //       );
        //   }
        // }
      }
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });

  const checkoutMomo = () => {
    dispatch(Momo());
  };

  useEffect(() => {
    if (paymentMomo != null) {
      // async function fetchData() {
      //   const response = await axios.get(paymentMomo);
      //   const paymentStatus = response.data.status;
      //   if (paymentStatus === 0) {
      //     console.log('thanhtoanthanhcong');
      //     // Payment was successful, fulfill the user's order or provide access to purchased content
      //     return { success: true, message: 'Payment was successful' };
      //   } else {
      //     console.log('thanh toan that bai');
      //     // Payment failed, notify the user and provide an opportunity to try again or choose a different payment method
      //     return { success: false, message: 'Payment failed' };
      //   }
      // }
      // fetchData();
      console.log(paymentMomo, 'pyane');
      window.location.replace(paymentMomo);
    }
  }, [paymentMomo]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const message = urlParams.get('message');
  console.log(queryString, 'queryString');

  console.log(isPostOrder, 'isPostOrder');
  useEffect(() => {
    if (isPostOrder == 'success') {
      navigate('/payment-complete');
    }
  }, [isPostOrder]);

  const fetchData = useCallback(() => {
    if (message === 'Successful.' && cartList) {
      // axios
      //   .post(`http://localhost:8080/api/payment/result-payment`)
      //   .then((res) => {
      //     console.log(res, 'res');
      //   })
      //   .catch((err) => {
      //     const payment = {
      //       open: true,
      //       severity: 'error',
      //       message: err.request.responseText,
      //     };
      //   });
      const body = {
        cartList,
        voucher: applyVoucher.voucher,
        typePay: 'Thanh toán qua momo',
        statusPay: 'Đã thanh toán',
        accountId: account_id,
        currency: 'VND',
        totalPrice:
          applyVoucher.status === 'true'
            ? parseInt(cartList?.data[0]?.t_price) +
              parseInt(cartList?.data[0]?.t_ship) -
              parseInt(applyVoucher.voucher.p_price)
            : parseInt(cartList?.data[0]?.t_price) +
              parseInt(cartList?.data[0]?.t_ship),
      };
      console.log(
        cartList,
        cartList?.data[0]?.t_price,
        parseInt(cartList?.data[0]?.t_ship),
        'daf',
      );
      console.log('da vao thanh toan momo');
      // navigate('/payment-complete',{state: body});
      navigate('/momo', { state: body });
    }
  }, [message, cartList]);

  fetchData();

  // useEffect(() => {
  //   if (message === 'Successful.') {
  //     fetchData();
  //   }
  // }, [message, cartList]);

  // useEffect(() => {
  // if (message === 'Successful.') {
  //   // axios
  //   //   .post(`http://localhost:8080/api/payment/result-payment`)
  //   //   .then((res) => {
  //   //     console.log(res, 'res');
  //   //   })
  //   //   .catch((err) => {
  //   //     const payment = {
  //   //       open: true,
  //   //       severity: 'error',
  //   //       message: err.request.responseText,
  //   //     };
  //   //   });
  //   const body = {
  //     cartList,
  //     voucher: applyVoucher.voucher,
  //     typePay: 'Thanh toán qua momo',
  //     statusPay: 'Đã thanh toán',
  //     accountId: account_id,
  //     currency: 'VND',
  //     totalPrice:
  //       applyVoucher.status === 'true'
  //         ? parseInt(cartList?.data[0]?.t_price) +
  //           parseInt(cartList?.data[0]?.t_ship) -
  //           parseInt(applyVoucher.voucher.p_price)
  //         : parseInt(cartList?.data[0]?.t_price) +
  //           parseInt(cartList?.data[0]?.t_ship),
  //   };
  //   console.log(
  //     cartList,
  //     cartList?.data[0]?.t_price,
  //     parseInt(cartList?.data[0]?.t_ship),
  //     'daf',
  //   );
  //   console.log('da vao thanh toan momo');
  //   dispatch(PostOrder(body, token));
  //   // navigate('/payment-complete');
  // }
  // }, []);

  return (
    <Layout>
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
          {cartList &&
            cartList?.data[0]?.cartitem?.map((item) => (
              <ProductCheckoutItem data={item} />
            ))}
        </Box>
        <Box className={classes.container_right_cart}>
          <Box className={classes.head_right_cart}>
            <Typography variant="subtitle2" color="text.white">
              {t('checkout.txt_info_cart')}
            </Typography>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Box className={classes.box_address_cart}>
              <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                {t('checkout.address')}
              </Typography>
              <Box className={classes.box_address}>
                <Box className={classes.box_address_ship}>
                  <LocationOn
                    sx={{ fontSize: 14, marginRight: 1, color: colors.gray }}
                  />
                  <Typography variant="body1" color="text.gray">
                    {' '}
                    {accountDetail &&
                      accountDetail.streetAddress +
                        ', ' +
                        accountDetail.wardCommunedistrictAddress +
                        ', ' +
                        accountDetail.cityAddress +
                        ', ' +
                        accountDetail.zipAddress}
                  </Typography>
                </Box>
                {/* <Typography
                  color="primary"
                  sx={{
                    fontStyle: 'italic',
                    cursor: 'pointer',
                    width: 'fit-content',
                  }}
                  onClick={() => setEditAddress(true)}
                >
                  {t('checkout.edit')}
                </Typography> */}
              </Box>
            </Box>
            <Box className={classes.horizontal_devider}></Box>
            <Box className={classes.content_total_cart}>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.total_product')}
                </Typography>
                <Typography variant="subtitle2">
                  {cartList && cartList?.data[0]?.amount}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2" color="primary">
                  {t('checkout.vat')}
                </Typography>
                <Typography variant="subtitle2">0</Typography>
              </Box>
              <Box className={classes.box_coupon_checkout}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  {t('checkout.voucher')}
                </Typography>
                {applyVoucher.status === 'pending' ? (
                  ''
                ) : applyVoucher.status === 'true' ? (
                  <Typography variant="overline" color="text.success">
                    Mã giảm giá: -{ConvertVND(applyVoucher.voucher.p_price)}
                  </Typography>
                ) : (
                  <Typography variant="overline" color="text.secondary">
                    Mã giảm giá không được áp dụng
                  </Typography>
                )}
                <Box className={classes.box_coupon}>
                  <Box className={classes.box_address_ship}>
                    <input
                      type="text"
                      id="voucher"
                      value={voucher}
                      onChange={(e) => setVoucher(e.target.value)}
                      placeholder="Nhập mã giảm giá ..."
                      className={classes.input_coupon}
                    />
                  </Box>
                  <Box
                    className={classes.btn_apply_coupon}
                    onClick={() => validateVoucher()}
                  >
                    {t('checkout.btn_voucher')}
                  </Box>
                </Box>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.ship')}
                </Typography>
                <Typography variant="subtitle2">
                  {' '}
                  {cartList && ConvertVND(cartList.data[0]?.t_ship)}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">Tổng đơn hàng</Typography>
                <Typography variant="subtitle2">
                  {cartList && ConvertVND(cartList.data[0]?.t_price)}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">Tiền được giảm</Typography>
                <Typography variant="subtitle2">
                  {applyVoucher.status === 'true'
                    ? ConvertVND(applyVoucher.voucher.p_price)
                    : 0}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.total_price')}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {applyVoucher.status === 'true'
                    ? ConvertVND(
                        parseInt(cartList?.data[0]?.t_price) +
                          parseInt(cartList?.data[0]?.t_ship) -
                          parseInt(applyVoucher?.voucher?.p_price),
                      )
                    : ConvertVND(
                        parseInt(cartList?.data[0]?.t_price) +
                          parseInt(cartList?.data[0]?.t_ship),
                      )}
                  {/* {totalPrice} */}
                </Typography>
              </Box>
              <Box className={classes.type_pay}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', marginBottom: 2 }}
                >
                  {t('checkout.title_pay')}
                </Typography>
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {t('checkout.pay_ship')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán khi nhận hàng')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                {/* <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {t('checkout.pay_momo')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua momo')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box> */}
                {/* <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {' '}
                    {t('checkout.pay_card')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua ngân hàng')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box> */}
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {' '}
                    {t('checkout.pay_paypal')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua paypal')}
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
                  <Typography variant="body1"> Thanh toán qua momo</Typography>
                  <Radio
                    {...controlProps('Thanh toán qua momo')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                {/* <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">Thanh toán qua vnpay</Typography>
                  <Radio
                    {...controlProps('Thanh toán qua vnpay')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box> */}
                {/* <Box>
                  <Paypal />
                </Box> */}
              </Box>
            </Box>

            <Box className={classes.btn_total_cart} onClick={() => checkout()}>
              {/* <Typography variant="subtitle1" color="text.white"> */}
              {t('checkout.btn_checkout')}
              {/* </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        open={editAddress}
        onClose={() => setEditAddress(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.model_edit_address}>
          <Typography
            id="modal-modal-title"
            variant="subtitle2"
            component="h3"
            sx={{ marginBottom: 2 }}
          >
            Edit Address
          </Typography>
          <Box sx={{ marginRight: 2 }}>
            <Box sx={{ display: 'flex' }}>
              <input
                type="text"
                id="streetAddress"
                value={dataAccount.streetAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
              <input
                type="text"
                id="wardCommunedistrictAddress"
                value={dataAccount.wardCommunedistrictAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
              <input
                type="text"
                id="cityAddress"
                value={dataAccount.cityAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <input
                type="text"
                id="zipAddress"
                value={dataAccount.zipAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
            </Box>
          </Box>
          <Box className={classes.box_btn}>
            <Box
              className={classes.btn_cancle}
              onClick={() => setEditAddress(false)}
            >
              {t('account.cancel')}
            </Box>
            <Box className={classes.btn_save} onClick={() => putAddress()}>
              {' '}
              {t('account.edit')}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

export default CheckoutPage;
