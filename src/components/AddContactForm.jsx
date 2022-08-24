import { Box, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useLocalStorage } from '../hooks/useLockalStorage';

export default function AddContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, number);
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
          label="name"
          onChange={handleChange}
        />
        <TextField
          required
          value={number}
          name="number"
          label="number"
          onChange={handleChange}
        />
        <Button type="submit">add contact</Button>
      </Box>
    </Container>
  );
}
