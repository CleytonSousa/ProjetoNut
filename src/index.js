import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavLogin from './components/NavLogin';
import Welcome from './components/Welcome';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <NavLogin  />
      <Welcome />
      <Login />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
