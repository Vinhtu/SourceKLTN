import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_banner: {
    maxWidth: 1200,
    margin: '16px auto 40px auto',
    // animation: `$animationSlide 1000ms`,
    // height: 120,
  },

  '@keyframes animationSlide': {
    '0%': {
      paddingTop: 0,
    },
    '100%': {
      paddingTop: 100,
    },
  },

  ///item voucher
  container_item_voucher: {
    position: 'relative',
    height: 120,
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
  },
  img_voucher: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  bx_content_voucher: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevSlide: {
    padding: 0,
    width: 40,
    height: 40,
    background: '#fff',
    color: '#6C757D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // visibility: 'hidden',
    marginTop: 10,
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
  item_voucher_left: {},
  bx_btn_get: {
    cursor: 'pointer',
    position: 'relative',
    height: 32,
    width: 200,
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    transition: '0.2s',
  },
  bx_amount: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 28,
    height: 28,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  circle1: {
    backgroundColor: '#f8f9fa !important',
    width: '20px !important',
    height: '20px',
    borderRadius: ' 50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 999,
    left: '-10px',
  },
  circle2: {
    background: '#f8f9fa',
    width: '20px',
    height: '20px',
    borderRadius: ' 50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 999,
    right: '-10px',
  },
}));
