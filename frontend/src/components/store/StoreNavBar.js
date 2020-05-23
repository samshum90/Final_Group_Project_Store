import React from 'react';
// import {Link} from "react-router-dom";
import SearchBar from './SearchBar';
import './StoreNavBar.css';

const StoreNavBar = ( ) => {
    return (
      <nav className="store-nav-bar">
          <ul>
              <li>
                <h3>Welcome</h3>
              </li>
              <li>
                <SearchBar />
              </li>
              <li>
                  <p>Items: </p>
                  <p>Total: </p>
              </li>
          </ul>
      </nav>
    );
  }
  
  export default StoreNavBar;