import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddItemForm from '../components/admin/item/AddItemForm'

class AdminContainer extends Component {
  constructor(props){
    super(props);
  this.state = {  
    orders: []
    }
  }
  handlePost(item){
    const request = new Request();
    request.post('/items', item).then(() => {
      window.location = '/items'
    })
  }
  render() { 
    const routes = [
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