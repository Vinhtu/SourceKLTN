import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_layout_account: {
    maxWidth: 1440,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container_left_layout_account: {
    width: '15%',
  },
  container_right_layout_account: {
    width: '79%',
  },
  box_info_account: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_account: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  box_body_menu_account: {
    padding: 16,
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
}));
