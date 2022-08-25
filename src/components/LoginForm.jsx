import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { logInUser } from 'service/authApi';
import { useUser } from '../userContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = useUser();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    logInUser({ email, password }).then(({ user, token }) => {
      logIn(user.name, token);
    });
    setEmail('');
    setPassword('');
  };

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
        onSubmit={handleSubmit}
      >
        <TextField
          required
          value={email}
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <TextField
          required
          type="password"
          value={password}
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <Button type="submit">log in</Button>
      </Box>
    </Container>
  );
}
