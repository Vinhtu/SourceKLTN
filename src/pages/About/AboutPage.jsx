import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  MenuItem,
  Pagination,
} from '@mui/material';
import colors from '../../lib/colors';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import TeamItem from '../../components/TeamItem';
import Testimonial from '../../components/Testimonial';
import BenefitItem from '../../components/BenefitItem';
import Breadcrumb from '../../components/Breadcrumb';
import useStyles from './styles';
import AboutItem from '../../components/AboutItem';

const AboutPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Breadcrumb breadcrumb="About us" />
      <Box className={classes.container_about}>
        <Box sx={{ marginTop: 3, marginBottom: 5 }}>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/epcfWIT_Ais"
          ></iframe>
        </Box>
        <Box className={classes.box_body_about}>
          {' '}
          {/* <AboutItem /> <AboutItem /> <AboutItem /> <AboutItem /> <AboutItem />{' '} */}
        </Box>
      </Box>
    </Layout>
  );
};

export default AboutPage;
