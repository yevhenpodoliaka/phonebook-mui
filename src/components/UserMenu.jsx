import { Avatar, Box, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function UserMenu() {
  return (
    <Box>
      <Avatar>
        <PersonIcon />
      </Avatar>
          <Typography variant="body-1"> Welcome, user Name</Typography>
          <Button>log out</Button>
    </Box>
  );
}
