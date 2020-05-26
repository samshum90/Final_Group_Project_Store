import React from 'react';
import { Segment, Grid, Button, Image } from 'semantic-ui-react'

const CartItem = (props) => {

    return(
        <Segment 
            raised
        >
              <Grid fluid>
                    <Grid.Column width={5}>
                        <Image src={props.item.imgUrl} alt={props.item.name} size='medium'/>
                    </Grid.Column>
                    
                    <Grid.Column 
                        verticalAlign="middle"
                        width={5}
                    >
                        <h3>{props.item.name}</h3>
                    </Grid.Column>
                    
                    <Grid.Column 
                        verticalAlign="middle"
                        width={2}
                    >
                    <h3>{props.item.currentSellPrice}</h3>
                    </Grid.Column>
                    
                    <Grid.Column 
                        verticalAlign="middle"
                        width={2}
                    >
                    <h3>1</h3>
                    </Grid.Column>
                    <Grid.Column 
                        verticalAlign="middle"
                        width={2}
                    >
                    <Button
						negative
                        // value=
						onClick={() => props.removeFromBasket(props.item.id)}
					>
						Remove Item
					</Button>
                    </Grid.Column>
                  </Grid>

           
        </Segment>
    )
}

export default CartItem;