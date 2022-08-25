import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Layout';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useUser } from '../userContext';
import { fetchCurrentUser } from '../service/authApi'

import HomePage from 'pages/HomePage';
import PhoneBookPage from 'pages/PhoneBookPage';




export const App = () => {
   const { isLoggedIn, userToken, refreshUser } = useUser();
  useEffect(() => {
    const fetchUser = () => {
      fetchCurrentUser(userToken).then(({name}) => {
        refreshUser(name)
      });
    }
    if (userToken !== '') {
       fetchUser();
    }
  
 },[refreshUser, userToken])
 

 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index="/"
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" replace={true} />
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="login"
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" replace={true} />
              ) : (
                <LoginForm />
              )
            }
          />
          <Route
            path="register"
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" replace={true} />
              ) : (
                <RegisterForm />
              )
            }
          />
          <Route
            path="contacts"
            element={
              isLoggedIn ? (
                <PhoneBookPage />
              ) : (
                <Navigate to="/" replace={true} />
              )
            }
          />
        </Route>
      </Routes>
    </>
  );
};
