import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_login: {
    width: 1440,
    margin: 'auto auto',
  },
  box_form_login: {
    width: 500,
    margin: '40px auto',
    marginTop: 200,
    marginBottom: 200,
  },
  form_login: {
    display: 'flex',
    marginBottom: 16,
  },
  input_login: {
    height: 40,
    borderRadius: 6,
    marginRight: 16,
    backgroundColor: colors.white,
  },
  btn_login: {
    height: 40,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.primary,
    backgroundColor: colors.primary,
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
