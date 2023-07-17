import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_about_item: {
    width: '100%',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  box_2_about_item: {
    width: '70%',
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_number: {
    width: 40,
    height: 40,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 16,
  },
  head_about_item: {
    display: 'flex',
    alignItems: 'center',
  },
  body_about_item: {
    textAlign: 'center',
  },
}));
