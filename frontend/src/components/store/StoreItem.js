import React from 'react';
import { Card, Image, Rating, Grid, Button } from 'semantic-ui-react';

const StoreItem = (props) => {
	const URL = '/items/' + props.item.id;
	return (
		<Grid.Column>
			<Card fluid>
				<Image wrapped ui={false} src={props.item.imgUrl} />

				<Card.Content>
					<Card.Header>
						<a href={URL}>{props.item.name} </a>
					</Card.Header>
					<Card.Meta>
						<Rating icon="star" defaultRating={3} maxRating={4} />
					</Card.Meta>
					<Card.Description>
						Price: £{props.item.currentSellPrice}
					</Card.Description>
				</Card.Content>

				<Card.Content extra>
					<Button primary compact floated="right">
						Add To Cart
					</Button>
				</Card.Content>
			</Card>
		</Grid.Column>
	);
};

export default StoreItem;
