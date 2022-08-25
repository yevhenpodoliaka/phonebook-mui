import { Outlet } from 'react-router-dom';
import NavLinkButton from 'components/NavLinkButton/NavLinkButton';
import { Container } from '@mui/material';
export default function PhoneBookPage() {
  return (
    <Container maxWidth="sm">
      <NavLinkButton to="/contacts" text="contacts" />
      <NavLinkButton to="add" text="add contact" />
      <Outlet />
    </Container>
  );
}
