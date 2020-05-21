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

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <ShopContainer />
    },
    {
      path: "/admin",
      main: () => <AdminContainer />
    },
  ];

function NavBar () {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
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

        <Switch>
            {routes.map((route, index) => (
                                <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                                />
            ))}
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
