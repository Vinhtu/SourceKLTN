import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_right_sidebar: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    columnGap: 4,
    rowGap: 4,
    overflow: 'scroll',
  },

  img_item_sidebar: {
    width: 200,
    height: 280,
    backgroundImage: 'cover',
    borderRadius: 2,
    border: '1px solid',
    borderColor: colors.lightGray,
    cursor: 'pointer',
    marginBottom: 8,
    backgroundColor: colors.white,
  },
  horizontal_devider: {
    width: 200,
    height: 280,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
  // bx_item: {
  //   height: 250,
  //   width: 100,
  // },
}));
