import { Box,  Button,  TextField } from '@mui/material';
import { Container } from '@mui/system';

export default function RegisterForm() {
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
          <TextField required id="outlined-required" label="Name" />
          <TextField required id="outlined-required" label="Email" />
                <TextField required id="outlined-required" label="Password" />
                <Button>
                    sign up
                </Button>
        </Box>
      </Container>
    );
};
