import React from 'react';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';

const Breadcrumb = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container_breadcrumb}>
      <Box className={classes.container_item_breadcrumb}>
        <Typography>Home</Typography>
        {props?.data?.category ? (
          <Box display="flex" alignItems="center">
            <Typography className={classes.divider_breadcrumb}> / </Typography>
            <Typography
              className={classes.title_breadcrumb}
              color="text.success"
            >
              {props?.data?.category}
            </Typography>
          </Box>
        ) : null}
        {props?.data?.name && (
          <Box display="flex" alignItems="center">
            <Typography className={classes.divider_breadcrumb}> / </Typography>
            <Typography
              className={classes.title_breadcrumb}
              color="text.success"
            >
              {props.data && props.data.name}
            </Typography>
          </Box>
        )}

        {props?.sub1 && (
          <Box display="flex" alignItems="center">
            <Typography className={classes.divider_breadcrumb}> / </Typography>
            <Typography
              className={classes.title_breadcrumb}
              color="text.success"
            >
              {props.sub1}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
