import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_customor_care: {
    width: 900,
    margin: 'auto auto',
  },
  box_item_contact: {
    height: 100,
    width: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    marginRight: 16,
  },
  box_body_item_contact: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}));
