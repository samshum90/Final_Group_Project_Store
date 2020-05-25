import React, { Component } from 'react';
import { Dimmer, Loader, Container, Segment, Grid, Image, Rating, Button } from 'semantic-ui-react';
import Request from '../../helpers/request';
import './StoreItemDetail.css'

class StoreItemDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
		};
	}

	componentDidMount() {
		var itemId = /[^/]*$/.exec(window.location.href)[0];

		const url = 'http://localhost:8080/items/' + itemId;
		const request = new Request();
		request
			.get(url)
			.then((data) => {
				this.setState({ item: data }, () => console.log(this.state));
			})

			.catch((err) => console.log(err));
	}

	handleClick(){
		this.props.addToBasket(this.state.item)
	}

	render() {
		if (!this.state.item) {
			return (
				<Dimmer active inverted>
					<Loader inverted content="Loading" />
				</Dimmer>
			);
		}

		if (this.state.item.noItemFound) {
			return (window.location = '/*');
		}

		return (
			<Container fluid className="item-container">
				<Grid>
					<Grid.Row>
					<Grid.Column width={5}>
						<Segment>
							<Image 
								src={this.state.item.imgUrl} 
								alt={this.state.item.name} 
								size='large' 
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column width={11}>
						<Segment.Group>
							<Segment id='segment'>
								<h4>{this.state.item.brand} </h4>
								<h2>{this.state.item.name} </h2>
								<Rating 
									className='rating'
									icon="star" 
									defaultRating={3} 
									maxRating={5} 
									size='huge'
								/>
								<h3>Price:  £{this.state.item.currentSellPrice} </h3>
								<p>{this.state.item.description}</p>

								<Button primary compact 
									className='button'
									floated="right"
									onClick={this.handleClick}
								>
									Add To Cart
								</Button>

							</Segment>
				
						</Segment.Group>
					</Grid.Column>
					</Grid.Row>
				</Grid>

			</Container>

		)
	}
}

export default StoreItemDetail;
