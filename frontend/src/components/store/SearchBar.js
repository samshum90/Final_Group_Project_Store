import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { 
      input: ''
     }
  }
  
  render() { 
    return ( <> I am SearchBar... hear me rawr </> );
  }
}
 
export default SearchBar;