import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star, Arrow } from '@mui/icons-material/';
import colors from '../../lib/colors';
import {
  RemoveRedEye,
  ShoppingCart,
  ArrowForwardIos,
} from '@mui/icons-material';
import './style.css';
const CategoryItem = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };
  const addToCart = () => {};
  const toCategory = () => {
    navigate(`/category/${props.data.category}`, {
      state: {
        params: props.data.category,
      },
    });
  };
  return (
    <Box
      className={classes.container_item_category}
      onClick={() => toCategory()}
    >
      <Box className={classes.head_item_category}>
        <Typography
          variant="subtitle2"
          color="primary"
          sx={{ marginBottom: 1 }}
        >
          {props.data && props.data.category}
        </Typography>
        <Box className={classes.box_number_product}>
          <Typography variant="body1">
            {' '}
            {props.data && props.data.amount} san pham
          </Typography>
          <ArrowForwardIos sx={{ fontSize: 10 }} />
        </Box>
      </Box>
      <Box className={classes.body_item_category}>
        {props.data &&
          props.data.product.map((item, idx) => {
            if (idx < 4) {
              return (
                <img
                  src={item.thumbnail}
                  className={classes.img_item_category}
                />
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default CategoryItem;
