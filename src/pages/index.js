import React, { useState, useEffect } from 'react';

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Pagination,
} from '@mui/material';

import MessengerCustomerChat from 'react-messenger-customer-chat';

const Index = () => {
  return (
    <Box>
      <Typography>Testimonial</Typography>
      <MessengerCustomerChat pageId="127080551312733" appId="556417379588684" />
    </Box>
  );
};

export default Index;
