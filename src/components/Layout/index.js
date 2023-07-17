import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/system';
const Layout = (props) => {
  return (
    <>
      <Header />
      <Box pb={5} sx={{ backgroundColor: '#f8f9fa' }}>
        {props.children}
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
