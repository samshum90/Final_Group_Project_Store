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
			imgUrl: {
				url1:'',
				url2:'',
				url3:'',
			},
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
			imgUrl: {
				url1: this.state.imgUrl.url1,
				url2: this.state.imgUrl.url2,
				url3: this.state.imgUrl.url3,
			},
			description: this.state.description,
		};
		this.props.onFormSubmit(newItem);
	};

	render() {
		return (
			<Container fluid className="item-container">
				<Form onSubmit={this.handleSubmit} className="form-container">
					<Form.Input width={9}
						label="Name:"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleNameChange}
						/>

					<Form.Select
						fluid
						label="Type:"
						options={options}
						id="type"
						placeholder="Category"
						value={this.state.type}
						onChange={this.handleTypeChange}
						width={9}
					/>

						<Form.Input width={9}
							label="Brand:"
							type="text"
							name="brand"
							value={this.state.brand}
							onChange={this.handleBrandChange}
						/>
							
						<Form.Input width={9}
							label="URL to Image:"
							type="text"
							name="image-url"
							value={this.state.imgUrl}
							onChange={this.handleImgUrlChange}
						/>

					<Form.Group inline >
						<Form.Input
							label="RRP:"
							type="number"
							name="sale-price"
							value={this.state.maxSellPrice}
							onChange={this.handleMaxSellPriceChange}
						/>

						<Form.Input
							label="Current Price:" 
							type="number"
							name="current-sell-price"
							value={this.state.currentSellPrice}
							onChange={this.handleCurrentSellPriceChange}
						/>

						<Form.Input
							label="Unit Cost:" 
							type="number"
							id="buy-price"
							value={this.state.buyPrice}
							onChange={this.handleBuyPriceChange}
						/>
					</Form.Group>

					<Form.TextArea label='Description:' 
					width={9}
					type="text"
					name="description"
					value={this.state.description}
					onChange={this.handleDescriptionChange}
					/>

					<Button primary type="submit">
						Add item
					</Button>
				</Form>
			</Container>
		);
	}
}

export default AddItemForm;
