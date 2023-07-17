import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';
import ItemReplyCommentProduct from '../ItemReplyCommentProduct';
import { PutCommentProduct } from '../../redux/actions/products';
import { GetAccount } from '../../redux/actions/accounts';

const ItemWritenCommentProduct = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [accountComment, setAccountComment] = React.useState('');

  const [errorComment, setErrorComment] = React.useState('');
  const postComment = () => {
    const data = {
      account: props.account._id,
      body: accountComment,
    };
    if (errorComment !== null) {
      dispatch(
        PutCommentProduct(props.product && props.product._id, data, token),
      );
      setErrorComment('');
    } else {
      setErrorComment('Không được để trống !');
    }
    setAccountComment('');
  };

  return (
    <Box className={classes.container_item_comment_product}>
      <Box sx={{ marginRight: 2 }}>
        <img
          src={
            props?.account?.avatar
              ? props.account?.avatar
              : 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
          }
          className={classes.img_user_comment}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box className={classes.head_comment_product}>
          <input
            type="area"
            id="account_comment"
            value={accountComment}
            onChange={(e) => setAccountComment(e.target.value)}
            className={classes.input_comment}
          />
        </Box>
        <Box mt={1} className={classes.box_body_comment}>
          {errorComment ? (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 1 }}
            >
              {errorComment}
            </Typography>
          ) : null}
          <Box className={classes.box_util_icon} onClick={postComment}>
            <Typography>Bình luận</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemWritenCommentProduct;
