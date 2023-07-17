import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_cart: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container_left_cart: {
    width: '70%',
  },
  container_right_cart: {
    width: '30%',
  },
  // th_product: {
  //   width: '40%',
  // },
  // th_product: {
  //   width: '15%',
  // },
  tr_table_cart: {
    width: '100%',
    // display: 'flex',
    // justifyContent: 'space-around',
  },
  table_cart: {
    width: '100%',
  },

  container_right_cart: {
    width: '25%',
    border: '1px solid',
    borderColor: colors.lightGray,
    borderRadius: 10,
    backgroundColor: colors.white,
  },

  head_right_cart: {
    width: '100&',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.green,
  },
  box_address_ship: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
  box_brand: {
    padding: 8,
  },
  box_item_total_cart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  btn_total_cart: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.orange,
    marginTop: 40,
    borderRadius: 6,
    border: '1px solid',
    color: colors.orange,
    borderColor: colors.orange,
    '&:hover': {
      backgroundColor: colors.orange,
      color: colors.white,
    },
    cursor: 'pointer',
  },
}));
