import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/dashboard"> Dashboard </Link>
        <Link to="/buggy"> BuggyPage </Link>
    </nav>
  );
};

export default Navbar;