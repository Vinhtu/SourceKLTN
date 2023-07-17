import { Box, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import colors from '../../lib/colors';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PostOrder } from '../../redux/actions/orders';

const PaymentComplete = (props) => {
  const [time, setTime] = React.useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('post oerder');
  //   // dispatch(PostOrder(location.state, token));
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
      if (time === 0) {
        navigate('/');
      }
    }, 1000);
  });

  const toHome = () => {
    navigate('/');
  };
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{ fontSize: 30, fontWeight: 'bold', color: colors.green }}
      >
        Thanh toán thành công
      </Typography>
      <Typography sx={{ fontSize: 14 }} onClick={() => toHome()}>
        Trở về trang chủ sau {time} giây
      </Typography>
    </Box>
  );
};

export default PaymentComplete;
