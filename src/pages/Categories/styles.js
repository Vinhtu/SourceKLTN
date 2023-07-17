import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_category: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left_body_category: {
    width: '15%',
    border: '1px solid',
    borderColor: colors.lightGray,
    borderRadius: 10,
  },
  right_body_category: {
    width: '84%',
  },
  head_brand: {
    width: '100&',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.green,
    marginBottom: 16,
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
  box_brand: {
    padding: 8,
  },
  // box_item_brand:{
  //   display:'flex',
  // }
  item_brand: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8,
  },
  box_expand_brand: {},
  head_body: {
    height: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_right_head_body: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      zIndex: 99999,
    },
  },
  select_sort: {
    width: 200,
    height: 40,
  },
  body_grid_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 16,
    rowGap: 16,
  },
  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 100,
    alignItems: 'center',
  },
}));
