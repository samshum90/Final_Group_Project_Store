import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'
import Logo from '../../assets/icons/CodeClan_Logo.png'

function Footer () {
  return ( 
        <nav className="footer">
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/where">Where to find us</Link>
                </li>
                <li>
                    <Link to="/customer-service">Customer Service</Link>
                </li>
                <li id="footer-logo">
                    <Link to="/" >
                        <img src={Logo} alt="Code Clan Logo" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Footer;