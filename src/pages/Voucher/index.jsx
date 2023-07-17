import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Pagination,
} from '@mui/material';
import colors from '../../lib/colors';
import Layout from '../../components/Layout';
import TeamItem from '../../components/TeamItem';
import Testimonial from '../../components/Testimonial';
import BenefitItem from '../../components/BenefitItem';
import Breadcrumb from '../../components/Breadcrumb';
import useStyles from './styles';
import AboutItem from '../../components/AboutItem';
import Slider from 'react-slick';
import './style.css';
import { GetVoucherDate } from '../../redux/actions/vouchers';
import {
  GetAccount,
  PutAccountGiveVoucher,
} from '../../redux/actions/accounts';
import { setNote } from '../../redux/actions/utils';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';

const Voucher = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // arrows: true,
    className: classes.slider_body_voucher,
  };

  const { isPutVoucherAccount } = useSelector((state) => state.account);

  const { voucherList } = useSelector((state) => state.voucher);
  const { accountDetail } = useSelector((state) => state.account);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  useEffect(() => {
    dispatch(GetVoucherDate());
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch]);

  const getVoucher = (e, id) => {
    dispatch(PutAccountGiveVoucher(account_id, id, token));
  };

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
    dispatch(GetVoucherDate());
  }, [isPutVoucherAccount]);

  return (
    <Layout>
      <Breadcrumb breadcrumb="About us" />
      <Box className={classes.container_voucher}>
        <Box className={classes.box_voucher}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Voucher của tôi
          </Typography>
          <Box className={classes.slick_slider_voucher}>
            <Box
              sx={{
                width: '100%',
                height: 180,
                overflow: 'scroll',
                display: 'flex',
                flexWrap: 'nowrap',
                marginTop: 1,
              }}
            >
              {accountDetail &&
                accountDetail.voucher.map((item) => (
                  <Box sx={{ width: 500, marginRight: 2 }}>
                    <Box className={classes.item_voucher_right_voucher}>
                      <Box className={classes.body_item_voucher}>
                        <Box className={classes.body_left_item_voucher}>
                          <Box>
                            <img
                              className={classes.img_item_voucher}
                              src={item.thumbnail}
                            />
                          </Box>
                          <Box>
                            <Typography
                              color="text.secondary"
                              sx={{ marginBottom: 2 }}
                            >
                              {new Date(item.date_start).toLocaleDateString()} -{' '}
                              {new Date(item.date_end).toLocaleDateString()}
                            </Typography>
                            <Typography variant="h2" sx={{ marginTop: 1 }}>
                              {item.name}
                            </Typography>
                            <Typography variant="h1">
                              {ConvertVND(item.p_price)}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.body_right_item_voucher}>
                          <Box className={classes.code_voucher}>
                            <Typography variant="subtitle1">
                              Code: {item.code}
                            </Typography>
                          </Box>
                          {/* <Box className={classes.time_voucher}>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                00
                              </Typography>{' '}
                            </Box>
                            <Box sx={{ margin: 0.5 }}>:</Box>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                00
                              </Typography>{' '}
                            </Box>
                            <Box sx={{ margin: 0.5 }}>:</Box>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                02
                              </Typography>{' '}
                            </Box>
                          </Box> */}
                        </Box>
                        <Box></Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
        <Box className={classes.box_voucher}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Voucher đang diễn ra
          </Typography>
          <Box className={classes.slick_slider_voucher}>
            <Box
              sx={{
                width: '100%',
                height: 180,
                overflow: 'scroll',
                display: 'flex',
                flexWrap: 'nowrap',
                marginTop: 1,
              }}
            >
              {voucherList &&
                voucherList.data.results.map((item) => (
                  <Box sx={{ width: 500, marginRight: 2 }}>
                    <Box className={classes.item_voucher_right_voucher}>
                      <Box className={classes.body_item_voucher}>
                        <Box className={classes.body_left_item_voucher}>
                          <Box>
                            <img
                              className={classes.img_item_voucher}
                              src={item.thumbnail}
                            />
                          </Box>
                          <Box>
                            <Typography
                              color="text.secondary"
                              sx={{ marginBottom: 2 }}
                            >
                              {new Date(item.date_start).toLocaleDateString()} -{' '}
                              {new Date(item.date_end).toLocaleDateString()}
                            </Typography>
                            <Typography variant="h2" sx={{ marginBottom: 1 }}>
                              {item.name}
                            </Typography>
                            <Typography variant="h1">
                              {' '}
                              {ConvertVND(item.p_price)}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.body_right_item_voucher}>
                          {/* <Box className={classes.time_voucher}>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                00
                              </Typography>{' '}
                            </Box>
                            <Box sx={{ margin: 0.5 }}>:</Box>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                00
                              </Typography>{' '}
                            </Box>
                            <Box sx={{ margin: 0.5 }}>:</Box>
                            <Box className={classes.item_time_voucher}>
                              {' '}
                              <Typography color="text.white">
                                02
                              </Typography>{' '}
                            </Box>
                          </Box> */}

                          <Box
                            className={classes.btn_slick_slider}
                            onClick={(e) => getVoucher(e, item._id)}
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
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Voucher;
