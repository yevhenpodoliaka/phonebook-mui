import { Avatar, Box, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useUser } from 'userContext';
import { logOutUser } from 'service/authApi';

export default function UserMenu() {
  const { username, logOut } = useUser()
  
  const handelClick = () => {
    logOutUser().then(data => {
      logOut()
    }).catch(console.log)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Avatar>
        <PersonIcon />
      </Avatar>
      <Typography variant="body-1"> Welcome, user {username}</Typography>
      <Button
        type="button"
        variant="outlined"
        color="inherit"
        onClick={handelClick}
      >
        log out
      </Button>
    </Box>
  );
}
