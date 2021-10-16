import React from "react";
import logo from '../img/Nutcache.png';
import './NavLogin.css';

export default function NavLogin(){
  return (
    <>
    <div>
      <nav className="navbar-login">
        <img src={logo} alt={logo} />

        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}
