import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_top_header: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    height: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical_devider: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  top_left_header: {
    display: 'flex',
    alignItems: 'center',
  },
  top_right_header: {
    display: 'flex',
    alignItems: 'center',
  },
  container_middle_header: {
    height: 80,
    backgroundColor: colors.green,
  },
  content_middle_header: {
    maxWidth: 1200,
    height: 80,
    margin: 'auto auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img_logo_header: { width: 100, height: 50 },
  icon_left_middle_header: {
    color: colors.white,
  },
  container_bottom_header: {
    maxWidth: 1200,
    margin: 'auto auto',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  container_left_bottom_header: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  container_right_bottom_header: {
    display: 'flex',
  },
  item_nav_left: {
    cursor: 'pointer',
    marginRight: 16,
  },
  item_nav_right: {
    cursor: 'pointer',
    marginLeft: 16,
  },
  item_nav_left_arrow: {
    cursor: 'pointer',
    marginRight: 16,
    display: 'flex',
    alignItems: 'center',
  },
  container_menu_all_category: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  item_nav_category: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#FFEFE2',
    },
    alignItems: 'center',
    padding: '8px 24px',
  },
  item_nav_hot: {
    cursor: 'pointer',
    display: 'flex',
    padding: '4px 10px',
    borderRadius: 50,
    backgroundColor: '#FFEFE2',
    alignItems: 'center',
    marginRight: 8,
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
  box_total_price_cart_header: {
    display: 'flex',
    alignItems: 'center',
  },
  box_note_header: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_total_cart: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.orange,
    marginTop: 24,
    borderRadius: 6,
    border: '1px solid',
    // color: colors.orange,
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    color: colors.white,
    // '&:hover': {
    //   backgroundColor: colors.orange,
    //   color: colors.white,
    // },
    cursor: 'pointer',
  },
  item_multi_language: {
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: colors.lightGray,
    },
  },
  container_model_note: {
    // position: 'absolute',
    right: 50,
    top: 50,
  },
  wrap_model_note: {
    width: 300,
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    padding: 16,
    position: 'relative',
    zIndex: 999,
  },
  icon_delete: {
    position: 'absolute',
    left: -3,
    top: -3,
    cursor: 'pointer',
    width: 10,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.lightGray,
  },
  // container_bottom_header: {
  //   backgroundColor: '#f8f9fa',
  // },

  bx_content_search: {
    position: 'absolute',
    top: 49,
    width: 500,
    backgroundColor: colors.white,
    height: 500,
    borderRadius: 16,
    padding: 24,
    overflow: 'scroll',
    zIndex: 999,
    display: 'block',
  },
  // wp_search: {
  //   '&:hover .content_search': {
  //     display: 'block !important',
  //   },
  // },
  name_product_search: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
  },
  model_search: {
    top: 50,
  },

  btn_total_cart: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.orange,
    marginTop: 24,
    borderRadius: 6,
    border: '1px solid',

    backgroundColor: colors.orange,
    color: colors.white,

    cursor: 'pointer',
  },
}));
