import { Box, Button, TextField } from '@mui/material';
import useLocalStorage from 'hooks/useLocalStorage';
import { addContact } from 'service/contactsApi';

export default function ContactForm() {
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
    if (!name || !number) {
      return;
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
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
        type="tel"
        value={number}
        name="number"
        label="number"
        onChange={handleChange}
      />
      <Button type="submit">add</Button>
    </Box>
  );
}
