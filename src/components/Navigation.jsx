import {  NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import {useUser} from'../userContext'

export default function Navigation() {
    const { isLoggedIn } = useUser();
  return (
    <Box>
      <Button component={NavLink} to="/" color="inherit">
        home
      </Button>
  { isLoggedIn && <Button component={NavLink} to="contacts" color="inherit">
        contacts
      </Button>}
    </Box>
  );
}
