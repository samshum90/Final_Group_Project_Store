import React, { Component } from 'react';
import { Dimmer, 
	Loader, 
	Container, 
	Segment, 
	Grid, 
	Image, 
	Rating, 
	Button } from 'semantic-ui-react';
import Request from '../../helpers/request';
import './StoreItemDetail.css'
import FeedContainer from './FeedContainer'

class StoreItemDetail extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			item: '',
		};

		this.handleClick = this.handleClick.bind(this)
	}
	
	componentDidMount() {
		this._isMounted = true;
		var itemId = /[^/]*$/.exec(window.location.href)[0];
		const url = 'http://localhost:8080/items/' + itemId;
		const request = new Request();
		request
			.get(url)
			.then((data) => {
				if (this._isMounted) {
				this.setState({ item:data });
			}
		})
			.catch((err) => console.log(err));
	}

	handleClick(item){

		this.props.addToBasket(item)
	}

	componentWillUnmount() {
		this._isMounted = false;
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
		
		const images = this.state.item.imgUrl.map((url) => {
			return <Image
				key={url}
				src={url}
				alt={url}
				size='large' 
			/>;
		}
		)

		return (
			<Container fluid className="item-container">
				<Grid>
					<Grid.Row>
					<Grid.Column width={6}>
						<Segment>
							{images}
						</Segment>
					</Grid.Column>
					<Grid.Column width={10}>
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

								<Button 
									primary 
									compact 
									className='button'
									floated="right"
									onClick={()=>{this.handleClick(this.state.item)}}
								>
									Add To Cart
								</Button>

							</Segment>
				
						</Segment.Group>
					</Grid.Column>
					</Grid.Row>
					<FeedContainer />
				</Grid>

			</Container>

		)
	}
}

export default StoreItemDetail;
