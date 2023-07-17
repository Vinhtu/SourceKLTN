import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import ConvertVND from '../ConvertMoney/ConvertVND';
const SlideHeader = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const settings = {
    // dots: true,
    // fade: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    className: 'slick-slide-header',
  };

  const navigate = useNavigate();
  const toVoucher = () => {
    navigate(`/voucher`);
  };
  const toAddVoucher = () => {
    navigate(`/voucher`);
  };
  const { voucherList } = useSelector((state) => state.voucher);
  const { bannerList } = useSelector((state) => state.banner);
  const { isPutAccount } = useSelector((state) => state.account);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  useEffect(() => {
    dispatch(GetVoucherDate());
    dispatch(GetBanners());
  }, [dispatch]);

  const getVoucher = (id) => {
    dispatch(PutAccountGiveVoucher(account_id, id, token));
  };
  useEffect(() => {
    dispatch(GetVoucherDate());
  }, [isPutAccount]);

  console.log();
  return (
    <Box className={classes.container_banner}>
      <Box className={classes.container_body_banner}>
        <Box className={classes.left_body_banner}>
          <Slider {...settings}>
            {bannerList &&
              bannerList?.data?.results?.map((item) => {
                if (item.show === 'True') {
                  return (
                    <Box
                      className={classes.item_slick_slider_left_banner}
                      sx={{
                        backgroundImage: `url(${item?.thumbnail})`,
                        backgroundSize: 'cover',
                        borderRadius: '16px',
                      }}
                    >
                      <Box className={classes.content_slick_slider_banner}>
                        <Typography
                          variant="title"
                          className={classes.title_slick_slider_banner}
                        >
                          {item?.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className={classes.sub_slick_slider_banner}
                        >
                          {item?.title}
                        </Typography>
                        {/* <Box className={classes.btn_slick_slider}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_btn_slick_slider}
                          >
                            Get It
                          </Typography>
                        </Box> */}
                      </Box>
                    </Box>
                  );
                }
              })}
          </Slider>
        </Box>
        <Box className={classes.right_body_banner}>
          {voucherList &&
            voucherList.data.results.map((item, idx) => {
              if (idx < 2) {
                return (
                  <Box className={classes.item_voucher_right_banner}>
                    <Box className={classes.body_item_voucher}>
                      <Box className={classes.body_left_item_voucher}>
                        <Box>
                          <img
                            className={classes.img_item_voucher}
                            src={item.thumbnail}
                          />
                        </Box>
                        <Box>
                          <Typography color="text.secondary">
                            {new Date(item.date_start).toLocaleDateString()} -{' '}
                            {new Date(item.date_end).toLocaleDateString()}
                          </Typography>
                          <Typography variant="h2" sx={{ marginTop: 1 }}>
                            {item?.name}
                          </Typography>
                          <Typography variant="h1">
                            {ConvertVND(item?.p_price)}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.body_right_item_voucher}>
                        {/* <Box className={classes.time_voucher}>
                          <Box className={classes.item_time_voucher}>
                            {' '}
                            <Typography color="text.white">00</Typography>{' '}
                          </Box>
                          <Box sx={{ margin: 0.5 }}>:</Box>
                          <Box className={classes.item_time_voucher}>
                            {' '}
                            <Typography color="text.white">00</Typography>{' '}
                          </Box>
                          <Box sx={{ margin: 0.5 }}>:</Box>
                          <Box className={classes.item_time_voucher}>
                            {' '}
                            <Typography color="text.white">02</Typography>{' '}
                          </Box>
                        </Box> */}

                        <Box
                          className={classes.btn_slick_slider}
                          onClick={() => getVoucher(item._id)}
                        >
                          <Typography
                            variant="subtitle2"
                            className={classes.text_btn_slick_slider}
                          >
                            Nhận voucher
                          </Typography>
                        </Box>
                      </Box>
                      <Box></Box>
                    </Box>
                    {/* <Box className={classes.circle1}></Box>
                    <Box className={classes.circle2}></Box> */}
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default SlideHeader;
