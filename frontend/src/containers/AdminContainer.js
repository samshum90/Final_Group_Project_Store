import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddItemForm from '../components/admin/item/AddItemForm'
import Request from '../helpers/request'
import ItemList from '../components/admin/item/ItemDetail'

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
    const routes = [
      {
        path: "/items",
        exact: true,
        main: () => <ItemList items={this.props.items}/>
      },
      {
        path: "/addItem",
        exact: true,
        main: () => <AddItemForm onFormSubmit= {this.handlePost}/>
      },
    ];
    return ( 
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
            {routes.map((route, index) => (
                                <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                                />
            ))}
        </Switch>
      </div>
    </Router>
     );
  }
}
 
export default AdminContainer;