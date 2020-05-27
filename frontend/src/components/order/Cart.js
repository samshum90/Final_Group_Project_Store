import React  from 'react';
import { Container, Segment, Grid, Button, Header } from 'semantic-ui-react'
import { 
  Link
 } from 'react-router-dom';
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {
  
    if(props.basket){
      const items = props.basket.items.map(item => {
          return (

              <CartItem 
                item={item} 
                key={item.id} 
                removeFromBasket={props.removeFromBasket}/>
          )
      })

      function basketTotalCost() {
          if(!props.basket ){
            return 0
          }else{
          let tempArray = props.basket.items.map(item => 
            item.currentSellPrice * item.quantity)
          return tempArray.reduce(function (total, item) {
            return total += item
          }, 0)
          }
        }
        
        function totalItems(){
          if(!props.basket ){
            return 0
          }else{
            let tempArray = props.basket.items.map(item => 
            item.quantity)
          return tempArray.reduce(function (total, item) {
            return total += item
          }, 0)
          }
      }
          
      
      
      return (
          <Container fluid className="item-container">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={13}>     
                      <Segment.Group>
                  <Segment
                    raised
                    padded="very"
                  >
                    <Header as='h2'>Basket</Header>

                    <Grid fluid>
                      <Grid.Column width={5}>
                        
                      </Grid.Column>
                      
                      <Grid.Column width={5}>
                        <Header as='h3'>Items</Header>
                      </Grid.Column>
                      
                      <Grid.Column width={2}>
                        <Header as='h3'>Price</Header>
                      </Grid.Column>
                      
                      <Grid.Column width={2}>
                        <Header as='h3'>Quantity</Header>
                      </Grid.Column>
                      <Grid.Column width={2}>
                      </Grid.Column>
                    </Grid>
                    {items}
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            <Grid.Column width={3}>
              <Segment.Group >
                <Segment className="checkout-segment">
                  <Header as='h3'>Items: {totalItems()}</Header>
                  <Header as='h3'>Total: £{basketTotalCost()}.00</Header>
                  <Link to="check-out">
                    <Button primary compact 
                      className='button'
                      floated="right">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            </Grid.Row>
          </Grid>

              
          </Container >
      )
  }else{
    
    return (null)
  }
}

export default Cart ;