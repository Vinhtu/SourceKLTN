import { makeStyles } from '@mui/styles';
import { borderRadius } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_item_category: {
    minWidth: 250,
    height: 150,
    backgroundColor: colors.lightGray,
    borderRadius: 2,
    padding: 16,
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid',
      borderColor: colors.gray,
    },
  },
  head_item_category: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_number_product: {
    display: 'flex',
    alignItems: 'center',
  },
  body_item_category: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
  img_item_category: {
    width: 65,
    height: 65,
  },
}));
