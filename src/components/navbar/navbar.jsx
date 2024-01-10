// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Sign out</Link>
    </div>
  );
};

export default Navbar;
