import React, { Component } from 'react';
import { Switch, Route }from "react-router-dom";
import StoreNavBar from '../components/store/StoreNavBar'
import StoreItemList from '../components/store/StoreItemList'
import UserDetail from '../components/user/UserDetail'
import UserOrderList from '../components/user/UserOrderList'

class ShopContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 
      user: null

     }
  }

  
  render() { 
    return (  

    <>
          <StoreNavBar />
          <Switch >
            <Route exact path="/" component={() =><StoreItemList items={this.props.items}/>} />
            <Route path="/account" component={() =><UserDetail />} />
            <Route path="/orders" component={() =><UserOrderList />} />
            {/* <Route path="/cart" component={() =>< />} /> */}
          </Switch>

    </>

    );
  }
}
 
export default ShopContainer;