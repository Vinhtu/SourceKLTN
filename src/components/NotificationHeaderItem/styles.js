import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_notification_header_item: {
    display: 'flex',
    padding: '8px 16px',
    cursor: 'pointer',
    marginBottom: 2,
  },
  img_item_notification_header: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 8,
  },
  box_total_price_cart_header: {
    display: 'flex',
    alignItems: 'center',
  },
}));
