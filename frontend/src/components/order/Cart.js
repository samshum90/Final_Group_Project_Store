import React  from 'react';
import { Container, Segment, Grid, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
const Cart = (props) => {

    const items = props.basket.map(item => {
        return (

            <CartItem item={item} key={item.id} />
        )
    })

    function basketTotalCost() {
        // let total = 0
        if(!props.basket ){
          return 0
        }else{
        let tempArray = props.basket.map(item => 
          item.currentSellPrice)
        return tempArray.reduce(function (total, item) {
          return total += item
        }, 0)
        }
       }
       
       function totalItems(){
        if(!props.basket ){
          return 0
        }else{
          return props.basket.length
        }
    }
        
    
    
    return (
        <Container fluid className="main-container">
            <Grid>
					<Grid.Row>
					<Grid.Column width={11}>
						<Segment>
                            {items}
                        </Segment>
					</Grid.Column>
					<Grid.Column width={5}>
						<Segment.Group>
							<Segment>

                            <p>Items: {totalItems()}</p>
                            <p>Total: £{basketTotalCost()}.00</p>

                            <Button primary compact 
									className='button'
									floated="right">
									Checkout
								</Button>

							</Segment>
				
						</Segment.Group>
					</Grid.Column>
					</Grid.Row>
				</Grid>

            
        </Container >
    )
}

export default Cart ;