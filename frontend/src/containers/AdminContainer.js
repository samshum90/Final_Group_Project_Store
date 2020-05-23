import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Request from '../helpers/request';
import AdminNavBar from '../components/admin/AdminNavBar';
import AddItemForm from '../components/admin/item/AddItemForm';
import ItemList from '../components/admin/item/ItemList';
import OrderList from '../components/admin/order/OrderList';

class AdminContainer extends Component {
  constructor(props){
    super(props);
  this.state = {  
    orders: []
    }
  }
  handlePost(item){
    console.log('pre post: ', item)
    const request = new Request();
    const url = 'http://localhost:8080/items'
    
    request.post(url, item)
    .then(() => {
      console.log(item)
      window.location = '/items'
    })
  }
  render() { 
    console.log(this.props);
    return ( 
      <Router>
        <div>
          <AdminNavBar />
          <Switch>
            <Route path="/new" component={() => <AddItemForm />} />
            <Route path="/admin/items" component={() => <ItemList items={this.props.items} />} />
            <Route path="/orders" component={() => <OrderList orders={this.state.orders} />} />

          </Switch>
      </div>
    </Router>
     );
  }
}
 
export default AdminContainer;