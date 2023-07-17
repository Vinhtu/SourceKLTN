import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import classNames from 'classnames';

const BestSalerItem = (props) => {
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
    <Box px={1}>
      <Box
        className={classes.container_item_bestsaler}
        onClick={() => toCategory()}
      >
        <Box className={classes.head_item_category}>
          <Typography
            // variant="subtitle1"
            color="primary"
            sx={{ fontSize: 18, marginBottom: 1 }}
          >
            {props.data && props.data.category}
          </Typography>
          <Box className={classes.box_number_product}>
            <Typography variant="body1">
              {' '}
              {props.data && props.data.amount} sản phẩm
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
    </Box>
  );
};

export default BestSalerItem;
