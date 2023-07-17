import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
import ConvertVND from '../ConvertMoney/ConvertVND';
const ProductItem = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail/${props.data.name}`, {
      state: { data: props.data, id: props.data._id },
    });
  };
  const addToCart = () => {};
  return (
    <Box className={classes.container_item_product}>
      <Box className={classes.container_img_item_product}>
        <img
          className={classes.img_item_product}
          src={props.data && props?.data?.thumbnail}
        />
      </Box>
      <Box className={classes.body_item_product}>
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: 1,
            cursor: 'pointer',
            height: '30px',
            overflow: 'hidden',
          }}
          onClick={() => ToProduct()}
        >
          {props.data && props?.data?.name}
        </Typography>
        <Box className={classes.location_item_product}>
          <LocationOn sx={{ fontSize: 12 }} />
          <Typography>
            {props.data?.affilateshop?.cityAddress
              ? props.data?.affilateshop?.cityAddress
              : 'Đang cập nhật'}
          </Typography>
        </Box>
        <Box className={classes.rate_item_product}>
          <Box sx={{ marginRight: 1 }}>
            {Array(5)
              .fill(1)
              .map((item) => (
                <Star sx={{ fontSize: 12, color: colors.orange }} />
              ))}
          </Box>
          {/* <Typography>35 luot danh gia</Typography> */}
        </Box>
        <Box className={classes.price_item_product}>
          <Typography variant="h3" color="text.secondary">
            {' '}
            {props.data && ConvertVND(props?.data?.color[0]?.size[0]?.price)}
          </Typography>
          <Typography sx={{ textDecorationLine: 'line-through' }}>
            {props.data && ConvertVND(props?.data?.color[0]?.size[0]?.p_price)}
          </Typography>
        </Box>
        <Box className={classes.pro_percent}>
          <Typography varitant="body1" color="text.white">
            -
            {Math.round(
              ((parseInt(props?.data?.color[0]?.size[0]?.p_price) -
                parseInt(props?.data?.color[0]?.size[0]?.price)) *
                100) /
                parseInt(props?.data?.color[0]?.size[0]?.p_price),
            )}
            %
          </Typography>
        </Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ShoppingCart
            sx={{ fontSize: 10, marginRight: 1 }}
            onClick={() => addToCart()}
          />
          <Typography
            variant="body1"
            sx={{ cursor: 'pointer', marginTop: 0.5 }}
          >
            Them vao gio hang
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProductItem;
