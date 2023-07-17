import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_td_product: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 16,
  },
  box_img_product: {
    marginRight: 16,
  },
  img_product_cart: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  rate_product: {
    display: 'flex',
    marginBottom: 4,
  },
  icon_star_rate_product: { color: colors.orange },
  sub_category_product: {
    fontStyle: 'italic',
  },
  td_amount_product: {
    display: 'flex',
    alignItems: 'center',
  },
  btn_reduce_amount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.lightGray1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    cursor: 'pointer',
    color: colors.white,
  },
  btn_increase_amount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.lightGray1,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    cursor: 'pointer',
    color: colors.white,
  },
  txt_amount: {
    padding: '0px 8px',
  },
  container_tr_table: {
    marginBottom: 16,
    width: '100%',
  },
  container_right_cart: {},
  head_right_cart: {},
}));
