import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import './style.css';

const ProductSaleItem = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };
  return (
    <Box className={classes.container_item_product}>
      <Box
        className={classes.mask_item_product_sale}
        id="mask_item_product_sale"
      >
        <Box id="mask_item_product_sale_bg"></Box>
        <Box
          className={classes.hover_item_product_sale}
          id="hover_item_product_sale"
        >
          {/* <Box>
            <RemoveRedEye className={classes.icon_hover_item_product_sale} />
            <ShoppingCart className={classes.icon_hover_item_product_sale} />
          </Box> */}
          <Typography className={classes.text_hover_item_product_sale}>
            But chu ky
          </Typography>
        </Box>
      </Box>
      <img
        id="img_item_product"
        className={classes.img_item_product}
        src="https://mineviet.com/wp-content/uploads/2021/09/ef3-placeholder-image.jpeg"
      />
    </Box>
  );
};

export default ProductSaleItem;
