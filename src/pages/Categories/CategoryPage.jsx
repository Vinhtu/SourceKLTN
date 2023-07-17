import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductItem from '../../components/ProductItem';
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
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import './style.css';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  GetProductCategory,
  GetProductCategoryFilter,
} from '../../redux/actions/products';
import { GetBrands } from '../../redux/actions/brands';
import usePagination from '../../components/Pagination';
const address_utils = [
  { name: 'TP Hồ Chí Minh' },
  { name: 'Hà Nội' },
  { name: 'Đồng Nai' },
  { name: 'Lào Cai' },
  { name: 'Sơn La' },
  { name: 'Nghệ An' },
  { name: 'Đà Nẵng' },
  { name: 'Đồng Tháp' },
];

const rate_utils = [
  { name: '1 star' },
  { name: '2 star' },
  { name: '3 star' },
  { name: '4 star' },
  { name: '5 star' },
];

const options = [
  { value: 'Khong chon', label: 'Khong chon' },
  { value: 'Tu cao den thap', label: 'Tu cao den thap' },
  { value: 'Tu thap den cao', label: 'Tu thap den cao' },
  { value: 'Theo thoi gian', label: 'Theo thoi gian' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: '1px dotted pink',
    color: colors.black,
    backgroundColor: state.isSelected ? '#EDEBE9' : colors.white,
    padding: 2,
    width: 200,
    paddingLeft: 8,
    cursor: 'pointer',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    display: 'flex',
    height: 40,
    border: '1px solid',
    borderColor: colors.gray,
    alignItems: 'center',
    borderRadius: 4,
    zIndex: 9999999,
    backgroundColor: colors.white,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const CategoryPage = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const valuetext = (value) => {
    if (value === 1) {
      return `${value}.000 VNĐ`;
    } else {
      return ` > ${value}.000.000 VNĐ`;
    }
  };
  const [currency, setCurrency] = React.useState('EUR');
  const [showBrand, setShowBrand] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [showDifferent, setShowDifferent] = React.useState(false);
  const { productCategoryList } = useSelector((state) => state.product);
  const { brandList } = useSelector((state) => state.brand);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(GetProductCategory(location.state.params));
    dispatch(GetBrands());
  }, [dispatch, location.state.params]);

  const [dataSearch, setDataSearch] = React.useState({
    category: location.state.params,
    brand: [],
    address: [],
    price: '',
    star: [],
    sort: '',
  });

  const handleChangeBrand = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.brand;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        brand: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.brand.filter(
        (item) => item !== e.target.name,
      );
      setDataSearch({ ...dataSearch, brand: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeAddress = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.address;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        address: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.address.filter(
        (item) => item !== e.target.name,
      );
      setDataSearch({ ...dataSearch, address: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeStar = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.star;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        star: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.star.filter((item) => item !== e.target.name);
      setDataSearch({ ...dataSearch, star: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeSlider = (e, newValue, activeThumb) => {
    if (newValue === 1) {
      setDataSearch({ ...dataSearch, price: '1000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 3) {
      setDataSearch({ ...dataSearch, price: '3000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 5) {
      setDataSearch({ ...dataSearch, price: '5000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 7) {
      setDataSearch({ ...dataSearch, price: '7000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 9) {
      setDataSearch({ ...dataSearch, price: '9000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 11) {
      setDataSearch({ ...dataSearch, price: '11000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };

  const handleChangeSelect = (newValue) => {
    setDataSearch({ ...dataSearch, sort: newValue.value });
    dispatch(GetProductCategoryFilter(dataSearch));
  };

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(productCategoryList?.length / PER_PAGE);
  const _DATA = usePagination(
    productCategoryList ? productCategoryList : [],
    PER_PAGE,
  );
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    toTop();
  };

  return (
    <Layout>
      <Breadcrumb breadcrumb="shop" data="" />
      <Box className={classes.container_category}>
        <Box className={classes.left_body_category}>
          <Box className={classes.head_brand}>
            <Typography variant="subtitle1" color="text.white">
              {t('category.optional')}
            </Typography>
          </Box>
          <Box className={classes.box_brand}>
            <Typography variant="subtitle2" className={classes.title_brand}>
              {' '}
              {t('category.brand')}
            </Typography>
            <Box className={classes.box_item_brand}>
              <Box
                className={classes.item_brand}
                style={{
                  height: !showBrand && 100,
                  overflow: showBrand ? 'none' : 'hidden',
                }}
              >
                {brandList &&
                  brandList.data.results.map((item, idx) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="20px"
                          sx={{
                            color: colors.gray,
                            '&.Mui-checked': {
                              color: colors.orange,
                            },
                          }}
                          name={item.name}
                          onChange={(e) => handleChangeBrand(e)}
                        />
                      }
                      label={item.name}
                    />
                  ))}
              </Box>
              <Box
                className={classes.box_expand_brand}
                onClick={() => setShowBrand(!showBrand)}
              >
                <Typography
                  variant="body1"
                  color="text.success"
                  sx={{ cursor: 'pointer' }}
                >
                  {!showBrand ? 'Xem thêm' : 'Ẩn bớt'}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.horizontal_devider}></Box>
          <Box className={classes.box_brand}>
            <Typography variant="subtitle2" className={classes.title_brand}>
              {' '}
              {t('category.address')}
            </Typography>
            <Box className={classes.box_item_brand}>
              <Box
                className={classes.item_brand}
                style={{
                  height: !showAddress && 100,
                  overflow: showAddress ? 'none' : 'hidden',
                }}
              >
                {address_utils.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="20px"
                        sx={{
                          color: colors.gray,
                          '&.Mui-checked': {
                            color: colors.orange,
                          },
                        }}
                        name={item.name}
                        onChange={(e) => handleChangeAddress(e)}
                      />
                    }
                    label={item.name}
                  />
                ))}
              </Box>
              <Box
                className={classes.box_expand_brand}
                onClick={() => setShowAddress(!showAddress)}
              >
                <Typography
                  variant="body1"
                  color="text.success"
                  sx={{ cursor: 'pointer' }}
                >
                  {!showAddress ? 'Xem thêm' : 'Ẩn bớt'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
          <Box className={classes.box_brand}>
            <Typography variant="subtitle2">{t('category.price')}</Typography>
            <Slider
              aria-label="Temperature"
              defaultValue={2}
              // getAriaValueText={(e) => valuetext(e)}
              valueLabelFormat={(e) => valuetext(e)}
              valueLabelDisplay="auto"
              onChange={handleChangeSlider}
              step={2}
              marks
              min={1}
              max={11}
            />
          </Box>

          <Box className={classes.horizontal_devider}></Box>
          <Box className={classes.box_brand}>
            <Typography variant="subtitle2" className={classes.title_brand}>
              {' '}
              {t('category.rate')}
            </Typography>
            <Box className={classes.box_item_brand}>
              <Box
                className={classes.item_brand}
                style={{
                  height: !showDifferent && 100,
                  overflow: showDifferent ? 'none' : 'hidden',
                }}
              >
                {rate_utils.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="20px"
                        sx={{
                          color: colors.gray,
                          '&.Mui-checked': {
                            color: colors.orange,
                          },
                        }}
                        name={item.name}
                        onChange={(e) => handleChangeStar(e)}
                      />
                    }
                    label={item.name}
                  />
                ))}
              </Box>
              <Box
                className={classes.box_expand_brand}
                onClick={() => setShowDifferent(!showDifferent)}
              >
                <Typography
                  variant="body1"
                  color="text.success"
                  sx={{ cursor: 'pointer' }}
                >
                  {!showDifferent ? 'Xem thêm' : 'Ẩn bớt'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.right_body_category}>
          <Box className={classes.head_body}>
            <Box>
              <Typography variant="subtitle2">
                {location.state.params} ({productCategoryList?.length}){' '}
              </Typography>
            </Box>
            <Box>
              <Box className={classes.box_right_head_body}>
                <Typography sx={{ marginRight: 2 }}>
                  {' '}
                  {t('category.sort')}
                </Typography>

                <Select
                  options={options}
                  styles={customStyles}
                  onChange={(e) => handleChangeSelect(e)}
                  placeholder={`${t('category.placeholder_sort')}`}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.middle_body}>
            <Box className={classes.body_grid_product}>
              {_DATA.currentData().map((item, idx) => (
                <ProductItem data={item} />
              ))}
            </Box>
            <Box className={classes.box_pagination_comment}>
              <Pagination
                color="secondary"
                shape="rounded"
                count={count}
                page={page}
                variant="outlined"
                onChange={handleChangePage}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CategoryPage;
