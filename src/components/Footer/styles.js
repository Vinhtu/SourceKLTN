import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_footer: {
    width: 1200,
    margin: 'auto auto',
    // display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    paddingBottom: '40px',
  },
  container_footer_1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  col1_footer: {
    width: '40%',
    marginRight: 24,
  },
  img_logo_footer: {
    width: 100,
    height: 50,
    marginBottom: 24,
  },
  sub_logo_footer: {
    marginBottom: '24px !important',
  },
  container_icon_social: {
    display: 'flex',
  },
  icon_social: {
    fontSize: 30,
    marginRight: 16,
  },
  col2_footer: {
    width: '20%',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  container_expend: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  bx_expend: {
    width: 1200,
    padding: '40px 0px',

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left_content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    marginRight: 20,
  },
  right_content: {
    width: '49%',
  },
}));
