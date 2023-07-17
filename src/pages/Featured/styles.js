import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_product: {
    width: 1200,
    margin: 'auto auto',
    marginBottom: 24,
  },
  container_product_list_img: {
    width: 1440,
    margin: 'auto auto',
    marginBottom: 24,
  },
  body_grid_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    columnGap: 10,
    rowGap: 10,
  },

  body_grid_category_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
  body_grid_product_sale: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
  container_btn_show_product: {
    width: '100%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btn_show_product: {
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'cemter',
    borderRadius: 10,
    '&:hover': {
      border: `1px solid ${colors.green}`,
      padding: '8px 16px',
    },
    cursor: 'pointer',
  },
  text_show_product: {},
  time_voucher: {
    display: 'flex',
    alignItems: 'center',
  },
  item_time_voucher: {
    padding: '8px 12px',
    backgroundColor: colors.orange,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_head_flashare: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_head_flashare_left: {
    display: 'flex',
    alignItems: 'center',
  },
  box_header_item_category: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_intro_event: {
    height: 100,
    width: 1140,
    margin: '40px auto',
  },
  img_intro_event: {
    width: '100%',
    height: '100%',
  },
  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 100,
    alignItems: 'center',
  },
}));
