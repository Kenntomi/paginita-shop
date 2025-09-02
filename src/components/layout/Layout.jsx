import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactButton from '../ui/ContactButton';

const Layout = ({ children, cartItemCount }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar cartItemCount={cartItemCount} />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Box>
      <ContactButton />
      <Footer />
    </Box>
  );
};

export default Layout;