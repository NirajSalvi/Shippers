import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>

    <GlobalStyles />
    <Typography />
    <App />
  </>
  // </React.StrictMode>
);

