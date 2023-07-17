import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_login: {
    width: 1440,
    margin: 'auto auto',
  },
  box_form_login: {
    width: 300,
    paddingTop: 100,
    margin: '0px auto',
    paddingBottom: 200,
  },
  input_login: {
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  input_login_password: {
    height: 40,
    borderRadius: 6,
    width: 300,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  btn_login: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    color: colors.white,
    cursor: 'pointer',
  },
  btn_register: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.green,
    backgroundColor: colors.green,
    color: colors.white,
    cursor: 'pointer',
  },
  box_btn_form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
