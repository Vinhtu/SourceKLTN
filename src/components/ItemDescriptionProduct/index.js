import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const ItemDescriptionProduct = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.container_item_description_product}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle2">
          {props.data && props.data.body}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <img
          sx={{ borderRadius: 10 }}
          src={
            props.data && props.data.thumbnail
              ? props.data.thumbnail
              : 'https://bucket.nhanh.vn/store/20446/artCT/70269/923x450_page_cover_2.jpg'
          }
          className={classes.img_description_product}
        />
      </Box>
    </Box>
  );
};

export default ItemDescriptionProduct;
