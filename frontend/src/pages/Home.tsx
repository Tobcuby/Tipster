import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Tipster
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your NBA Player Props Prediction Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Get accurate predictions for NBA player props including points, rebounds, assists, and more.
          Our AI-powered system analyzes player performance, injuries, and historical data to provide
          the most reliable predictions.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 