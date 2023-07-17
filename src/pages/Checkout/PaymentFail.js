import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import colors from '../../lib/colors';
import { useNavigate } from 'react-router-dom';

const PaymentFail = (props) => {
  const [time, setTime] = React.useState(5);
  const navigate = useNavigate();

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
        sx={{ fontSize: 30, fontWeight: 'bold', color: colors.orange }}
      >
        Thanh toán thất bại
      </Typography>
      <Typography
        sx={{ fontSize: 14, cursor: 'pointer' }}
        onClick={() => toHome()}
      >
        Trở về trang chủ sau {time} giây
      </Typography>
    </Box>
  );
};

export default PaymentFail;
