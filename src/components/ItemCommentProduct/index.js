import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';
import ItemReplyCommentProduct from '../ItemReplyCommentProduct';
import {
  PostReportComment,
  PutLikeComment,
  PutReplyComment,
} from '../../redux/actions/comments';

const ItemCommentProduct = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [reply, setReply] = React.useState(false);
  const [bodyReply, setBodyReply] = React.useState('');
  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);
  const [errorComment, setErrorComment] = React.useState('');

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

  const likeComment = () => {
    const data = { account: account_id };
    dispatch(PutLikeComment(props.data && props.data._id, data, token));
  };

  const toReply = () => {
    const data = { account: account_id, body: bodyReply };
    if (errorComment !== null) {
      dispatch(PutReplyComment(props.data && props.data._id, data, token));
      setErrorComment('');
      setReply(false);
    } else {
      setErrorComment('Không được để trống !');
    }
  };

  const date_create = new Date(props.data && props.data.create_date).getTime();

  const [utilComment, setUtilComment] = React.useState(false);

  const toReportComment = (e) => {
    const data = {
      account_send: account_id,
      account_receive: props.data.account._id,
      sub_title: e,
      body: props.data?.body,
    };
    dispatch(PostReportComment(props.data && props.data._id, data, token));
  };
  return (
    <Box className={classes.container_item_comment_product}>
      <Box sx={{ marginRight: 2 }}>
        <img
          src={
            props.data?.account?.avatar
              ? props.data?.account?.avatar
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
              {props.data?.account?.fullname}
            </Typography>
            <Typography variant="body1" sx={{ color: colors.gray }}>
              {' '}
              {new Date(date_create).toLocaleDateString()} (
              {textDay > 0
                ? textDay + ' ngay truoc'
                : textHour > 0
                ? textHour + ' gio truoc'
                : textMinute > 0
                ? textMinute + ' phut truoc'
                : textSecond + ' giay truoc'}
              )
            </Typography>
          </Box>
          {/* <Box className={classes.box_rate}>
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14, color: colors.orange }} />
            <Star sx={{ fontSize: 14 }} />
          </Box> */}
        </Box>
        <Box className={classes.box_body_comment}>
          <Box>
            <Box className={classes.txt_body_comment}>
              <Typography variant="subtitle1">
                {props.data && props.data.body}
              </Typography>
            </Box>
            <Box className={classes.box_util_icon}>
              <Box onClick={() => likeComment()}>
                <Typography sx={{ marginRight: 2, cursor: 'pointer' }}>
                  Thich ({props.data && props.data.likecomment.length})
                </Typography>
              </Box>
              <Box onClick={() => setReply(true)}>
                <Typography sx={{ cursor: 'pointer' }}>Tra loi</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            onClick={() => setUtilComment(!utilComment)}
            sx={{ position: 'relative' }}
          >
            <MoreVert sx={{ fontSize: 16, cursor: 'pointer' }} />
            <Box
              sx={{
                position: 'absolute',
                display: utilComment ? 'block' : 'none',
                width: '150px',
                left: -75,
                border: '1px solid gray',
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  padding: '8px 16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'gray',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => toReportComment('Thong tin sai')}
              >
                <Typography>Thong tin sai</Typography>
              </Box>
              <Box
                sx={{
                  padding: '8px 16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'gray',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => toReportComment('Ngon tu khiem nha')}
              >
                <Typography>Ngon tu khiem nha</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {reply && (
          <Box mb={1}>
            {errorComment ? (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                {errorComment}
              </Typography>
            ) : null}
            <input
              type="textarea"
              id="body_reply"
              name="textValue"
              value={bodyReply}
              rows={5}
              onChange={(e) => setBodyReply(e.target.value)}
              className={classes.txt_area_comment}
            />
            <Box className={classes.box_btn_reply_comment}>
              <Box
                className={classes.btn_cancle_reply_comment}
                onClick={() => setReply(false)}
              >
                Huy
              </Box>
              <Box
                className={classes.btn_success_reply_comment}
                onClick={toReply}
              >
                Tra loi
              </Box>
            </Box>
          </Box>
        )}
        {props.data &&
          props.data.replycomment.length > 0 &&
          props.data.replycomment.map((item, idx) => {
            return <ItemReplyCommentProduct data={item} />;
          })}
      </Box>
    </Box>
  );
};

export default ItemCommentProduct;
