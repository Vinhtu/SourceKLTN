import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_notification_header_item: {
    display: 'flex',
    marginBottom: 16,
    padding: 16,
    borderColor: colors.lightGray,
    border: '1px solid',
    cursor: 'pointer',
  },
  img_item_notification_header: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 8,
  },
  box_total_price_cart_header: {
    display: 'flex',
    alignItems: 'center',
  },
}));
