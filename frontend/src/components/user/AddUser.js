import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react';

class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
			title: '',
			firstName: '',
			lastName: '',
			address: {
				firstLine: '',
				secondLine: '',
				county: '',
			},
			postCode: '',
		};
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	handleSubmit = (event) => {
		event.preventDefault();
		const newUser = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			title: this.state.title,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: {
				firstLine: this.state.address.firstName,
				secondLine: this.state.address.secondName,
				county: this.state.country,
			},
			postCode: this.state.postCode,
		};
		this.props.onFormSubmit(newUser);
	};

	render() {
		const {
			username,
			password,
			email,
			title,
			firstName,
			lastName,
			address: { firstLine, secondLine, county },
			postCode,
		} = this.state;
		return (
			<Container fluid className="item-container">
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths="equal">
						<Form.Input
							required
							label="Username:"
							type="text"
							name="username"
							value={username}
							onChange={this.handleChange}
						/>

						<Form.Input
							required
							label="Password:"
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Form.Input
						required
						label="Email:"
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>

					<Form.Group>
						<Form.Input
							width={2}
							label="Title:"
							type="text"
							name="title"
							value={title}
							onChange={this.handleChange}
						/>

						<Form.Input
							required
							width={7}
							label="First Name:"
							type="text"
							name="firstName"
							value={firstName}
							onChange={this.handleChange}
						/>

						<Form.Input
							required
							width={7}
							label="Last Name:"
							type="text"
							name="lastName"
							value={lastName}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<label> Address</label>
					<Form.Input
						required
						label="First Line:"
						type="text"
						name="firstName"
						value={firstLine}
						onChange={this.handleChange}
					/>

					<Form.Input
						label="Second Line:"
						type="text"
						name="secondLing"
						value={secondLine}
						onChange={this.handleChange}
					/>

					<Form.Input
						label="County:"
						type="text"
						name="county"
						value={county}
						onChange={this.handleChange}
					/>

					<Form.Input
						required
						label="Post Code:"
						type="text"
						name="postCode"
						value={postCode}
						onChange={this.handleChange}
					/>
					<Button primary type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default AddUser;
