import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const BettingPicks = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Daily Betting Picks
        </Typography>
        <Typography variant="body1" paragraph>
          Our AI has analyzed today's games and selected the most promising player props.
        </Typography>
        {/* Betting picks display will be added here */}
      </Box>
    </Container>
  );
};

export default BettingPicks; 