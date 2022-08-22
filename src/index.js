import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="phonebook-mui">
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
