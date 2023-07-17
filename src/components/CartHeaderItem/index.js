import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
import ConverctVND from '../ConvertMoney/ConvertVND';
const CartHeaderItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box_cart_header_item}>
      <img
        src={props.data && props.data.product && props.data.product.thumbnail}
        className={classes.img_item_cart_header}
      />
      <Box>
        <Typography variant="subtitle2">
          {' '}
          {props.data && props.data.product && props.data.product.name}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Số lượng: {props.data && props.data.amount}
        </Typography>
        <Box
          className={classes.box_total_price_cart_header}
          sx={{ marginTop: 1 }}
        >
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            Tổng tiền:{' '}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {' '}
            {props.data &&
              ConverctVND(
                parseInt(props.data.price) * parseInt(props.data.amount),
              )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartHeaderItem;
