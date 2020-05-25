import React from 'react';
import { Card, Image, Rating, Grid, Button } from 'semantic-ui-react';

const StoreItem = (props) => {
	const URL = '/items/' + props.item.id;

function handleClick(){
	props.addToBasket(props.item)
	console.log(props.item)
}

	return (
		<Grid.Column>
			<Card fluid>
				<Image 
					src={props.item.imgUrl} 
					href={URL}
				/>

				<Card.Content>
					<Card.Header>
						<a href={URL}>{props.item.name} </a>
					</Card.Header>
					<Card.Meta>
						<Rating 
							icon="star" 
							defaultRating={3} 
							maxRating={5} 
						/>
					</Card.Meta>
					<Card.Description>
						Price: £{props.item.currentSellPrice}
					</Card.Description>
				</Card.Content>

				<Card.Content extra>
					
						
					<Button 
						onClick={handleClick}
					>
						Add To Cart
					</Button>
				</Card.Content>
			</Card>
		</Grid.Column>
	);
};

export default StoreItem;
