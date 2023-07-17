import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';

import useStyles from './styles';

const UtilsNote = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isPostCart } = useSelector((state) => state.cart);
  const { isPutCart } = useSelector((state) => state.cart);
  const { isPutComment } = useSelector((state) => state.comment);
  const { isPostOrder, isPutCancelOrder } = useSelector((state) => state.order);
  const { isPutVoucherAccount } = useSelector((state) => state.account);
  const { isPutCan } = useSelector((state) => state.account);
  const { isPostEvaluate } = useSelector((state) => state.evaluate);

  const { note } = useSelector((state) => state.utils);

  const { accountDetail } = useSelector((state) => state.account);
  const { categoryList } = useSelector((state) => state.category);
  const { notificationList } = useSelector((state) => state.notification);
  const { cartList } = useSelector((state) => state.cart);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  return (
    <Box>
      {props.note?.type === 'isPutVoucherAccount' &&
        (isPutVoucherAccount === 'success' ? (
          <Typography variant="body1" color="text.success">
            Thêm mã giảm giá thành công
          </Typography>
        ) : isPutVoucherAccount === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Thêm mã giảm giá thất bại
          </Typography>
        ) : null)}

      {props.note?.type === 'isPostCart' &&
        (isPostCart === 'success' ? (
          <Typography variant="body1" color="text.success">
            Thêm giỏ hàng thành công
          </Typography>
        ) : isPostCart === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Thêm giỏ hàng thất bại
          </Typography>
        ) : null)}
      {props.note?.type === 'isPostOrder' &&
        (isPostOrder === 'success' ? (
          <Typography variant="body1" color="text.success">
            Đặt hàng thành công
          </Typography>
        ) : isPostOrder === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Đặt hàng thất bại
          </Typography>
        ) : null)}

      {props.note?.type === 'isPutCancelOrder' &&
        (isPutCancelOrder === 'success' ? (
          <Typography variant="body1" color="text.success">
            Huỷ đơn hàng thành công
          </Typography>
        ) : isPutCancelOrder === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Huỷ đơn hàng thất bại
          </Typography>
        ) : null)}

      {props.note?.type === 'isPostEvaluate' &&
        (isPostEvaluate === 'success' ? (
          <Typography variant="body1" color="text.success">
            Đánh giá thành công
          </Typography>
        ) : isPostEvaluate === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Đánh giá thất bại
          </Typography>
        ) : null)}
    </Box>
  );
};

export default UtilsNote;
