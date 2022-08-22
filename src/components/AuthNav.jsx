import{NavLink}from 'react-router-dom'
import { Box, Button } from "@mui/material";

export default function AuthNav() {
    return (
      <Box>
        <Button component={NavLink} to="login" color="inherit">
          Log in
        </Button>
        <Button component={NavLink} to="register" color="inherit">
          Sign up
        </Button>
      </Box>
    );
    
};
