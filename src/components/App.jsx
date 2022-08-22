import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="register" element={<RegisterForm/>} />
          <Route path="contacts" element={<div>contacts</div>} />
        </Route>
      </Routes>
    </>
  );
};
