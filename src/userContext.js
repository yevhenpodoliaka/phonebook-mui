import { createContext, useContext, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [userToken, setUserToken] = useLocalStorage('token', '');

  const logIn = (name,token) => {
    setIsLoggedIn(true);
    setUsername(name);
    setUserToken(token);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setUserToken('');
  };
  const refreshUser = (name) => {
     setIsLoggedIn(true);
     setUsername(name);
  }

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, logIn, logOut, userToken, refreshUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
