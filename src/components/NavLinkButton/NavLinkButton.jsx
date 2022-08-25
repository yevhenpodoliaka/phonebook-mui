import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NavLinkButton({ to, text }) {
  return (
    <Button
      component={NavLink}
      to={to}
      sx={{ ...StyledNavLink }}
      variant="contained"
    >
      {text}
    </Button>
  );
}
const StyledNavLink = {
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
