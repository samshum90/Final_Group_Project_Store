import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddItemForm from '../components/admin/item/AddItemForm'
import Request from '../helpers/request'
import ItemList from '../components/admin/item/ItemList'

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
      <>
      <Router>
      <div>
        <nav className="admin-nav-bar">
          <ul>
            <li>
              <Link to="/items">Show Items</Link>
            </li>
            <li>
              <Link to="/addItem">Add Item</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route exact path="/items" component={() => <ItemList items={this.props.items} />} />
          <Route exact path="/addItem" component={() => <AddItemForm />} />

        </Switch>
      </div>
    </Router>
    </>
     );
  }
}
 
export default AdminContainer;