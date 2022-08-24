import { useEffect,useState } from 'react';
import {
  Paper,
  Container,
  Typography,
  List,
  ListItem,
  Button,
} from '@mui/material';
import{getContacts,deleteContact}from '../service/contactsApi'


export default function Contacts() {
const [contacts, setContacts] = useState([])

    useEffect(() => {
      const fetchContacts = () => {
        getContacts().then(setContacts);
      };
      fetchContacts();
    }, []);
    return (
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <List >
            {contacts?.map(({ id, name, number }) => (
              <ListItem key={id} as={Paper} elevation={3}>
                <Typography variant="body1" component="p">
                  {name}
                </Typography>
                <Typography variant="body" component="p">
                  {number}
                </Typography>
                <Button type="button" onClick={()=>deleteContact(id)}>
                  delete
                </Button>
                <Button type="button" onClick={null}>
                  edit
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    );
};
