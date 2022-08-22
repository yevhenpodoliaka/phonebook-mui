import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>
);
