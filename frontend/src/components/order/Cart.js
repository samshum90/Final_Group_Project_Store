import React  from 'react';
import { Container, Segment, Grid, Button } from 'semantic-ui-react'
import CartItem from './CartItem'
const Cart = (props) => {

    const items = props.basket.map(item => {
        return (

            <CartItem item={item} key={item.id} />
        )
    })
        
    
    
    return (
        <Container fluid className="main-container">
            <Grid>
					<Grid.Row>
					<Grid.Column width={5}>
						<Segment>
                            {items}
                        </Segment>
					</Grid.Column>
					<Grid.Column width={11}>
						<Segment.Group>
							<Segment id='segment'>

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