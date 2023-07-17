import React from 'react';
import { useDispatch } from 'react-redux';
import {
  DeleteCartItem,
  PutCartItem,
  PutChangeAmountCartItem,
} from '../../redux/actions/cartitems';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { Clear, Star, LocationOn } from '@mui/icons-material';
import colors from '../../lib/colors';
import ConvertVND from '../ConvertMoney/ConvertVND';
const ProductCheckoutItem = (props) => {
  const classes = useStyles();

  const { data } = props;
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(data.amount);

  const [note, setNote] = React.useState(data.note);
  const increaseAmount = () => {
    setAmount(parseInt(amount) + 1);
    const number = { amount: parseInt(amount) + 1 };
    dispatch(PutChangeAmountCartItem(data._id, number));
  };
  const reduceAmount = () => {
    setAmount(parseInt(amount) - 1);
    const number = { amount: parseInt(amount) - 1 };
    dispatch(PutChangeAmountCartItem(data._id, number));
  };

  const deleteCartItem = (item) => {
    dispatch(DeleteCartItem(item));
    window.location.reload();
  };
  const applyNote = () => {
    const datas = { note };
    dispatch(PutCartItem(data._id, datas));
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box className={classes.container_checkout_item}>
        <Box>
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
        </Box>
        <Box>
          <Box className={classes.td_price_product}>
            <Typography>
              {' '}
              Giá tiền mỗi đơn : {ConvertVND(data.price)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className={classes.td_amount_product}>
            <Box>
              <Typography className={classes.txt_amount}>
                Số lượng: {amount}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box className={classes.td_total_price_product}>
            <Typography color="text.success">
              Tổng tiền : {ConvertVND(parseInt(amount) * parseInt(data.price))}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.vertical_devider}></Box>
        <Box className={classes.box_item_ship}>
          <Box className={classes.box_address_ship} sx={{ marginBottom: 0.5 }}>
            <Typography variant="body1" sx={{ marginRight: 0.5 }}>
              Địa chỉ cửa hàng:{' '}
            </Typography>
            {/* <LocationOn
              sx={{ fontSize: 14, marginRight: 0.5, color: colors.gray }}
            /> */}
            <Typography
              variant="body1"
              color="text.gray"
              sx={{ marginBottom: 0.5 }}
            >
              {data.product?.affilateshop?.cityAddress}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
            Phí giao hàng:{' '}
            <span style={{ color: colors.orange }}>
              {ConvertVND(data.ship)}
            </span>
          </Typography>
          <Typography variant="body1">
            Thời gian giao hàng:{' '}
            <span style={{ color: colors.primary }}>
              {new Date(data.ship_start).toLocaleDateString()} -{' '}
              {new Date(data.ship_end).toLocaleDateString()}
            </span>
          </Typography>
        </Box>
      </Box>
      {props.account ? (
        <Typography>Ghi chú : {note}</Typography>
      ) : (
        <Box className={classes.box_input_note_product}>
          <input
            type="area"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Nhập ghi chú"
            className={classes.input_note_product}
          />
          <Box className={classes.btn_note_product} onClick={applyNote}>
            Thêm ghi chú
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductCheckoutItem;
