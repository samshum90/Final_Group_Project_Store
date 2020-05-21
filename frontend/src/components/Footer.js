import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Footer = () => {
  return ( 
    <div>
        <h5>Copyright the boooois</h5> 
        <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/admin">About</Link>
                </li>
                <li>
                    <Link to="/contactUS">Contact Us</Link>
                </li>
                <li>
                    <Link to="/where">Where to find us</Link>
                </li>
                <li>
                    <Link to="/customerService">Customer Service</Link>
                </li>
            </ul>
        </nav>
        </Router>
    </div>
    
    );
}
 
export default Footer;