import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'
import Logo from '../assets/icons/CodeClan_Logo.png'
import { Icon } from 'semantic-ui-react'

const NavBar = ( ) => {
  return (
      <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/store">
              <img src={Logo} alt="Code Clan Logo" />
              </Link>
            </li>
            <li>
              <Link to="/admin/items">Admin</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/log-out">Log Out</Link>
            </li>
            <li>
              <Link to="/cart"><Icon name='shopping cart' size='large' /></Link>
            </li>
          </ul>
        </nav>
  );
}

export default NavBar;
