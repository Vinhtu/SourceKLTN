import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import LinearProgress from '@mui/material/LinearProgress';

import {
  PhoneEnabled,
  ShoppingCart,
  Notifications,
  Person,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SetMeal,
  LocalFireDepartment,
  Message,
} from '@mui/icons-material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import './style.css';
import CartHeaderItem from '../CartHeaderItem';
import { useNavigate } from 'react-router-dom';
import NotificationHeaderItem from '../NotificationHeaderItem';
import { useTranslation } from 'react-i18next';
import { GetCategorys } from '../../redux/actions/categorys';
import {
  GetNotification,
  GetNotificationAccount,
} from '../../redux/actions/notifications';
import { GetCartAccount } from '../../redux/actions/carts';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { GetAccount, LogoutX } from '../../redux/actions/accounts';
import { GetComment } from '../../redux/actions/comments';
import { Clear } from '@mui/icons-material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useSnackbar } from '@mui/base/SnackbarUnstyled';
import { css, keyframes } from '@mui/system';
import { setLanguage, setNote } from '../../redux/actions/utils';
import UtilsNote from './UtilsNote';
import { GetProducts } from '../../redux/actions/products';
import ConvertVND from '../ConvertMoney/ConvertVND';
import Modal from '@mui/material/Modal';
import Select from 'react-select';
import { SearchCharacter } from '../../redux/actions/searchs';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const blue = {
  50: '#F0F7FF',
  400: '#3399FF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  200: '#E0E3E7',
};

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const CustomSnackbar = styled('div')(
  ({ theme }) => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    right: 16px;
    top: 16px;
    left: auto;
    justify-content: start;
    font-weight: 600;
    animation: ${snackbarInRight} 500ms;
    transition: transform 0.2s ease-out;
  `,
);

const optionBrands = [
  { value: 'Không chọn', label: 'Không chọn' },
  { value: 'Nike', label: 'Nike' },
  { value: 'Convert', label: 'Convert' },
  { value: 'Fila', label: 'Fila' },
];

const optionAddress = [
  { value: 'Không chọn', label: 'Không chọn' },
  { value: 'Thành phố Hồ Chí Minh', label: 'Thành phố Hồ Chí Minh' },
  { value: 'Hà Nội', label: 'Hà Nội' },
  { value: 'Đà Nẵng', label: 'Đà Nẵng' },
];

const optionPrices = [
  { value: 'Không chọn', label: 'Không chọn' },
  { value: '0 - 1.000.000', label: '0đ - 1.000.000đ' },
  { value: '1.000.000đ - 5.000.000đ', label: '1.000.000đ - 5.000.000đ' },
  { value: '5.000.000đ', label: '> 5.000.000đ' },
];

const optionRate = [
  { value: 'Không chọn', label: 'Không chọn' },
  { value: '1s', label: '1 Star' },
  { value: '2s', label: '2 Star' },
  { value: '3s', label: '3 Star' },
  { value: '4s', label: '4 Star' },
  { value: '5s', label: '5 Star' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 6,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  width: 500,
  height: 48,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  justifyContent: 'space-between',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    fontSize: 14,
  },
}));

const HeaderDesktop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [onShowCategory, setOnShowCategory] = React.useState(false);
  const clickOnShowCategory = () => {
    setOnShowCategory(!onShowCategory);
    if (onShowCategory) {
      document.getElementById('menu_all_category_none').className =
        'menu_all_category';
    } else {
      document.getElementById('menu_all_category_none').className =
        'menu_all_category_none';
    }
  };

  const navigate = useNavigate();
  const toCustomorCare = () => {
    navigate('/customor-care');
  };
  const toAbout = () => {
    navigate(`/about`);
  };
  const toContact = () => {
    navigate(`/contact`);
  };
  const toLogin = () => {
    navigate(`/login`);
  };
  const toHome = () => {
    navigate(`/`);
  };
  const toNotification = () => {
    if (token) {
      navigate(`/account/notification`);
    } else {
      navigate(`/login`);
    }
  };
  const toCart = () => {
    if (token) {
      navigate(`/cart`);
    } else {
      navigate(`/login`);
    }
  };
  const toAccount = () => {
    if (token) {
      navigate(`/account`);
    } else {
      navigate(`/login`);
    }
  };
  const toCategory = (category) => {
    navigate(`/category/${category}`, {
      state: {
        params: category,
      },
    });
  };
  const toVoucher = () => {
    navigate(`/voucher`);
  };
  const toCheckOrder = () => {
    navigate(`/account/check-order`);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      color: colors.black,
      backgroundColor: state.isSelected ? '#EDEBE9' : colors.white,
      padding: 2,
      width: 230,
      paddingLeft: 8,
      cursor: 'pointer',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 230,
      display: 'flex',
      height: 40,
      border: '1px solid',
      borderColor: colors.darkGray,
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

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = React.useState('Việt Nam');
  const changeLanguage = (e) => {
    i18n.changeLanguage(e);
    if (e === 'vi') {
      dispatch(setLanguage('vi'));
      setCurrentLanguage('Việt Nam');
    } else if (e === 'en') {
      dispatch(setLanguage('en'));
      setCurrentLanguage('English');
    }
  };
  const { productList } = useSelector((state) => state.product);

  const { isPostCart } = useSelector((state) => state.cart);
  const { isPutCart } = useSelector((state) => state.cart);
  const { isPutComment } = useSelector((state) => state.comment);
  const { isPostOrder, isPutCancelOrder } = useSelector((state) => state.order);
  const { isPutVoucherAccount } = useSelector((state) => state.account);
  const { note } = useSelector((state) => state.utils);
  const { isPutNotification } = useSelector((state) => state.notification);

  const { accountDetail } = useSelector((state) => state.account);
  const { categoryList } = useSelector((state) => state.category);
  const { notificationList } = useSelector((state) => state.notification);
  const { cartList } = useSelector((state) => state.cart);
  const { isLogout } = useSelector((state) => state.account);
  const { dataSearch } = useSelector((state) => state.search);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [isNewNote, setIsNewNote] = React.useState(false);

  useEffect(() => {
    dispatch(GetProducts());
    dispatch(GetCategorys());
  }, [dispatch]);

  const toLogout = () => {
    dispatch(LogoutX(refreshtoken));
  };

  useEffect(() => {
    if (isLogout === 'success') {
      localStorage.removeItem('accountinfo');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    }
  }, [isLogout]);

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
      dispatch(GetNotificationAccount(account_id, token));
      dispatch(GetCartAccount(account_id, token));
    }
  }, [dispatch]);

  const validationNew = () => {
    if (notificationList) {
      let dem = 0;
      for (let i = 0; i < notificationList.length; i += 1) {
        if (notificationList[i].status === 'Pending') {
          dem += 1;
        }
        if (i === notificationList.length - 1) {
          if (dem > 0) {
            setIsNewNote(true);
          } else {
            setIsNewNote(false);
          }
        }
      }
    }
  };

  useEffect(() => {
    validationNew();
  }, [notificationList]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPostCart]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPutCart]);

  useEffect(() => {
    if (token) {
      dispatch(GetNotificationAccount(account_id, token));
    }
    validationNew();
  }, [isPutComment, isPostOrder, isPutNotification, isPutCancelOrder]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  const handleOpen = (e) => {
    setOpen(e);
    dispatch(setNote(false, null));
  };

  useEffect(() => {
    if (note?.open) {
      setOpen(true);
    }
  }, [note]);

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setOpen(false);
        dispatch(setNote(false, null));
      }, 5000);
    }
  }, [open]);

  const [txtSearch, setTxtSearch] = React.useState('');
  const ToProduct = (id, name) => {
    navigate(`/product-detail/${name}`, {
      state: { id: id },
    });
  };

  // const handleChangeSelect = (newValue) => {
  //   setDataSearch({ ...dataSearch, sort: newValue.value });
  //   // dispatch(GetProductCategoryFilter(dataSearch));
  // };
  // const [dataSearch, setDataSearch] = React.useState({
  //   // category: location.state.params,
  //   brand: [],
  //   address: [],
  //   price: '',
  //   star: [],
  //   sort: '',
  // });
  const [openBoxSearch, setOpenBoxSearch] = React.useState(false);
  const handleOpenBoxSearch = () => setOpenBoxSearch(!openBoxSearch);
  const handleCloseBoxSearch = () => setOpenBoxSearch(false);
  const onChangeSearch = (e) => {
    setTxtSearch(e);
    console.log(txtSearch, 'txtSearch');
    dispatch(SearchCharacter(e));
  };
  console.log(dataSearch, 'data search');

  return (
    <Box sx={{ position: 'relative', backgroundColor: '#f8f9fa' }}>
      <Box className={classes.container_top_header}>
        <Box className={classes.top_left_header}>
          <PhoneEnabled sx={{ fontSize: 16 }} />
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {' '}
            {t('top_header.info_contact')}
          </Typography>
          <Typography variant="body1bold" color="text.success">
            {' '}
            +01234560352{' '}
          </Typography>
        </Box>
        <Box className={classes.top_right_header}>
          <Box className="multi-language-select">
            <Typography>{currentLanguage}</Typography>
          </Box>
          <Box className="box-multi-language-hover">
            <Typography
              variant="subtitle2"
              className={classes.item_multi_language}
              onClick={() => changeLanguage('vi')}
            >
              Viet Nam
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.item_multi_language}
              onClick={() => changeLanguage('en')}
            >
              English
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ cursor: 'pointer' }}
            onClick={() => toCustomorCare()}
          >
            {t('top_header.customor_care')}
          </Typography>
          <Typography variant="body1" className={classes.vertical_devider}>
            |
          </Typography>
          <Typography
            variant="body1"
            sx={{ cursor: 'pointer' }}
            onClick={() => toAbout()}
          >
            {' '}
            {t('top_header.about_us')}
          </Typography>
          <Typography variant="body1" className={classes.vertical_devider}>
            |
          </Typography>

          {accountDetail ? (
            <>
              <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                {accountDetail.username}
              </Typography>
              <Typography variant="body1" className={classes.vertical_devider}>
                |
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: 'pointer' }}
                onClick={() => toLogout()}
              >
                {t('top_header.logout')}
              </Typography>
            </>
          ) : (
            <Typography
              variant="body1"
              sx={{ cursor: 'pointer' }}
              onClick={() => toLogin()}
            >
              {t('top_header.login')}
            </Typography>
          )}
        </Box>
      </Box>
      <Box className={classes.container_middle_header}>
        <Box className={classes.content_middle_header}>
          <Box>
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCZVhlauyNq-ctnVJPZaucXETMW9QB6hELA&usqp=CAU"
              srcSet="https://clickmajic.com/blog/wp-content/uploads/Logo-with-white-background-After-1024x729.png"
              className={classes.img_logo_header}
            /> */}
            <Typography
              variant="h1"
              style={{ color: colors.white }}
              onClick={() => toHome()}
              sx={{ cursor: 'pointer' }}
            >
              GIÀY CHÍNH HÃNG
            </Typography>
          </Box>
          <Box
            sx={{ position: 'relative' }}
            className={classNames(classes.wp_search, 'wp_search')}
          >
            <Search onClick={handleOpenBoxSearch}>
              <StyledInputBase
                placeholder="Search…"
                value={txtSearch}
                onChange={(e) => onChangeSearch(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: '#E9E9E9',
                    cursor: 'pointer !important',
                    pointerEvents: 'painted',
                  }}
                />
              </SearchIconWrapper>
            </Search>
            {/* <Box
              style={{
                display: openBoxSearch ? 'block' : 'none',
                position: 'absolute',
                backgroundColor: 'white',
                width: '100%',
                zIndex: 999,
                padding: 8,
                borderRadius: 8,
                marginTop: 8,
              }}
            >
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box>
                  <Box mb={1}>
                    <Typography variant="subtitle2"> Thương hiệu </Typography>
                  </Box>
                  <Box>
                    <Select
                      options={optionBrands}
                      styles={customStyles}
                      onChange={(e) => handleChangeSelect(e)}
                      placeholder={`${t('category.placeholder_sort')}`}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box mb={1}>
                    <Typography variant="subtitle2"> Giá tiền </Typography>
                  </Box>
                  <Box>
                    <Select
                      options={optionPrices}
                      styles={customStyles}
                      onChange={(e) => handleChangeSelect(e)}
                      placeholder={`${t('category.placeholder_sort')}`}
                    />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Box mb={1}>
                    <Typography variant="subtitle2"> Đánh giá </Typography>
                  </Box>
                  <Box>
                    <Select
                      options={optionRate}
                      styles={customStyles}
                      onChange={(e) => handleChangeSelect(e)}
                      placeholder={`${t('category.placeholder_sort')}`}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box mb={1}>
                    <Typography variant="subtitle2"> Địa chỉ </Typography>
                  </Box>
                  <Box>
                    <Select
                      options={optionAddress}
                      styles={customStyles}
                      onChange={(e) => handleChangeSelect(e)}
                      placeholder={`${t('category.placeholder_sort')}`}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                className={classes.btn_total_cart}
                onClick={handleOpenBoxSearch}
              >
                {/* <Typography variant="subtitle1" color="text.white"> *
                Tìm kiếm
                </Typography>
              </Box>
            </Box> */}

            {txtSearch && dataSearch?.length > 0 && (
              <Box
                className={classNames(
                  classes.bx_content_search,
                  'content_search',
                )}
              >
                {dataSearch?.map((item) => (
                  <Typography
                    key={item._id}
                    variant="body1"
                    className={classes.name_product_search}
                    sx={{ marginBottom: 2 }}
                    onClick={() => ToProduct(item._id, item.name)}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            )}

            {/* <Box
              className={classNames(
                classes.bx_content_search,
                'content_search',
              )}
            >
              {productList
                ?.filter((product) =>
                  product?.name.toLowerCase().includes(txtSearch),
                )
                .map((item) => (
                  <Typography
                    key={item._id}
                    variant="body1"
                    className={classes.name_product_search}
                    sx={{ marginBottom: 2 }}
                    onClick={() => ToProduct(item._id, item.name)}
                  >
                    {item.name}
                  </Typography>
                ))}
            </Box> */}
          </Box>
          {/* <Modal
            open={openBoxSearch}
            onClose={handleCloseBoxSearch}
            className={classes.model_search}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => toNotification()}
              className="notification-header"
            >
              <Badge
                // badgeContent={17}
                variant={isNewNote ? 'dot' : null}
                color="secondary"
              >
                <Notifications className={classes.icon_left_middle_header} />
              </Badge>
            </IconButton>
            <Box className="notification-header-hover">
              <Typography variant="subtitle1" sx={{ padding: 2 }}>
                {t('middel_header.note_for_you')}
              </Typography>
              <Box sx={{ padding: 0.5 }}>
                {notificationList &&
                  notificationList.map((item, idx) => {
                    if (idx < 3) {
                      return <NotificationHeaderItem data={item} />;
                    }
                  })}
              </Box>
              {/* <Box className={classes.horizontal_devider}></Box> */}
              <Box className={classes.box_note_header}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => toNotification()}
                >
                  {t('middel_header.show_all')}
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => toCart()}
              size="large"
              color="inherit"
              sx={{ marginLeft: 2 }}
              className="cart-header"
            >
              <Badge
                // badgeContent={4}
                variant={
                  cartList &&
                  cartList.data[0] &&
                  cartList.data[0].cartitem.length > 0
                    ? 'dot'
                    : null
                }
                color="secondary"
              >
                <ShoppingCart className={classes.icon_left_middle_header} />
              </Badge>
            </IconButton>
            <Box className="cart-header-hover">
              {cartList ? (
                cartList.data[0] && cartList.data[0].cartitem.length > 0 ? (
                  <>
                    {cartList.data[0].cartitem.map((item, idx) => {
                      return <CartHeaderItem data={item} />;
                    })}

                    <Box className={classes.horizontal_devider}></Box>
                    <Box>
                      <Box className={classes.box_total_price_cart_header}>
                        <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                          Số lượng:
                        </Typography>
                        <Typography variant="subtitle2">
                          {' '}
                          {cartList.data[0].amount}
                        </Typography>
                      </Box>
                      <Box className={classes.box_total_price_cart_header}>
                        <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                          {t('middel_header.total_price')}:{' '}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {' '}
                          {ConvertVND(cartList.data[0].t_price)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.btn_total_cart}>
                      {' '}
                      {t('middel_header.btn_checkout')}
                    </Box>
                  </>
                ) : (
                  <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                    {t('middel_header.no_cart')}
                  </Typography>
                )
              ) : (
                <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                  {t('middel_header.no_cart')}
                </Typography>
              )}
            </Box>

            <IconButton
              size="large"
              color="inherit"
              sx={{ marginLeft: 2 }}
              onClick={() => toAccount()}
            >
              <Badge color="secondary" sx={{ fontSize: 1 }}>
                <Person className={classes.icon_left_middle_header} />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className={classes.container_bottom_header}>
        <Box className={classes.container_left_bottom_header}>
          <Box className={classes.item_nav_left_arrow}>
            <Typography variant="subtitle1">All Category</Typography>
            {onShowCategory ? (
              <KeyboardArrowUp
                sx={{ fontSize: 16 }}
                className="arrow_extend_all_category_header"
                onClick={() => clickOnShowCategory()}
              />
            ) : (
              <KeyboardArrowDown
                sx={{ fontSize: 16 }}
                className="arrow_extend_all_category_header"
                onClick={() => clickOnShowCategory()}
              />
            )}
          </Box>
          <Box id="menu_all_category_none" className="menu_all_category_none">
            <Box className={classes.container_menu_all_category}>
              {categoryList &&
                categoryList.data.results.map((item) => (
                  <Box
                    className={classes.item_nav_category}
                    onClick={() => toCategory(item.name)}
                  >
                    {/* <SetMeal /> */}
                    <Typography variant="subtitle2">{item.name}</Typography>
                  </Box>
                ))}
            </Box>
          </Box>

          {categoryList &&
            categoryList.data.results.map((item) => {
              if (item.show === 'True') {
                if (item.type === 'Normal') {
                  return (
                    <Box
                      className={classes.item_nav_left}
                      onClick={() => toCategory(item.name)}
                    >
                      <Typography variant="subtitle1">{item.name}</Typography>
                    </Box>
                  );
                }
              }
            })}
          {categoryList &&
            categoryList.data.results.map((item) => {
              if (item.show === 'True') {
                if (item.type === 'Hot') {
                  return (
                    <Box
                      className={classes.item_nav_hot}
                      onClick={() => toCategory(item.name)}
                    >
                      <LocalFireDepartment
                        sx={{ fontSize: 16, marginRight: 1 }}
                      />
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.name}
                      </Typography>
                    </Box>
                  );
                }
              }
            })}
        </Box>
        <Box className={classes.container_right_bottom_header}>
          <Box className={classes.item_nav_right}>
            <Typography variant="subtitle1" onClick={() => toVoucher()}>
              {t('bottom_header.get_voucher')}
            </Typography>
          </Box>
          <Box className={classes.item_nav_right}>
            <Typography variant="subtitle1" onClick={() => toCheckOrder()}>
              {t('bottom_header.check_order')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <CustomSnackbar {...getRootProps()}>
            <Box className={classes.container_model_note}>
              <Box className={classes.wrap_model_note}>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 2, fontWeight: 'bold' }}
                >
                  Thông báo
                </Typography>

                <UtilsNote note={note} />
                <Box
                  className={classes.icon_delete}
                  onClick={() => handleOpen(false)}
                >
                  <Clear color="secondary" sx={{ fontSize: 14 }} />
                </Box>
              </Box>
            </Box>
          </CustomSnackbar>
        </ClickAwayListener>
      ) : null}

      {/* <MessengerCustomerChat pageId="127080551312733" appId="556417379588684" /> */}
    </Box>
  );
};

export default HeaderDesktop;
