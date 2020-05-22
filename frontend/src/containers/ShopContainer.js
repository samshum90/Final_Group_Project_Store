import React, { Component } from 'react';
import Request from '../helpers/request';
import SearchBar from '../components/SearchBar'
import StoreItemList from '../components/StoreItemList'

class ShopContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 
        users:[]
     }
  }

  componentDidMount() {
    const url = "http://localhost:8080/users"
    const request = new Request();

    request.get(url)
    
    .then((data) => {
      console.log(data);
      this.setState({users: data})
    })
  }
  
  render() { 
    return (  
      <div>
        {/* // navbar */}
        <h1>I am container</h1>
        <SearchBar />
        <StoreItemList />
        {/* // footer */}
      </div>
    );
  }
}
 
export default ShopContainer;