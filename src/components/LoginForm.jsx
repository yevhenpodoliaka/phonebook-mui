import { Box,  Button,  TextField } from '@mui/material';
import { Container } from '@mui/system';

export default function LoginForm() {
    return (
      <Container>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: '320px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField required id="outlined-required" label="Email" />
                <TextField required id="outlined-required" label="Password" />
                <Button>
                  log in
                </Button>
        </Box>
      </Container>
    );
};
