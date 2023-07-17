import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const RightSidebar = (props) => {
  const classes = useStyles();

  const { data } = props;

  const { productTopSale } = useSelector((state) => state.product);

  const navigate = useNavigate();
  const ToProduct = (item) => {
    navigate(`/product-detail/${item.name}`, {
      state: { data: item, id: item._id },
    });
  };

  return (
    <Box>
      <Box className={classes.container_right_sidebar}>
        {/* {productTopSale &&
          productTopSale.map((item) => {
            return (
              <img src={item.thumbnail} className={classes.img_item_sidebar} />
            );
          })} */}
        {data?.map((item, idx) => {
          if (idx < 5)
            return (
              <Box className={classes.img_item_sidebar}>
                <Box>
                  <img
                    src={item?.thumbnail}
                    style={{ height: 220, width: 200 }}
                  />
                </Box>
                <Box
                  sx={{
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: 'center',
                      marginBottom: 0.5,
                      height: 21,
                      overflow: 'hidden',
                    }}
                    onClick={() => ToProduct(item)}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: 'center',
                      marginBottom: 1,
                      color: colors.orange,
                    }}
                  >
                    {item?.color[0].size[0].price}
                  </Typography>
                </Box>
              </Box>
            );
        })}
      </Box>
    </Box>
  );
};

export default RightSidebar;
