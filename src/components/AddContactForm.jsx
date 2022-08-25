import { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Container } from '@mui/system';
import useLocalStorage from '../hooks/useLockalStorage';
import { addContact } from 'service/contactsApi';

export default function AddContactForm() {
  const [open, setOpen] = useState(false);
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddContact = () => {
    addContact({name,number});
      setName('')
      setNumber('')
      setOpen(false);
    };

  return (
    <Container maxWidth="sm" sx={{ paddingY: 2 }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        add contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column' ,gap:2}}>
          <DialogContentText>
            Enter name and phone number for new contact
          </DialogContentText>
          <TextField
            required
            type='text'
            value={name}
            name="name"
            label="name"
            onChange={handleChange}
          />
          <TextField
            required
            type='tel'
            value={number}
            name="number"
            label="number"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddContact}>add contact</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
