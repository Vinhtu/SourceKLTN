import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const NotificationHeaderItem = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const toNotification = () => {
    navigate('/account/notification');
  };
  return (
    <Box
      className={classes.box_notification_header_item}
      onClick={() => toNotification()}
      sx={{
        backgroundColor:
          props.data?.status === 'Pending' ? colors.lightGray : '',
      }}
    >
      {/* <img
        src="https://phanphoiruounhapkhau.com/wp-content/uploads/2021/04/healthy-food-la-gi-nguyen-tac-khi-giam-can-bang-che-do-an-clean-eating.jpg"
        className={classes.img_item_notification_header}
      /> */}
      <Box>
        <Typography
          variant="subtitle2"
          color="text.gray"
          sx={{ fontWeight: 'bold', marginBottom: 0.5 }}
        >
          {' '}
          {props.data?.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.gray"
          sx={{ fontStyle: 'italic' }}
        >
          {props.data?.sub_title}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationHeaderItem;
