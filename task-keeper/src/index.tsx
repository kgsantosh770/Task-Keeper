import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./variables.css";
import Header from './Header/Header';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
