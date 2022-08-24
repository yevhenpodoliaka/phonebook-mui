import { AppBar } from '@mui/material';
import { Container } from '@mui/system';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import{useUser} from '../../userContext'


export default function Header() {
  const { isLoggedIn } = useUser();

  return (
    <AppBar position="static" sx={{padding:4}}>
      <Container maxWidth="sm">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
}
