import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Container, Segment, Header, Grid } from 'semantic-ui-react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_6wg6NYjluNikAyjmKK4Vq9iv00711LPxcs');

const CheckOut = (props) =>{
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

    return(
              <Container fluid className="item-container">
                  <Segment
                    raised
                    padded="very"
                  >
                    <Header as="h1"> CheckOut </Header>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={8}>
           
                          <Header as="h2">Total Cost: £{basketTotalCost()}.00</Header>
                          <Header as="h2">Item Quantity: {totalItems()}</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Segment
                            raised
                            padded="very"
                          >
                          <Elements stripe={stripePromise}>
                              <CheckOutForm saveOrder={props.saveOrder}/>
                          </Elements>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container >
    )

}

export default CheckOut;