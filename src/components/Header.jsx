import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

export default function Header(params) {
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Navigation />
        <AuthNav />
        <UserMenu />
      </Container>
    </AppBar>
  );
}
