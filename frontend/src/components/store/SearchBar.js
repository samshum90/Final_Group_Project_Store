import React, { Component } from 'react';
import { Input} from 'semantic-ui-react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
	}

	handleSearchChange = (e) => {
		this.setState({ input: e.target.value }, () => {
			this.props.sendSearch({ input: this.state.input });
    });
    // this.setState({input: e.target.value})
	};

	render() {

		return (
			<>


				<Input
					action={{
					color: 'yellow',
					icon: 'search',
					}}
					actionPosition='right'
					placeholder='Search...'
					id="filter"
					value={this.state.input}
					onChange={this.handleSearchChange}
				/>

			</>
		);
	}
}

export default SearchBar;
