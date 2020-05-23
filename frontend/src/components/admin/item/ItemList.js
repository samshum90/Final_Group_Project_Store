import React from 'react';
import { Dimmer, Loader, Container } from 'semantic-ui-react';
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
		<Container fluid className="main-container">
			<ul className="admin-item-list">{items}</ul>
		</Container>
	);
};
export default ItemList;
