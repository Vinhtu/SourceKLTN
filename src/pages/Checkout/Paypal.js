import React, { useEffect, useRef } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './style.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CurrencyFormat from 'react-currency-format';
import { PostOrder, PostOrderPaypal } from '../../redux/actions/orders';
// This values are the props in the UI

const currency = 'USD';
const style = { layout: 'vertical', minWidth: '500px !important' };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ data, currency, showSpinner }) => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');
  const token = JSON.parse(accessToken);

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const dispatchOrder = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const [vndToUsdRate, setVndToUsdRate] = React.useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => response.json())
      .then((data) => setVndToUsdRate(data.rates.VND));
  }, []);
  console.log(data.totalPrice, vndToUsdRate, 'sf');
  const amount = `${Math.round(
    parseInt(data.totalPrice) / parseInt(vndToUsdRate),
  )}`;
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        sx={{ minWidth: 500 }}
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        // fundingSource="paypal"
        // style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (datas, actions) {
          return actions.order.capture().then(function (result) {
            // Your code here after capture the order
            if (result.status === 'COMPLETED') {
              data.statusPay = 'Đã thanh toán';
              data.status = 'Accept';
              dispatchOrder(PostOrderPaypal(data, token));
              navigate('/payment-complete');
            } else {
              navigate('/payment-fail');
            }
          });
        }}
      />
    </>
  );
};

export default function Paypal(props) {
  const location = useLocation();

  return (
    <Box
      sx={{ height: '100%', width: '100%' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <PayPalScriptProvider
        options={{
          'client-id':
            'AZypg2Ii2fW2ZFrQTF6z3YHL-plv31PrVDd8Nx6mDerQ0qMYy2zT4mMSRHlS8ANZK6PR7HFV8FSTKGle',
          components: 'buttons',
          currency: 'USD',
          // intent: "capture",
          // "data-client-token": "abc123xyz==",
        }}
        style={{ minWidth: '500px !important' }}
      >
        <ButtonWrapper
          data={location.state}
          currency={currency}
          showSpinner={true}
          style={{ minWidth: '500px !important' }}
        />
      </PayPalScriptProvider>
    </Box>
  );
}
