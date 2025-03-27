import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Predictions = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Player Predictions
        </Typography>
        <Typography variant="body1" paragraph>
          Select a player to view their predictions for upcoming games.
        </Typography>
        {/* Player selection and prediction display will be added here */}
      </Box>
    </Container>
  );
};

export default Predictions; 