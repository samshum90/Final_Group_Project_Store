import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			filter: ''
		};
	}

	handleSearchChange = (e) => {
		this.setState({ input: e.target.value }, () => {
			this.props.sendSearch({ input: this.state.input });
    });
	};

	handleFilter = (e, data) => {
		this.setState({filter: data.value}, () => {
			this.props.sendFilter({filter: this.state.filter})
		})
	}


	render() {

		const options = [
			{ key: 'a', text: 'Alphabetical', value: 'Alphabetical' },
			{ key: 'p', text: 'Price: Low To High', value: 'LowToHigh' },
			{ key: 'd', text: 'Price High To Low', value: 'HighToLow' },
			{ key: 'r', text: 'Recommended', value: 'Recommended' },
			{ key: 'c', text: 'Clothing', value: 'Clothing' },
			// { key: 'm', text: 'Media', value: 'media' },
			{ key: 'h', text: 'Home', value: 'Home' },
			// { key: 'f', text: 'Food', value: 'food' },
			{ key: 'o', text: 'Courses', value: 'Courses' },
		];

		return (
			<>

				<Input
    				action={
					  <Dropdown 
					  	button 
						selection
						floating 
						options={options} 
						// value={selected}
						onChange={this.handleFilter}
						defaultValue='Alphabetical' 
						/>  
    				}
    				icon='search'
    				iconPosition='left'
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
