import React from 'react';
import { Dimmer, Loader, Grid, Container } from 'semantic-ui-react';
import StoreItem from './StoreItem';
import './StoreItem.css';

const StoreItemList = (props) => {

	// if(props.item){
		if (props.items && props.items.length === 0 && props.input.length > 0) {
			return <h1>No items found, please check filter</h1>
		}


		// if (!props.items || !props.items.length) {
		// 	return (
		// 		<Dimmer active inverted>
		// 			<Loader inverted content="Loading" />
		// 		</Dimmer>
		// 	);
		// }

		
		if (props.items.noItemFound) {
			return (window.location = '/admin/new');
		}

		const StoreItems = props.items.map((item) => {
			return <StoreItem 
				item={item} 
				key={item.id} 
				basket={props.basket}
				addToBasket={props.addToBasket}
				/>;
		});

		return (
			<Container fluid className="item-container">
				<Grid relaxed>
					<Grid.Row columns={5} only='computer'>
						{StoreItems}
					</Grid.Row>
					<Grid.Row columns={2} only='tablet'>
						{StoreItems}
					</Grid.Row>
					<Grid.Row columns={1} only='mobile'>
						{StoreItems}
					</Grid.Row>
				</Grid>
			</Container>
		);
	// }else{
	// 	return(null)
	// };
};
export default StoreItemList;
