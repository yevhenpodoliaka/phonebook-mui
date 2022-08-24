import { NavLink } from 'react-router-dom';
import { Container } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="p">
        you need to register or login
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Button component={NavLink} to="login" sx={{}} variant="contained">
          Log in
        </Button>
        <Button component={NavLink} to="register" sx={{}} variant="contained">
          Sign up
        </Button>
      </Box>
    </Container>
  );
}
