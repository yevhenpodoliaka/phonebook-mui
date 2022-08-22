import {  NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function Navigation() {
  return (
    <Box>
      <Button component={NavLink} to="/" color="inherit">
        home
      </Button>
      <Button component={NavLink} to="contacts" color="inherit">
        contacts
      </Button>
    </Box>
  );
}
