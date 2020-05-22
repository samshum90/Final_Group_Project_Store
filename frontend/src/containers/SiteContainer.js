import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Request from '../helpers/request';
import Footer from '../components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminContainer from '../containers/AdminContainer'
import ShopContainer from '../containers/ShopContainer'

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
          <Route exact path="/admin" component={() => <AdminContainer items={this.state.items} />} />

        </Switch>
      <Footer />
    </>
   </Router>
    );

  }
}
 
export default SiteContainer;