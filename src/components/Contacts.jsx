import { useEffect, useState } from 'react';
import {
  Paper,
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Box,
} from '@mui/material';

import { getContacts, deleteContact } from '../service/contactsApi';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = () => {
      getContacts().then(setContacts);
    };
    fetchContacts();
  }, []);
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <List>
          {contacts?.map(({ id, name, number }) => (
            <ListItem key={id} sx={{ justifyContent: 'space-between' ,gap:2}}>
              <Box>
                <Typography variant="body1" component="p">
                  {name}
                </Typography>
                <Typography variant="body2" component="p">
                  {number}
                </Typography>
              </Box>
              <Box>
                <Button type="button" onClick={() => deleteContact(id)}>
                  delete
                </Button>
                <Button type="button" onClick={null}>
                  edit
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
