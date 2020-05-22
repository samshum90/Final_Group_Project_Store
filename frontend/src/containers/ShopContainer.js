import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import StoreItemList from '../components/StoreItemList'

class ShopContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 

     }
  }

  
  render() { 
    return (  
      <div>
        {/* // navbar */}
        <SearchBar />
        <StoreItemList />
        {/* // footer */}
      </div>
    );
  }
}
 
export default ShopContainer;