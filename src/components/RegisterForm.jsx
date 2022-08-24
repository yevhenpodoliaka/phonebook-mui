import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { registerUser } from '../service/authApi'
import {useUser} from '../userContext'

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {  logIn } = useUser();
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
   
    if (!name || !email || !password) {
      return;
    }
    registerUser({ name, email, password })
      .then(data => {
       logIn();
      })
      .catch(console.log);
    
      setName('');
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
            value={name}
            name="name"
            label="Name"
            onChange={handleChange}
          />
          <TextField
            required
            value={email}
            name="email"
            label="Email"
            onChange={handleChange}
          />
          <TextField
            required
            value={password}
            name="password"
            label="Password"
            onChange={handleChange}
          />
          <Button type='submit'>sign up</Button>
        </Box>
      </Container>
    );
};
