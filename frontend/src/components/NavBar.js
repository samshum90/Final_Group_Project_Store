import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminContainer from '../containers/AdminContainer'
import ShopContainer from '../containers/ShopContainer'
import './NavBar.css'

const NavBar = (props) => {
  console.log(props) //this props has info
  return (
    
    <Router >
      <div>
        <nav className="nav-bar">
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
        </nav>

        <Switch >
          <Route exact path="/" component={() => <ShopContainer items={props.items} />} />
          <Route exact path="/admin" component={() => <AdminContainer items={props.items} />} />

        </Switch>
        <nav className="footer">
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to="/where">Where to find us</Link>
                </li>
                <li>
                    <Link to="/customer-service">Customer Service</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>


      </div>
    </Router>
  );
}

export default NavBar;
