import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
	}

	handleSearchChange = (e) => {
		// this.setState({ input: e.target.value }, () => {
		// 	this.props.sendSearch({ input: this.state.input });
    // });
    this.setState({input: e.target.value})
	};

	render() {
		return (
			<div class="search">
				<label value="filter">Filter: </label>
				<input
					type="text"
					id="filter"
					value={this.state.input}
					onChange={this.handleSearchChange}
				/>
			</div>
		);
	}
}

export default SearchBar;
