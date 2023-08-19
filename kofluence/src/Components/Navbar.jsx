import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../Contex/AuthContex';

const Navbar = () => {

const {isLoggedIn,login,logout}=useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <a className="navbar-brand" href="/">Your Brand</a> */}
        <img  alt="Example Image"
        width="200"
        height="80"
        className="navbar-brand"
        src="https://springrecruit-assets.s3.amazonaws.com/company/610918b30bdaee00193546ac/careerPage/1662375278317_Logo%20Final%20(1).png"/>
        <ul className="navbar-links">
          {isLoggedIn ? (
            <>
              <li><Link to="/">Signup</Link></li>
              <li><Link to="login">Login</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={login}>Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
