import React from 'react';
// import {Link} from "react-router-dom";
import SearchBar from './SearchBar';
import './StoreNavBar.css';
import AuthenticationService from '../../service/AuthenticationService'

const StoreNavBar = (props) => {

 function basketTotalCost() {
  // let total = 0
  if(!props.basket ){
    return 0
  }else{
  let tempArray = props.basket.map(item => 
    item.currentSellPrice)
  return tempArray.reduce(function (total, item) {
    return total += item
  }, 0)
  }
 }
 
 function totalItems(){
  if(!props.basket ){
    return 0
  }else{
    return props.basket.length
  }

 }

    return (
      <nav className="store-nav-bar">
          <ul>
              <li>
                <h3>Welcome {AuthenticationService.getLoggedInUserName()}</h3>
              </li>
              <li>
                <SearchBar />
              </li>
              <li>
                  <p>Items: {totalItems()}</p>
                  <p>Total: £{basketTotalCost()}.00</p>
              </li>
          </ul>
      </nav>
    );
  }
  
  export default StoreNavBar;