import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';

const ItemReplyCommentProduct = (props) => {
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

  const date_create = new Date(props.data && props.data.create_date).getTime();

  return (
    <Box className={classes.container_item_comment_product}>
      <Box sx={{ marginRight: 2 }}>
        <img
          src={
            props.data && props.data.account.avatar
              ? props.data.account.avatar
              : 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
          }
          className={classes.img_user_comment}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box className={classes.head_comment_product}>
          <Box className={classes.name_time_comment}>
            <Typography
              variant="body1"
              sx={{ marginRight: 1, fontWeight: 'bold' }}
            >
              {props.data && props.data.account.fullname}
            </Typography>
            <Typography variant="overline" sx={{ color: colors.gray }}>
              {new Date(date_create).toLocaleDateString()}
            </Typography>
          </Box>
          <Box className={classes.box_rate}>
            <Typography
              variant="overline"
              sx={{ color: colors.gray, fontStyle: 'italic' }}
            >
              {' '}
              {textDay > 0
                ? textDay + ' ngay truoc'
                : textHour > 0
                ? textHour + ' gio truoc'
                : textMinute > 0
                ? textMinute + ' phut truoc'
                : textSecond + ' giay truoc'}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.box_body_comment}>
          <Box>
            <Box className={classes.txt_body_comment}>
              <Typography variant="body1">
                {props.data && props.data.body}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemReplyCommentProduct;
