import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
import { PutNotification } from '../../redux/actions/notifications';
const NotificationAccountItem = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const putNotification = () => {
    const data = {
      status: 'Done',
    };
    dispatch(PutNotification(props.data?._id, data, token));
  };

  return (
    <Box
      className={classes.box_notification_header_item}
      sx={{
        backgroundColor:
          props.data?.status === 'Pending' ? colors.lightGray : '',
      }}
      onClick={() => putNotification()}
    >
      {/* <img
        src="https://phanphoiruounhapkhau.com/wp-content/uploads/2021/04/healthy-food-la-gi-nguyen-tac-khi-giam-can-bang-che-do-an-clean-eating.jpg"
        className={classes.img_item_notification_header}
      /> */}
      <Box>
        <Typography
          variant="subtitle2"
          color="text.gray"
          sx={{ fontWeight: 'bold' }}
        >
          {' '}
          {props.data?.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.gray"
          sx={{ fontStyle: 'italic', marginBottom: 1 }}
        >
          {props.data?.role} - {props.data?.sub_title}
        </Typography>
        <Typography
          variant="body1"
          color="text.gray"
          sx={{ fontStyle: 'italic' }}
        >
          Body: {props.data?.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationAccountItem;
