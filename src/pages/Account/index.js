import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { GetAccount, PutAccount, Register } from '../../redux/actions/accounts';

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
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import useStyles from './styles';
import LayoutAccount from '../../components/LayoutAccount';
import { useTranslation } from 'react-i18next';
import {
  GetDistricts,
  GetProvinces,
  GetWards,
} from '../../redux/actions/utils';
import { Height } from '@mui/icons-material';
import colors from '../../lib/colors';

const Account = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokenGHN = '90ce8fc1-612b-11ed-b824-262f869eb1a7';

  const [editName, setEditName] = React.useState(false);
  const [editPhone, setEditPhone] = React.useState(false);
  const [editUsername, setEditUsername] = React.useState(false);
  const [editAddress, setEditAddress] = React.useState(false);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { accountDetail } = useSelector((state) => state.account);
  const { isPutAccount } = useSelector((state) => state.account);
  const { provinceList, districtList, wardList } = useSelector(
    (state) => state.utils,
  );

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
    dispatch(GetProvinces(tokenGHN));
  }, [dispatch]);

  useEffect(() => {
    setDataAccount({
      ...dataAccount,
      fullname: accountDetail?.fullname,
      username: accountDetail?.username,
      phone: accountDetail?.phone,
      streetAddress: accountDetail?.streetAddress,
      wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
      cityAddress: accountDetail?.cityAddress,
      zipAddress: accountDetail?.zipAddress,
      district: accountDetail?.district,
      province: accountDetail?.province,
      ward: accountDetail?.ward,
      zip: accountDetail?.zip,
    });
  }, [accountDetail]);

  const [dataAccount, setDataAccount] = React.useState({
    fullname: accountDetail?.fullname,
    username: accountDetail?.username,
    phone: accountDetail?.phone,
    streetAddress: accountDetail?.streetAddress,
    wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
    cityAddress: accountDetail?.cityAddress,
    zipAddress: accountDetail?.zipAddress,
    district: accountDetail?.district,
    province: accountDetail?.province,
    ward: accountDetail?.ward,
    zip: accountDetail?.zip,
  });

  const handleDataAccount = (e) => {
    setDataAccount({ ...dataAccount, [e.target.id]: e.target.value });
  };

  const editInfoAccount = () => {
    dispatch(PutAccount(account_id, dataAccount, token));
    setEditName(false);
    setEditPhone(false);
    setEditUsername(false);
    setEditAddress(false);
  };

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [isPutAccount]);

  const { t, i18n } = useTranslation();

  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');

  const selectProvince = (provinceId) => {
    dispatch(GetDistricts(tokenGHN, provinceId));
  };
  const selectDistrict = (districtId) => {
    dispatch(GetWards(tokenGHN, districtId));
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="Account">
          <Box className={classes.head_body_account}>
            <Typography variant="h2">{t('account.info_account')}</Typography>
          </Box>
          <Box className={classes.content_body_account}>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3">{t('account.name')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditName(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editName ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="fullname"
                        value={dataAccount.fullname}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditName(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.fullname}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3"> {t('account.username')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditUsername(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editUsername ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="username"
                        value={dataAccount.username}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditUsername(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.username}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3"> {t('account.phone')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditPhone(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editPhone ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="phone"
                        value={dataAccount.phone}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditPhone(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.phone}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box className={classes.box_item_account}>
            <Box className={classes.head_item_account}>
              <Typography variant="h3"> {t('account.address')}</Typography>
              <Box className={classes.vertical_devider}>|</Box>
              <Typography
                variant="subtitle2"
                sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                color="primary"
                onClick={() => setEditAddress(true)}
              >
                {t('account.edit')}
              </Typography>
            </Box>
            <Box className={classes.body_item}>
              {editAddress ? (
                <Box className={classes.box_edit_item_address}>
                  <Box sx={{ marginRight: 2 }}>
                    <Box sx={{ display: 'flex' }}>
                      <FormControl>
                        <InputLabel
                          id="demo-controlled-open-select-label"
                          sx={{ color: colors.primary }}
                        >
                          {dataAccount.cityAddress}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={dataAccount.cityAddress}
                          label={dataAccount.cityAddress}
                          onChange={(e) =>
                            setDataAccount({
                              ...dataAccount,
                              cityAddress: e.target.value,
                            })
                          }
                          sx={{
                            width: 200,
                            height: '40px',
                            marginRight: 2,
                            marginBottom: 1,
                          }}
                        >
                          {provinceList?.data?.map((item) => {
                            return (
                              <MenuItem
                                value={item.ProvinceName}
                                onClick={() => selectProvince(item.ProvinceID)}
                              >
                                {item.ProvinceName}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl>
                        <InputLabel
                          id="demo-controlled-open-select-label"
                          sx={{ color: colors.primary }}
                        >
                          {dataAccount.wardCommunedistrictAddress}
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          value={dataAccount.wardCommunedistrictAddress}
                          label={dataAccount.wardCommunedistrictAddress}
                          sx={{
                            width: 200,
                            height: '40px',
                            marginRight: 2,
                            marginBottom: 1,
                          }}
                          defaultValue={dataAccount.wardCommunedistrictAddress}
                          onChange={(e) =>
                            setDataAccount({
                              ...dataAccount,
                              wardCommunedistrictAddress: e.target.value,
                            })
                          }
                        >
                          {districtList?.data?.map((item) => {
                            return (
                              <MenuItem
                                value={item.DistrictName}
                                onClick={() => selectDistrict(item.DistrictID)}
                              >
                                {item.DistrictName}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl>
                        <InputLabel
                          id="demo-controlled-open-select-label"
                          sx={{ color: colors.primary }}
                        >
                          {dataAccount.streetAddress}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={dataAccount.streetAddress}
                          label={dataAccount.streetAddress}
                          sx={{
                            width: 200,
                            height: '40px',
                            marginRight: 2,
                            marginBottom: 1,
                          }}
                          onChange={(e) =>
                            setDataAccount({
                              ...dataAccount,
                              streetAddress: e.target.value,
                            })
                          }
                        >
                          {wardList?.data?.map((item) => {
                            return (
                              <MenuItem value={item.WardName}>
                                {item.WardName}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      {/* <input
                        type="text"
                        id="streetAddress"
                        value={dataAccount.streetAddress}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account_address}
                      />
                      <input
                        type="text"
                        id="wardCommunedistrictAddress"
                        value={dataAccount.wardCommunedistrictAddress}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account_address}
                      />
                      <input
                        type="text"
                        id="cityAddress"
                        value={dataAccount.cityAddress}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account_address}
                      /> */}
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <input
                        type="text"
                        id="zipAddress"
                        value={dataAccount.zipAddress}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account_address}
                      />
                      {/* <input
                        type="text"
                        id="street"
                        value={dataAccount.streetAddress}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account_address}
                      /> */}
                    </Box>
                  </Box>
                  <Box className={classes.box_btn}>
                    <Box
                      className={classes.btn_cancle}
                      onClick={() => setEditAddress(false)}
                    >
                      {t('account.cancel')}
                    </Box>
                    <Box
                      className={classes.btn_save}
                      onClick={() => editInfoAccount()}
                    >
                      {' '}
                      {t('account.edit')}
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Typography variant="subtitle2">
                  {dataAccount.streetAddress +
                    ', ' +
                    dataAccount.wardCommunedistrictAddress +
                    ', ' +
                    dataAccount.cityAddress +
                    ', ' +
                    dataAccount.zipAddress}{' '}
                  {}
                </Typography>
              )}
            </Box>
          </Box>
        </LayoutAccount>
        {/* <Box className={classes.container_edit_name}>
          <Box className={classes.box_edit_name}>
            <Box>
              <Typography variant="h3" sx={{ marginBottom: 2 }}>
                Ho va ten
              </Typography>
              <input
                type="text"
                id="username"
                value="ho va ten"
                onChange={handleDataLogin}
                className={classes.input_edit_info_account}
              />
            </Box>
            <Box className={classes.box_footer_model}>
              <Box></Box>
              <Box className={classes.box_btn}>
                <Box className={classes.btn_cancle}>Huy</Box>
                <Box className={classes.btn_save}>Chinh sua</Box>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Layout>
  );
};

export default Account;
