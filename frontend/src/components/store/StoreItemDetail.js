import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Request from '../../helpers/request';

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

		return <>{this.state.item.name}</>;
	}
}

export default StoreItemDetail;
