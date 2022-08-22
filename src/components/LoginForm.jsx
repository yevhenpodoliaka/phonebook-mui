import { Box,  Button,  TextField } from '@mui/material';
import { Container } from '@mui/system';

export default function LoginForm() {
    return (
      <Container maxWidth="sm">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px',
          }}
        >
          <TextField required id="outlined-required" label="Email" />
          <TextField required id="outlined-required" label="Password" />
          <Button>log in</Button>
        </Box>
      </Container>
    );
};
