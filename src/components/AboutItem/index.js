import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const AboutItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box_about_item}>
      <Box className={classes.box_2_about_item}>
        <Box className={classes.head_about_item}>
          <Box className={classes.btn_number}>1</Box>
          <Typography variant="h3">Chung toi la gi</Typography>
        </Box>
        <Box className={classes.body_about_item}>
          Lưu ý quan trọng: Nội dung mô tả hình ảnh hiện dùng được bằng tiếng
          Croatia, tiếng Séc, tiếng Hà Lan, tiếng Anh, tiếng Phần Lan, tiếng
          Pháp, tiếng Đức, tiếng Hindi, tiếng Indonesia, tiếng Ý, tiếng Na Uy,
          tiếng Bồ Đào Nha, tiếng Nga, tiếng Tây Ban Nha, tiếng Thuỵ Điển và
          tiếng Thổ Nhĩ Kỳ.
        </Box>
      </Box>
    </Box>
  );
};

export default AboutItem;
