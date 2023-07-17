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

const Featured = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState('All');

  const [timeline, setTimeLine] = React.useState(true);

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  return (
    <Layout>
      <Breadcrumb breadcrumb="Flashare" data="" />

      <Box className={classes.container_product}>
        <Box className={classes.body_grid_product}>
          {/* {eventDetail &&
            eventDetail[0].eventitem.map((item, idx) => {
              console.log(item, 'item');
              return <ProductFlashare data={item} />;
            })} */}
        </Box>
        <Box className={classes.box_pagination_comment}>
          <Pagination
            count={10}
            variant="outlined"
            color="secondary"
            shape="rounded"
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Featured;
