import React from 'react';
// import {Link} from "react-router-dom";
import SearchBar from './SearchBar';
import './StoreNavBar.css';
import AuthenticationService from '../../service/AuthenticationService'

const StoreNavBar = (props) => {

 function basketTotalCost() {
  // let total = 0
  if(props.basket && !props.basket.items ){
    return 0
  }else if(props.basket){
  let tempArray = props.basket.items.map(item => 
    item.currentSellPrice * item.quantity)
  return tempArray.reduce(function (total, item) {
    return total += item
  }, 0)
  }
 }
 
 function totalItems(){
  if(props.basket && !props.basket.items ){
    return 0
  }else if(props.basket){
    let tempArray = props.basket.items.map(item => 
      item.quantity)
    return tempArray.reduce(function (total, item) {
      return total += item
    }, 0)
  }

 }

    return (
      <nav className="store-nav-bar">
          <ul>
              <li>
                <h3>Welcome {AuthenticationService.getLoggedInUserName()}</h3>
              </li>
              <li>
                <SearchBar 
                  sendSearch={props.sendSearch}
                  sendFilter={props.sendFilter}
                  items={props.items}
                />
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