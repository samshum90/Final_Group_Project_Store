import React from "react";
import {Link} from "react-router-dom";
import './AdminNavBar.css'

const AdminNavBar = ( ) => {
  return (
    <nav className="admin-nav-bar">
        <ul>
            <li>
              <h3>Owner Mode</h3>
            </li>
            <li>
              <Link to="/new">Add Item</Link>
            </li>
            <li>
              <Link to="admin/items">Show Items</Link>
            </li>
            <li>
              <Link to="/orders">Show Orders</Link>
            </li>
        </ul>
    </nav>
  );
}

export default AdminNavBar;