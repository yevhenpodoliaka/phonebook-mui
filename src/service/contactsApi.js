import axios from 'axios';

export const getContacts = async () => {
  try {
    const { data } = await axios({method:'get',url:'contacts'});
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (id) => {
  try {
    const { data } = await axios({ method: 'delete', url: `contacts/${id}` });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addContact= async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
};



