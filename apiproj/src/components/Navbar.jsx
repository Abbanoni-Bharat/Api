import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="head">
        <img src={logo} alt="Hero" />
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/delete">Delete</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;