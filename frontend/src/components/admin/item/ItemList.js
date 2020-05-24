import React from 'react';
import { Dimmer, Loader, Container, Grid } from 'semantic-ui-react';
import ItemDetail from './ItemDetail';

const ItemList = (props) => {
	if (props.items.noItemFound) {
		return (window.location = '/admin/new');
	}

	if (!props.items || !props.items.length) {
		return (
			<Dimmer active inverted>
				<Loader inverted content="Loading" />
			</Dimmer>
		);
	}

	const items = props.items.map((item) => {
		return <ItemDetail item={item} key={item.id} />;
	});

	return (
		<Container fluid className="item-container">
			<Grid relaxed container columns={2}>
				{items}		
			</Grid>
		</Container>
	);
};
export default ItemList;
