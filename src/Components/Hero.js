import { Grid, Typography, Button, Box } from '@mui/material'
import React from 'react'
import '../styles/hero.css'

function Hero() {

  return (
    <Box className="heroBox">
    <Grid container spacing={6} className="gridContainer">
      <Grid item xs={12} md={7}>
        <Typography variant="h3" fontWeight={700} className="title">
          Let's revolutionize your chore list!
        </Typography>
        <Typography variant="h6" className="subtitle">
          Try our app, it'll help--- I think?
        </Typography>
        <Button
          className="heroButton"
          variant="contained"
          color="primary"
          sx={{ width: '200px', fontSize: '16px' }}>
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12} md={5}>
        <img src="https://placekitten.com/200/300" alt="My Team" className="largeImage" />
      </Grid>
    </Grid>
  </Box>
);
};
export default Hero