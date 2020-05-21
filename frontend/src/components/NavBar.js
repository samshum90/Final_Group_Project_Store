import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminContainer from '../containers/AdminContainer'
import ShopContainer from '../containers/ShopContainer'

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
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
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


      </div>
    </Router>
  );
}

export default NavBar;
