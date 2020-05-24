import React, { Component } from 'react';
import Request from '../../../helpers/request';
import { Button, Segment, Image, Grid, Confirm } from 'semantic-ui-react';

class ItemDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	open = () => this.setState({ open: true })
	close = () => this.setState({ open: false })
  
	
render(){
	const URL = '/admin/items/edit/' + this.props.item.id;

	const handleDelete = (event) => {
		const url = 'http://localhost:8080/items/' + this.props.item.id;
		this.setState({ open: false })
		const request = new Request();
		request.delete(url)
		.then((window.location = '/admin/items'));
	};

	return (
	<Grid.Column>
		<Segment>
			<Grid columns={2} >
      			<Grid.Column>
					<Image src={this.props.item.imgUrl} alt={this.props.item.name} size='medium'/>
					</Grid.Column>
				<Grid.Column>
					<h3>{this.props.item.name}</h3>
					<p>RRP: £{this.props.item.maxSellPrice} </p>
					<p>Current Price: £ {this.props.item.currentSellPrice} </p>
					<p>Supplier Price: £{this.props.item.buyPrice}</p>
					<a href={URL}>
						<Button primary compact>Edit item</Button>
					</a>
					<Button
						negative
						compact
						value={this.props.item.id}
						onClick={this.open}
					>
						Delete Item
					</Button>
					<Confirm
          				open={this.state.open}
						onCancel={this.close}
          				onConfirm={handleDelete}
        			/>
				</Grid.Column>
			</Grid>
		</Segment>
	</Grid.Column>
	
	);
}
};


export default ItemDetail;
