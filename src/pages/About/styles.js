import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_about: {
    width: 1200,
    margin: 'auto auto',
  },
  box_body_about: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    columnGap: 16,
    rowGap: 16,
  },
}));
