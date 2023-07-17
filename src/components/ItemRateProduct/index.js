import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';
import ItemReplyCommentProduct from '../ItemReplyCommentProduct';

const ItemRateProduct = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };

  const gap =
    new Date().getTime() -
    new Date(props.data && props.data.create_date).getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const date_create = new Date(props?.data?.create_date).getTime();

  return (
    <Box className={classes.container_item_comment_product}>
      <Box sx={{ marginRight: 2 }}>
        <img
          src={
            props?.data.account?.avatar ||
            'https://img.redro.pl/obrazy/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-symbol-male-user-symbol-700-223068879.jpg'
          }
          className={classes.img_user_comment}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box className={classes.head_comment_product}>
          <Box className={classes.name_time_comment}>
            <Typography variant="h3" sx={{ marginRight: 1 }}>
              {props?.data.account?.fullname}
            </Typography>
            <Typography variant="body1" sx={{ color: colors.gray }}>
              {' '}
              {props?.data?.create_date && (
                <>
                  {new Date(date_create).toLocaleDateString()} (
                  {textDay > 0
                    ? textDay + ' ngay truoc'
                    : textHour > 0
                    ? textHour + ' gio truoc'
                    : textMinute > 0
                    ? textMinute + ' phut truoc'
                    : textSecond + ' giay truoc'}
                  ){' '}
                </>
              )}
            </Typography>
          </Box>
        </Box>
        {props?.data?.star === '1 Sao' && (
          <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
          </Box>
        )}

        {props?.data?.star === '2 Sao' && (
          <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
          </Box>
        )}

        {props.data.star === '3 Sao' && (
          <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14 }} />
            <Star sx={{ fontSize: 14 }} />
          </Box>
        )}

        {props?.data?.star === '4 Sao' && (
          <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14 }} />
          </Box>
        )}

        {props?.data?.star === '5 Sao' && (
          <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ItemRateProduct;
