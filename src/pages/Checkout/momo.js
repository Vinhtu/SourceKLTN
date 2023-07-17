import { Box, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import colors from '../../lib/colors';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostOrder } from '../../redux/actions/orders';

const MomoComponent = (props) => {
  const location = useLocation();

  const [time, setTime] = React.useState(3);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPostOrder } = useSelector((state) => state.order);
  const accessToken = localStorage.getItem('accessToken');
  const token = JSON.parse(accessToken);

  console.log(location.state, 'location.state');

  // const fetchData = useCallback(() => {
  //   dispatch(PostOrder(location.state, token));
  // }, []);
  // fetchData();

  useEffect(() => {
    dispatch(PostOrder(location.state, token));
  }, []);
  useEffect(() => {
    if (isPostOrder == 'success') {
      navigate('/payment-complete');
    }
  }, [isPostOrder]);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    ></Box>
  );
};

export default MomoComponent;
