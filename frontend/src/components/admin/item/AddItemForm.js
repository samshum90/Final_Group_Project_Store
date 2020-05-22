import React, {Component} from 'react';

class AddItemForm extends Component {
  constructor(props){
    super(props);
  this.state = {  
    name: '',
    brand:'',
    type: '',
    maxSellPrice: 0,
    currentSellPrice: 0,
    buyPrice: 0,
    img: '',
    description: ''
  }

}

handleNameChange = (event) => {
  this.setState({name: event.target.value})
}

handleBrandChange = (event) => {
  this.setState({brand: event.target.value})
}

handleTypeChange = (event) => {
  this.setState({type: event.target.value})
}

handleMaxSellPriceChange = (event) => {
  this.setState({maxSellPrice: event.target.value})
}

handleBuyPriceChange = (event) => {
  this.setState({buyPrice: event.target.value})
}

handleImgChange = (event) => {
  this.setState({img: event.target.value})
}

handleDescriptionChange = (event) => {
  this.setState({description: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault();
  const newItem = {
    name:this.state.name,
    brand:this.state.brand,
    type: this.state.type,
    maxSellPrice: this.state.maxSellPrice,
    currentSellPrice: this.state.currentSellPrice,
    buyPrice: this.state.buyPrice,
    img: this.state.img,
    description: this.state.description
  }
  this.props.onFormSubmit(newItem);
  console.log('newItem: ', newItem)
  this.siteContainer.getItems();
}


render() { 
  return ( 
  <div>
    <form onSubmit={this.handleSubmit}>
    <label htmlFor="name">Name: </label>
    <input 
      type="text" 
      id="name"
      value={this.state.name}
      onChange={this.handleNameChange}
    ></input> 

    <label htmlFor="brand">Brand: </label>
    <input 
    type="text" 
    id="brand"
    value={this.state.brand}
    onChange={this.handleBrandChange}
    ></input> 

      <label htmlFor="type">Type: will be dropdown  </label>
      <input 
      type="text" 
      id="type"
      value={this.state.type}
      onChange={this.handleTypeChange}
      ></input>

      <label htmlFor="max-sale-price">List Price: </label>
      <input 
      type="number" 
      id="sale-price"
      value={this.state.maxSellPrice}
      onChange={this.handleMaxSellPriceChange}
      ></input>

      <label htmlFor="buy-price">Unit Cost: </label>
      <input 
      type="number" 
      id="buy-price"
      value={this.state.buyPrice}
      onChange={this.handleBuyPriceChange}
      ></input>  

      <label htmlFor="image-url">URL to Image: </label>
      <input 
      type="text" 
      id="image-url"
      value={this.state.img}
      onChange={this.handleImgChange}
      ></input> 

      <label htmlFor="description">Description: </label>
      <input 
      type="text" 
      id="description"
      value={this.state.description}
      onChange={this.handleDescriptionChange}
      ></input> 
      
      <input type="submit" value="Add item" />

      </form>
      </div> 
      );
  }
}
 
export default AddItemForm;