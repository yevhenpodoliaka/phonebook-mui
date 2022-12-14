import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logInUser = async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logOutUser = async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      console.log(error)
    }
  }


export const fetchCurrentUser = async (userToken) => {
    token.set(userToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error)
    }
  }

