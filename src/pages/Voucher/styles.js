import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_voucher: {
    width: 1200,
    margin: 'auto auto',
  },

  box_body_about: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    columnGap: 16,
    rowGap: 16,
  },
  slick_slider_voucher: {},
  box_voucher: {
    marginBottom: 24,
  },
  lider_body_voucher: {
    'slick-list': {
      height: 350,
    },
  },
  left_body_voucher: {
    width: '60%',
    height: 350,
  },
  right_body_voucher: {
    width: '39%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  item_slick_slider_left_voucher: {
    backgroundColor: 'F3E9E5',
    borderRadius: 10,
    height: 350,
    padding: 50,
  },
  content_slick_slider_voucher: {
    width: '50%',
  },
  title_slick_slider_voucher: {},
  sub_slick_slider_voucher: {
    fontStyle: 'italic !important',
    marginBottom: '16px !important',
  },
  btn_slick_slider: {
    padding: '8px 16px',
    backgroundColor: colors.green,
    borderRadius: 6,
    width: 'fit-content',
    cursor: 'pointer',
  },
  text_btn_slick_slider: {
    color: colors.white,
  },
  item_voucher_right_voucher: {
    width: 500,
    borderRadius: 16,
    position: 'relative',
    boxShadow: '0 1px 5px 0 rgb(0 0 0 / 10%)',
    marginTop: 8,
    marginLeft: 8,
    backgroundColor: colors.white,
  },
  badge_voucher: {
    position: 'absolute',
    right: 20,
    top: -10,
    padding: '4px 8px',
    backgroundColor: colors.white,
  },
  text_badge_voucher: {
    fontStyle: 'italic !important',
    color: colors.gray,
  },
  body_item_voucher: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16,
  },
  body_left_item_voucher: {
    display: 'flex',
    width: '70%',
  },
  body_right_item_voucher: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img_item_voucher: {
    width: 130,
    height: 130,
    borderRadius: 6,
    marginRight: 8,
  },
  time_voucher: {
    display: 'flex',
    alignItems: 'center',
  },
  item_time_voucher: {
    padding: '8px 8px',
    backgroundColor: colors.orange,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask_item_voucher: {
    position: 'absolute',
    bottom: 1,
    opacity: 0.5,
    zIndex: 99,
    height: 40,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(to top, #FFEFE2, ${colors.white})`,
    padding: '1px',
  },
  mask_text_item_voucher: {
    position: 'absolute',
    bottom: 1,
    zIndex: 99,
    height: 40,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1px',
  },
  code_voucher: {
    height: 40,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
