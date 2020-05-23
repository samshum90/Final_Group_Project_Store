import React from 'react';
import Request from '../../../helpers/request';
import { Button } from 'semantic-ui-react';

const ItemDetail = (props) => {
	const URL = '/admin/items/edit/' + props.item.id;

	return (
		<li>
			{props.item.name} <img src={props.item.imgUrl} alt={props.item.name} />
			RRP: £{props.item.maxSellPrice}, Current Price: £
			{props.item.currentSellPrice}, Supplier Price: £{props.item.buyPrice}
			<a href={URL}>
				{' '}
				<Button primary>Edit item</Button>
			</a>
			<button
				className="ui red button"
				onClick={handleDelete}
				value={props.item.id}
			>
				Delete Item
			</button>
		</li>
	);
};

const handleDelete = (event) => {
	const url = 'http://localhost:8080/items/' + event.target.value;
	const request = new Request();
	request.delete(url).then((window.location = '/admin/items'));
};

export default ItemDetail;
