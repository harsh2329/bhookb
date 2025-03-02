import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <Link to="/" className="navbar-logo">BHOOKBUSTER</Link>
        <div className='nav-links'>
        <Link to="/login" className="nav-link btn-primary">Login</Link>
        <Link to="/signup" className="nav-link btn-primary">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
