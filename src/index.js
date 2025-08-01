import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import   "../node_modules/bootstrap/dist/css/bootstrap.css";
import   "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import   bootstrap  from "bootstrap";
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
