import{NavLink}from 'react-router-dom'
import { Box, Button } from "@mui/material";

export default function AuthNav() {
    return (
      <Box>
        <Button
          component={NavLink}
          to="login"
         
          sx={{ ...StyledNavLink }}
        >
          Log in
        </Button>
        <Button
          component={NavLink}
          to="register"
         
          sx={{ ...StyledNavLink }}
        >
          Sign up
        </Button>
      </Box>
    );
    
};

const StyledNavLink = {
  color: 'inherit',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&.active': {
    color: 'black',
  },

  '&:hover': {
    color: 'black',
  },
};