import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            color: 'white',
            flexGrow: 1
          }}
        >
          Tipster
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/predictions">
            Predictions
          </Button>
          <Button color="inherit" component={Link} to="/betting-picks">
            Daily Picks
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 