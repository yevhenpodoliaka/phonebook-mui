import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import{useUser} from '../userContext'


export default function Header() {
  const { isLoggedIn } = useUser();

  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
}
