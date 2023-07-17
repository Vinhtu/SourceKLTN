import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SlideHeader from '../../components/SlideHeader';
import Banner from '../../components/Banner';

import ProductItem from '../../components/ProductItem';
import ProductSaleItem from '../../components/ProductSaleItem';
import { useNavigate } from 'react-router-dom';

import BlogItem from '../../components/BlogItem';
import Layout from '../../components/Layout';
import BenefitItem from '../../components/BenefitItem';
import { GetProducts } from '../../redux/actions/products';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Pagination,
} from '@mui/material';
import colors from '../../lib/colors';
import useStyles from './styles';
import FormSupportEmail from '../../components/FormSupportEmail';
import ProductFlashare from '../../components/ProductFlashare';
import CategoryItem from '../../components/CategoryItem';
import { GetEventDate } from '../../redux/actions/events';
import usePagination from '../../components/Pagination';

const Flashare = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState('All');

  const [timeline, setTimeLine] = React.useState(true);

  const { eventDetail } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(GetEventDate(new Date()));
  }, [dispatch]);

  const countdown = () => {
    if (eventDetail && eventDetail.length > 0) {
      const date_ends = new Date(
        `${eventDetail && eventDetail[0]?.date_end}`,
      ).getTime();

      const now = new Date().getTime();
      const gap = date_ends - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      document.getElementById('date') &&
        (document.getElementById('date').innerText = textDay);
      document.getElementById('hour') &&
        (document.getElementById('hour').innerText = textHour);
      document.getElementById('minute') &&
        (document.getElementById('minute').innerText = textMinute);
      document.getElementById('second') &&
        (document.getElementById('second').innerText = textSecond);

      if (textDay < 0 && textHour < 0 && textMinute < 0 && textSecond < 0) {
        setTimeLine(false);
      } else {
        setTimeLine(true);
      }
    }
  };

  setInterval(countdown, 1000);

  let [page, setPage] = useState(1);
  const PER_PAGE = 18;

  // const count = Math.ceil(
  //   eventDetail[eventDetail.length - 1]?.eventitem?.length / PER_PAGE,
  // );
  // const _DATA = usePagination(
  //   eventDetail[0]?.eventitem ? eventDetail[0]?.eventitem : [],
  //   PER_PAGE,
  // );
  // const toTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // };

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  //   toTop();
  // };

  return (
    <Layout>
      <Breadcrumb breadcrumb="Flashare" data="" />
      {timeline && (
        <Box className={classes.container_product}>
          {/* <Box className={classes.box_head_flashare}>
          <Box className={classes.box_head_flashare_left}>
            <Typography variant="h2" sx={{ marginRight: 3 }}>
              Flashare
            </Typography>
          </Box>
        </Box> */}
          <Box className={classes.box_head_flashare}>
            <Box className={classes.box_head_flashare_left}>
              <Typography variant="subtitle2" sx={{ marginRight: 2 }}>
                Thời gian còn lại
              </Typography>
              <Box className={classes.time_voucher}>
                {/* <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="subtitle1" color="text.white" id="date">
                    00
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box> */}
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="subtitle1" color="text.white" id="hour">
                    00
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box>
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography
                    variant="subtitle1"
                    color="text.white"
                    id="minute"
                  >
                    00
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box>
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography
                    variant="subtitle1"
                    color="text.white"
                    id="second"
                  >
                    02
                  </Typography>{' '}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.body_grid_product}>
            {eventDetail &&
              eventDetail[eventDetail?.length - 1].eventitem.map(
                (item, idx) => {
                  return <ProductFlashare data={item} />;
                },
              )}
          </Box>
          <Box py={5}></Box>
          {/* <Box className={classes.box_pagination_comment}>
            <Pagination
              color="secondary"
              shape="rounded"
              count={count}
              page={page}
              variant="outlined"
              onChange={handleChange}
            />
          </Box> */}
        </Box>
      )}
    </Layout>
  );
};

export default Flashare;
