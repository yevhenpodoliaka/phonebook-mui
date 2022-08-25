import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import NavLinkButton from 'components/NavLinkButton/NavLinkButton';

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="p">
        you need to register or login
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <NavLinkButton to="login" text="log in" />
        <NavLinkButton to="register" text=" Sign up" />
      </Box>
    </Container>
  );
}
