import React from 'react';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { Instagram, Google, Facebook } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { useNavigate } from 'react-router-dom';

const Footer = (prosp) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const toHome = () => {
    navigate(`/`);
  };
  const toFaceBook = () => {
    navigate(`/`);
  };
  const toIntagram = () => {
    navigate(`/`);
  };
  const toGoogle = () => {
    navigate(`/`);
  };
  return (
    <Box mt={5} className={classes.container_footer}>
      <Box className={classes.container_expend}>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.bx_expend}
        >
          <Box className={classes.right_content}>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/epcfWIT_Ais"
            ></iframe>
          </Box>
          <Box className={classes.right_content}>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/p8tdhX4FcDg"
            ></iframe>
          </Box>
        </Box>
        <Box className={classes.left_content}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 100,
              textAlign: 'center',
              marginBottom: 2,
              fontWeight: 'bold',
            }}
          >
            Số Sản Phẩm Đã Bán
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 100,
              textAlign: 'center',
              marginBottom: 2,
              fontWeight: 'bold',
            }}
          >
            841.397
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 100,
              textAlign: 'center',
              paddingBottom: 5,
            }}
          >
            Giày chính hãng luôn mang đến những mẫu giày chất lượng tốt nhất với
            giá cả hợp lí nhất đến tay người tiêu dùng với hệ thống cửa hàng
            GÌAY CHÍNH HÃNG với chính sách đảm bảo hàng chính hãng đến với tay
            người tiêu dùng
          </Typography>
        </Box>
      </Box>
      <Box mt={5} className={classes.container_footer_1}>
        <Box className={classes.col1_footer}>
          {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCZVhlauyNq-ctnVJPZaucXETMW9QB6hELA&usqp=CAU"
          className={classes.img_logo_footer}
          onClick={() => toHome()}
        /> */}
          <Typography
            variant="h1"
            style={{ color: colors.green }}
            onClick={() => toHome()}
            sx={{ cursor: 'pointer' }}
          >
            GIÀY CHÍNH HÃNG
          </Typography>
          <Typography
            variant="subtitle2"
            classes={classes.sub_logo_footer}
            sx={{ marginBottom: 3 }}
          >
            Địa chỉ: 990 Lê Đức Thọ, Phường 13, Quận Gò Vấp, TP. Hồ Chí Minh
          </Typography>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Mạng xã hội
          </Typography>
          <Box className={classes.container_icon_social}>
            <Facebook
              className={classes.icon_social}
              onClick={() => toFaceBook()}
            />
            <Instagram
              className={classes.icon_social}
              onClick={() => toIntagram()}
            />
            <Google
              className={classes.icon_social}
              onClick={() => toGoogle()}
            />
          </Box>
        </Box>
        <Box className={classes.col2_footer}>
          <Typography variant="h2" sx={{ marginBottom: 3 }}>
            Thời gian hoạt động
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Thứ 2 - Chủ nhật
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            7h00 - 20h00
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
            Tư vấn online 24/7
          </Typography>
        </Box>
        <Box className={classes.col2_footer}>
          <Typography variant="h2" sx={{ marginBottom: 3 }}>
            Danh mục
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Giày nam
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Giày nữ
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
            Giày cao gót
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
            Giày hở gót
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 3 }}>
            Giày trẻ em
          </Typography>
        </Box>
        <Box className={classes.col2_footer}>
          <Typography variant="h2" sx={{ marginBottom: 3 }}>
            Thanh toán
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Thanh toán khi nhận hàng
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Thanh toán qua paypal
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
