import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import '../styles/main.css';

const AboutUs = () => {
	return (
		<Box className='aboutUsContainer'>
			<Grid container spacing={6} className='gridContainer'>
				<Grid item xs={12} md={5}>
					<img src='#blank_' alt='My Team' className='largeImage' />
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant='h3' fontWeight={700} className='title'>
						🧹 We've revolutionized the modern day chore list, so you're life
						can be easier.
					</Typography>
					<Typography className='aboutUsSubtitle'>
						Some filler text here, we can discuss what goes here in the future
					</Typography>
					<Button
						variant='contained'
						color='primary'
						sx={{ width: '200px', fontSize: '16px' }}
					>
						CONTACT US
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutUs;
