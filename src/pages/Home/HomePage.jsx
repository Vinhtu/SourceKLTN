import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SlideHeader from '../../components/SlideHeader';
import Banner from '../../components/Banner';

import ProductItem from '../../components/ProductItem';
import ProductSaleItem from '../../components/ProductSaleItem';

import BlogItem from '../../components/BlogItem';
import Layout from '../../components/Layout';
import BenefitItem from '../../components/BenefitItem';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import colors from '../../lib/colors';
import useStyles from './styles';
import FormSupportEmail from '../../components/FormSupportEmail';
import ProductFlashare from '../../components/ProductFlashare';
import CategoryItem from '../../components/CategoryItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  GetProducts,
  GetProductTopSale,
  GetRecommenderSystem,
} from '../../redux/actions/products';

import { GetCategorys } from '../../redux/actions/categorys';
import { GetEventDate } from '../../redux/actions/events';
import SlideVoucher from '../../components/SlideVoucher';
import BestSalerSection from '../../components/BestSalerSection';
import classNames from 'classnames';
const HomePage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const newUser = urlParams.get('message');
  console.log(newUser, 'momoooo');

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState('All');

  const [dataCategory, setDataCategory] = React.useState([]);

  const [timeline, setTimeLine] = React.useState(true);

  const { isPostOrder } = useSelector((state) => state.order);

  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);
  const { productTopSale } = useSelector((state) => state.product);
  const { eventDetail } = useSelector((state) => state.event);
  const [arrivalMessage, setArrivalMessage] = React.useState([]);

  useEffect(() => {
    dispatch(GetCategorys());
    dispatch(GetProducts());
    dispatch(GetEventDate(new Date()));
  }, [dispatch]);

  const toFlashare = () => {
    navigate('/flashare');
  };
  const toTopSale = () => {
    navigate('/top-sale');
  };

  useEffect(() => {
    dispatch(GetProducts());
  }, [isPostOrder]);
  const { t, i18n } = useTranslation();

  const validateCategory = () => {
    if (categoryList && productList) {
      if (dataCategory.length === 0) {
        for (let i = 0; i < categoryList.data.results.length; i += 1) {
          let arrProduct = [];
          for (let p = 0; p < productList.length; p += 1) {
            if (categoryList.data.results[i].name === productList[p].category) {
              arrProduct.push(productList[p]);
            }
            if (p === productList.length - 1) {
              setDataCategory((current) => [
                ...current,
                {
                  category: categoryList.data.results[i].name,
                  product: arrProduct,
                  amount: arrProduct.length,
                },
              ]);
            }
          }
        }
      }
    }
  };

  validateCategory();

  const countdown = () => {
    if (eventDetail && eventDetail.length > 0) {
      const date_ends = new Date(
        `${eventDetail && eventDetail[0].date_end}`,
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

  useEffect(() => {
    if (!eventDetail || !(eventDetail.length > 0)) {
      setTimeLine(false);
    }
  });

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  if (!isOnline) {
    return (
      <Box>
        <Typography variant="subtitle1">Khong co internet</Typography>
      </Box>
    );
  }
  return (
    <Layout>
      <SlideHeader />
      <Banner />
      {/* <Box sx={{ padding: 4 }}></Box> */}
      {/* <Box className={classes.container_product_list_img}>
        <Box className={classes.body_grid_product_sale}>
          {Array(12)
            .fill(1)
            .map((item, idx) => (
              <ProductSaleItem new={true} />
            ))}
        </Box>
      </Box> */}
      <Box pb={0} sx={{ padding: 4 }}></Box>
      {timeline && eventDetail?.length > 0 && (
        <Box className={classes.container_product}>
          <Box className={classes.box_head_flashare}>
            <Box className={classes.box_head_flashare_left}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 40,
                  fontWeight: 100,
                  textAlign: 'center',
                  color: colors.orange,
                  fontWeight: 'bold',
                }}
              >
                {eventDetail &&
                  eventDetail.length > 0 &&
                  eventDetail[eventDetail?.length - 1]?.name}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.box_head_flashare}>
            <Box className={classes.box_head_flashare_left_title}>
              <Typography
                sx={{
                  fontSize: 30,
                  fontWeight: 100,
                  textAlign: 'center',
                  color: colors.white,
                  fontWeight: 'bold',
                }}
              >
                {t('home.txt_last_tim')}
              </Typography>
            </Box>
            <Box className={classes.box_head_flashare_left_time}>
              <Box className={classes.time_voucher}>
                {/* <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="h1" color="text.white" id="date">
                    00
                  </Typography>{' '}
                  <Typography variant="h2" color="text.white" id="date">
                    Ngày
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box> */}
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="h1" color="text.white" id="hour">
                    00
                  </Typography>{' '}
                  <Typography variant="h2" color="text.white">
                    Giờ
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box>
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="h1" color="text.white" id="minute">
                    00
                  </Typography>{' '}
                  <Typography variant="h2" color="text.white">
                    Phút
                  </Typography>{' '}
                </Box>
                <Box sx={{ margin: 0.5 }}>:</Box>
                <Box className={classes.item_time_voucher}>
                  {' '}
                  <Typography variant="h1" color="text.white" id="second">
                    02
                  </Typography>{' '}
                  <Typography variant="h2" color="text.white">
                    Giây
                  </Typography>{' '}
                </Box>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', cursor: 'pointer', marginTop: 1 }}
              onClick={() => toFlashare()}
            >
              Xem tất cả
            </Typography>
          </Box>
          <Box mt={8} display="flex" justifyContent="space-between">
            <Box mr={2.5} className={classes.container_item_banner}>
              <Box className={classNames(classes.item_banner, 'item_banner')}>
                <img
                  src="https://intphcm.com/data/upload/poster-giay-da-bong.jpg"
                  className={classNames(classes.img_banner, 'img_banner')}
                />
              </Box>
            </Box>
            <Box className={classes.body_grid_product_event}>
              {eventDetail &&
                eventDetail.length > 0 &&
                eventDetail[eventDetail?.length - 1].eventitem.map(
                  (item, idx) => {
                    if (idx < 8) {
                      return <ProductFlashare data={item} />;
                    }
                  },
                )}
            </Box>
          </Box>
        </Box>
      )}
      <Box className={classes.container_product}>
        <Box className={classes.box_header_item_category}>
          <Typography
            sx={{ fontSize: 30, fontWeight: 100, textAlign: 'center' }}
          >
            {t('home.title_category')}
          </Typography>
        </Box>

        <BestSalerSection data={dataCategory} />
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1440,
          margin: 'auto auto',
        }}
      >
        <Box className={classes.box_intro_event}>
          <img
            src="https://1.bp.blogspot.com/-tV2cExmADc8/XxRDLyQy5TI/AAAAAAAAcss/XHqM6lRZHgkGLDHBY02NHuPVE488DlFJwCLcBGAsYHQ/d/thiet%2Bke%2Bdisney%2B-%2Bfamilynkids-01.jpg"
            className={classes.img_intro_event}
          />
        </Box>
        <Box className={classes.box_intro_event_2}>
          <img
            src="https://1.bp.blogspot.com/-tV2cExmADc8/XxRDLyQy5TI/AAAAAAAAcss/XHqM6lRZHgkGLDHBY02NHuPVE488DlFJwCLcBGAsYHQ/d/thiet%2Bke%2Bdisney%2B-%2Bfamilynkids-01.jpg"
            className={classes.img_intro_event}
          />
        </Box>
      </Box> */}

      {/* <Box className={classes.container_product}>
        <Box className={classes.box_header_item_category}>
          <Typography variant="h1" sx={{ fontWeight: 100 }}>
            {' '}
            {t('home.title_product_best_saler')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{ fontStyle: 'italic', cursor: 'pointer' }}
            onClick={() => toTopSale()}
          >
            {t('home.txt_show_all_best_saler')}
          </Typography>
        </Box>
        <Box className={classes.body_grid_product}>
          {productTopSale &&
            productTopSale.map((item, idx) => {
              if (idx < 6) {
                return <ProductItem new={true} data={item} />;
              }
            })}
        </Box>
      </Box> */}

      <Box className={classes.container_product}>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 100,
            textAlign: 'center',
            marginBottom: 5,
          }}
        >
          {t('home.title_product_for_you')}
        </Typography>
        <Box className={classes.body_grid_product}>
          {productList &&
            productList.map((item, idx) => (
              <ProductItem new={true} data={item} />
            ))}
        </Box>
        {/* <Box className={classes.container_btn_show_product}>
          <Box className={classes.btn_show_product}>
            <Typography
              variant="subtitle1"
              color="text.success"
              className={classes.text_show_product}
            >
              {t('home.txt_show_product_for_you')}
            </Typography>
          </Box>
        </Box> */}
      </Box>

      <Box className={classes.container_product}>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 100,
            textAlign: 'center',
            marginBottom: 5,
          }}
        >
          Tất cả sản phẩm
        </Typography>
        <Box className={classes.body_grid_product}>
          {productList &&
            productList.map((item, idx) => (
              <ProductItem new={true} data={item} />
            ))}
        </Box>
        {/* <Box className={classes.container_btn_show_product}>
          <Box className={classes.btn_show_product}>
            <Typography
              variant="subtitle1"
              color="text.success"
              className={classes.text_show_product}
            >
              {t('home.txt_show_product_for_you')}
            </Typography>
          </Box>
        </Box> */}
      </Box>

      {/* <Box>
        <Box className={classes.container_product_list_img}>
          <Box className={classes.body_grid_product_sale}>
            {Array(6)
              .fill(1)
              .map((item, idx) => (
                <ProductSaleItem new={true} />
              ))}
          </Box>
        </Box>
      </Box> */}
    </Layout>
  );
};

export default HomePage;
