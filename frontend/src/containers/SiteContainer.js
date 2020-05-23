import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Request from '../helpers/request';
import NavBar from '../components/NavBar';
import Footer from '../components/footer/Footer';
import AdminContainer from '../containers/AdminContainer';
import ShopContainer from '../containers/ShopContainer';

import About from '../components/footer/About';
import ContactUs  from '../components/footer/ContactUs';
import WhereToFindUs  from '../components/footer/WhereToFindUs';
import CustomerService from '../components/footer/CustomerService';

class SiteContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 
        items:[]
     }
     this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }
  getItems(){
    const url = "http://localhost:8080/items"
    const request = new Request();

    request.get(url)
    .then((data) => {
      console.log(data);
      this.setState({items: data})
    })
  }

  render(){

    return ( 
      <Router>
    <>
      <NavBar />
      <Switch >
          <Route exact path="/" component={() => <ShopContainer items={this.state.items} />} />
          <Route exact path="/admin/items" component={() => <AdminContainer items={this.state.items} />} />
          <Route path="/account" component={() =><ShopContainer items={this.state.items}/>} />
          <Route path="/orders" component={() =><ShopContainer items={this.state.items}/>} />

          <Route path="/about" component={() => <About />} />
          <Route path="/contact-us" component={() => <ContactUs />} />
          <Route path="/where" component={() => <WhereToFindUs />} />
          <Route path="/customer-service" component={() => <CustomerService />} />


        </Switch>
      <Footer />
    </>
   </Router>
    );

  }
}
 
export default SiteContainer;