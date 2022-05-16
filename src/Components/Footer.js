import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import '../styles/main.css'
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={{ flexGrow: 1 }} className='footerContainer'>
      <Typography className='footerText'>
        Provided by{' '}
        <Link href="google" target="_blank" underline="none">
          Team Team
        </Link>
      </Typography>
      <Typography className='footerDate'>Built with Love in Wisconsin 💖</Typography>
    </Box>
  );
};

export default Footer;