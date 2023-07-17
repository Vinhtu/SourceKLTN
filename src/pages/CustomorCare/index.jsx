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
import { ForwardToInbox, Phone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const CustomorCare = (props) => {
  const classes = useStyles();
  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);
  const [state4, setState4] = React.useState(false);
  const [state5, setState5] = React.useState(false);
  const [state6, setState6] = React.useState(false);
  const [state7, setState7] = React.useState(false);
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="About us" />
      <Box className={classes.container_customor_care}>
        <Typography sx={{ marginBottom: 2, fontSize: 24, cursor: 'pointer' }}>
          {t('contact.contact_direct')}
        </Typography>
        <Box sx={{ marginBottom: 2, display: 'flex' }}>
          <Box className={classes.box_item_contact}>
            <ForwardToInbox
              sx={{
                fontSize: 30,
                color: colors.lightGray1,
                marginRight: 2,
                cursor: 'pointer',
              }}
            />
            <Typography sx={{ fontSize: 20, cursor: 'pointer' }}>
              lyant.support@gmail.com
            </Typography>
          </Box>
          <Box className={classes.box_item_contact}>
            <Phone
              sx={{
                fontSize: 30,
                color: colors.lightGray1,
                marginRight: 2,
                cursor: 'pointer',
              }}
            />
            <Typography sx={{ fontSize: 20, cursor: 'pointer' }}>
              +84 9933 123 412
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ marginBottom: 2, fontSize: 24, cursor: 'pointer' }}>
          {t('contact.question')}
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState1(!state1)}
          >
            {t('contact.my_account')}
          </Typography>
          {state1 && (
            <Box className={classes.box_body_item_contact}>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState2(!state2)}
          >
            {' '}
            {t('contact.ship_get')}
          </Typography>
          {state2 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState3(!state3)}
          >
            {t('contact.product')}
          </Typography>
          {state3 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState4(!state4)}
          >
            {t('contact.money_back')}
          </Typography>
          {state4 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState5(!state5)}
          >
            {t('contact.voucher')}
          </Typography>
          {state5 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ marginBottom: 2, fontSize: 20, cursor: 'pointer' }}
            // onClick={() => setState6(!state6)}
          >
            {t('contact.sale_with')}
          </Typography>
          {state6 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                Tai khoan duoc danh gia nhu the nao
              </Typography>
              <Typography>Tai khoan duoc danh gia nhu the nao</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default CustomorCare;
