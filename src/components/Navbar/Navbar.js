import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li> 
            <li>
                <Link to='/product'>Product</Link>
            </li>
            <li>
                <Link to='/service'>Service</Link>
            </li> 
            <li>
                <Link to='/category'>Category</Link>
            </li>
            <li>
                <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link to='/contect'>Contect Us</Link>
            </li>
            <li>
                <Link to='/about'>About Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;