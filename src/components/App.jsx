import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { useUser } from '../userContext';

export const App = () => {
  const { isLoggedIn } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
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
          <Route path="contacts" element={<div>contacts</div>} />
        </Route>
      </Routes>
    </>
  );
};
