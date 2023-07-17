import React from 'react';
import { useDispatch } from 'react-redux';
import {
  DeleteCartItem,
  PutChangeAmountCartItem,
} from '../../redux/actions/cartitems';
import { useSelector } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { Clear, Star } from '@mui/icons-material';
import colors from '../../lib/colors';
import ConvertVND from '../ConvertMoney/ConvertVND';

const ProductCartItem = (props) => {
  const classes = useStyles();

  const { data } = props;
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  const [amount, setAmount] = React.useState(data.amount);

  const increaseAmount = () => {
    setAmount(parseInt(amount) + 1);
    const datas = {
      amount: parseInt(amount) + 1,
      cart_id: cartList.data[0]._id,
    };
    dispatch(PutChangeAmountCartItem(data._id, datas));
  };
  const reduceAmount = () => {
    setAmount(parseInt(amount) - 1);
    const datas = {
      amount: parseInt(amount) - 1,
      cart_id: cartList.data[0]._id,
    };
    dispatch(PutChangeAmountCartItem(data._id, datas));
  };

  const deleteCartItem = (item) => {
    dispatch(DeleteCartItem(item, cartList.data[0]._id));
  };

  return (
    <tr>
      <td>
        <Box className={classes.box_td_product}>
          <Box className={classes.box_img_product}>
            <img
              src={data.product && data.product.thumbnail}
              alt=""
              className={classes.img_product_cart}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              className={classes.sub_category_product}
            >
              {data.product && data.product.category}
            </Typography>
            <Typography variant="subtitle2">
              {data.product && data.product.name}
            </Typography>
            <Box className={classes.rate_product}>
              <Star
                className={classes.icon_star_rate_product}
                sx={{ fontSize: 12 }}
              />
              <Star
                className={classes.icon_star_rate_product}
                sx={{ fontSize: 12 }}
              />

              <Star
                className={classes.icon_star_rate_product}
                sx={{ fontSize: 12 }}
              />
              <Star
                className={classes.icon_star_rate_product}
                sx={{ fontSize: 12 }}
              />
              <Star
                className={classes.icon_star_rate_product}
                sx={{ fontSize: 12 }}
              />
            </Box>

            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              Color: {data.color}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              Size: {data.size}
            </Typography>
          </Box>
        </Box>
      </td>
      <td>
        <Box className={classes.td_price_product}>
          <Typography> {ConvertVND(data.price)}</Typography>
        </Box>
      </td>
      <td>
        <Box className={classes.td_amount_product}>
          <Box
            className={classes.btn_reduce_amount}
            onClick={() => reduceAmount()}
          >
            -
          </Box>
          <Box>
            <Typography className={classes.txt_amount}>{amount}</Typography>
          </Box>
          <Box
            className={classes.btn_increase_amount}
            onClick={() => increaseAmount()}
          >
            +
          </Box>
        </Box>
      </td>

      <td>
        <Box className={classes.td_total_price_product}>
          <Typography color="text.success">
            {ConvertVND(parseInt(amount) * parseInt(data.price))}
          </Typography>
        </Box>
      </td>
      <td>
        <Box>
          <Clear
            onClick={() => deleteCartItem(data._id)}
            sx={{ fontSize: 20, color: colors.orange, cursor: 'pointer' }}
          />
        </Box>
      </td>
    </tr>
  );
};

export default ProductCartItem;
