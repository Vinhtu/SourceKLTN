import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_cart_header_item: {
    display: 'flex',
    marginBottom: 16,
  },
  img_item_cart_header: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 8,
  },
  box_total_price_cart_header: {
    display: 'flex',
    alignItems: 'center',
  },
}));
