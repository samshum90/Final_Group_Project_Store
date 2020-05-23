import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';

const options = [
	{ key: 'b', text: 'Books', value: 'books' },
	{ key: 'c', text: 'Clothing', value: 'clothing' },
	{ key: 'm', text: 'Media', value: 'media' },
	{ key: 'h', text: 'Home', value: 'home' },
	{ key: 'f', text: 'Food', value: 'food' },
	{ key: 'r', text: 'Courses', value: 'courses' },
];

class AddItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			brand: '',
			type: '',
			maxSellPrice: 0,
			currentSellPrice: 0,
			buyPrice: 0,
			imgUrl: '',
			description: '',
		};
	}

	handleNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleBrandChange = (event) => {
		this.setState({ brand: event.target.value });
	};

	handleTypeChange = (event, data) => {
		this.setState({ type: data.value });
	};

	handleMaxSellPriceChange = (event) => {
		this.setState({ maxSellPrice: event.target.value });
	};
	handleCurrentSellPriceChange = (event) => {
		this.setState({ currentSellPrice: event.target.value });
	};

	handleBuyPriceChange = (event) => {
		this.setState({ buyPrice: event.target.value });
	};

	handleImgUrlChange = (event) => {
		this.setState({ imgUrl: event.target.value });
	};

	handleDescriptionChange = (event) => {
		this.setState({ description: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newItem = {
			name: this.state.name,
			brand: this.state.brand,
			type: this.state.type,
			maxSellPrice: this.state.maxSellPrice,
			currentSellPrice: this.state.currentSellPrice,
			buyPrice: this.state.buyPrice,
			imgUrl: this.state.imgUrl,
			description: this.state.description,
		};
		this.props.onFormSubmit(newItem);
	};

	render() {
		return (
			<Container fluid className="item-container">
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							id="name"
							value={this.state.name}
							onChange={this.handleNameChange}
						></input>
					</Form.Field>

					<Form.Select
						fluid
						label="Type:"
						options={options}
						id="type"
						placeholder="Catagory"
						value={this.state.type}
						onChange={this.handleTypeChange}
					/>

					<Form.Group widths="equal">
						<Form.Field>
							<label htmlFor="brand">Brand: </label>
							<input
								type="text"
								id="brand"
								value={this.state.brand}
								onChange={this.handleBrandChange}
							></input>
						</Form.Field>

						<Form.Field>
							<label htmlFor="image-url">URL to Image: </label>
							<input
								type="text"
								id="image-url"
								value={this.state.imgUrl}
								onChange={this.handleImgUrlChange}
							></input>
						</Form.Field>
					</Form.Group>

					<Form.Group widths="equal">
						<Form.Field>
							<label htmlFor="max-sell-price">Recommended Retail Price: </label>
							<input
								type="number"
								id="sale-price"
								value={this.state.maxSellPrice}
								onChange={this.handleMaxSellPriceChange}
							></input>
						</Form.Field>

						<Form.Field>
							<label htmlFor="current-sell-price">Current Price: </label>
							<input
								type="number"
								id="current-sell-price"
								value={this.state.currentSellPrice}
								onChange={this.handleCurrentSellPriceChange}
							></input>
						</Form.Field>

						<Form.Field>
							<label htmlFor="buy-price">Unit Cost: </label>
							<input
								type="number"
								id="buy-price"
								value={this.state.buyPrice}
								onChange={this.handleBuyPriceChange}
							></input>
						</Form.Field>
					</Form.Group>

					<Form.Field>
						<label htmlFor="description">Description: </label>
						<input
							type="text"
							id="description"
							value={this.state.description}
							onChange={this.handleDescriptionChange}
						></input>
					</Form.Field>

					<Button primary type="submit">
						Add item
					</Button>
				</Form>
			</Container>
		);
	}
}

export default AddItemForm;
