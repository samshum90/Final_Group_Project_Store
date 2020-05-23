import React from 'react';
import { Card, Image, Rating, Grid, Button } from 'semantic-ui-react'

const StoreItem = (props) => {
  return ( 
  <Grid.Column>
    <Card fluid>
      <Image src={props.item.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.item.name}</Card.Header>
        <Card.Meta>
        <Rating icon='star' defaultRating={3} maxRating={4} />
        </Card.Meta>
        <Card.Description>
        Price: £{props.item.currentSellPrice}
        
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button primary compact floated="right">Add To Cart</Button>
        </Card.Content>
      
    </Card> 
  </Grid.Column>
    
    );
}
 
export default StoreItem;