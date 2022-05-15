import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import '../styles/main.css'

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      name: 'John',
      statement:
        'Filler Text',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
      position: 'Job',
    },
    {
      id: 2,
      name: 'Steve',
      statement:
        'What the dog doin.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Job',
    },
    {
      id: 3,
      name: 'Ben',
      statement:
        'Some filler stuff here',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
      position: 'Job',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card className='testimonialCard'>
              <CardContent>
                <Typography className='testimonialStatement'>
                  "{review.statement}"
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    src={review.image_url}
                    size="large"
                    className='avatar'
                  />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography className='testimonialPosition'>
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;