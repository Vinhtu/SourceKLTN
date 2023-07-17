import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_item_product: {
    minWidth: 220,
    height: 130,
    borderRadius: 2,
    border: '1px solid #F5F4F3',
    position: 'relative',
  },
  img_item_product: {
    borderRadius: 2,
    height: 130,
    width: '100%',
    zIndex: -1,
    // '&:hover': {
    //   transform: 'scale(1.5)',
    // },
    cursor: 'pointer',
  },
  mask_item_product_sale: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  hover_item_product_sale: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_hover_item_product_sale: {
    color: colors.white,
    fontSize: 20,
  },
  text_hover_item_product_sale: {
    color: colors.white,
  },
}));
