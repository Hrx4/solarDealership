
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"}><img src="https://solardealership.co.in/wp-content/uploads/2023/07/solar-1.png" alt="Logo"/> </Link>
      </div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About Us</Link></li>
        <li><Link to={"/gallery"}>Gallery</Link></li>
        <li><Link to={"/solardealership"}>Solar Dealership</Link></li>
        <li><Link to={"/contactus"}>Contact Us</Link></li>
        <li><Link to={"/applynow"}><Button variant='contained' color='success'>Apply Now</Button></Link></li>
        <li className='cross'><CloseIcon  onClick={toggleNav} sx={{cursor:"pointer"}}/></li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>
    </nav>
  );
};

export default Navbar;
