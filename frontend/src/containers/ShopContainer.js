import React, { Component } from 'react';
import { Switch, Route }from "react-router-dom";
import StoreNavBar from '../components/store/StoreNavBar'
import StoreItemList from '../components/store/StoreItemList'
import UserDetail from '../components/user/UserDetail'
import UserOrderList from '../components/user/UserOrderList'

import About from '../components/footer/About';
import ContactUs  from '../components/footer/ContactUs';
import WhereToFindUs  from '../components/footer/WhereToFindUs';
import CustomerService from '../components/footer/CustomerService';

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

          <Route path="/about" component={() => <About />} />
          <Route path="/contact-us" component={() => <ContactUs />} />
          <Route path="/where" component={() => <WhereToFindUs />} />
          <Route path="/customer-service" component={() => <CustomerService />} />
          </Switch>

    </>

    );
  }
}
 
export default ShopContainer;