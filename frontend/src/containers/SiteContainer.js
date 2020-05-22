import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Request from '../helpers/request';
// import Footer from '../components/Footer'

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
      // <Router>
    <>
    <h1>I am the site wrapper</h1> 
      <NavBar items={this.state.items}/>
      {/* <Switch >
          <Route exact path="/" component={() => <ShopContainer items={this.state.items} />} />
          <Route exact path="/admin" component={() => <AdminContainer items={this.state.items} />} />

        </Switch> */}

      {/* <Footer /> */}
    </>
    );

  }
}
 
export default SiteContainer;