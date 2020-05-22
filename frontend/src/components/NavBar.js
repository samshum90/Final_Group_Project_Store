import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = ( ) => {
  return (
    
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
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
              <Link to="/cart">Cart</Link>
            </li>

          </ul>
  );
}

export default NavBar;
