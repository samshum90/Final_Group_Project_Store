import React, { Component } from 'react';
import { Button, Form, Container, Checkbox } from 'semantic-ui-react';

class EditUserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
			address: {
				title: '',
				firstName: '',
				lastName: '',
				firstLine: '',
				secondLine: '',
				townCity:'',
				county: '',
				postCode: '',
			},
			
		};
		this.onChange = this.onChange.bind(this);
    }

    // componentDidMount() {
	// 	var userId = /[^/]*$/.exec(window.location.href)[0];
	// 	const url = 'http://localhost:8080/items/' + itemId;
	// 	const request = new Request();
	// 	request
	// 		.get(url)
	// 		.then((data) => {
	// 			this.setState(data);
	// 		})

	// 		.catch((err) => console.log(err));
    // }
    
    onChange(e) { 
		const { address } = { ...this.state };
		const currentState = address;
		const { name, value } = e.target;
		currentState[name] = value;
	  
		this.setState({ address: currentState });
      }
      
      handleSubmit = (event) => {
		event.preventDefault();
		const editUser = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			address: {
				title: this.state.address.title,
				firstName: this.state.address.firstName,
				lastName: this.state.address.lastName,
				firstLine: this.state.address.firstLine,
				secondLine: this.state.address.secondLine,
				townCity: this.state.address.townCity,
				county: this.state.address.county,
				postCode: this.state.address.postCode,
            },
        }
		const url = 'http://localhost:8080/users/' + this.state.id;
		const request = new Request();
        request.patch(url, editUser)
        .then((window.location = '/'));
	};

    render() {
    return (

    <Container fluid className="item-container">
    <Form onSubmit={this.handleSubmit} className="form-container">
    
            <Form.Input
                width={6}
                required
                label="Username:"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
            />

            <Form.Input
            width={6}
                required
                label="Password:"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
            />
        

        <Form.Input
        width={6}
            required
            label="Email:"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
        />


            <Form.Input
                width={6}
                label="Title:"
                type="text"
                name="title"
                value={title}
                onChange={this.onChange}
            />

            <Form.Input
                required
                width={6}
                label="First Name:"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.onChange}
            />

            <Form.Input
                required
                width={6}
                label="Last Name:"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.onChange}
            />

        <label> Address:</label>
    
        <Form.Input
            width={6}
            required
            label="First Line:"
            type="text"
            name="firstLine"
            value={firstLine}
            onChange={this.onChange}
        />

        <Form.Input
            width={6}
            label="Second Line:"
            type="text"
            name="secondLine"
            value={secondLine}
            onChange={this.onChange}
        />



        <Form.Input
            width={6}
            label="City:"
            type="text"
            name="townCity"
            value={townCity}
            onChange={this.onChange}
        />

        <Form.Input
            width={6}
            label="County:"
            type="text"
            name="county"
            value={county}
            onChange={this.onChange}
        />

        <Form.Input
            width={6}
            required
            label="Post Code:"
            type="text"
            name="postCode"
            value={postCode}
            onChange={this.onChange}
        />

        <Form.Field required>
              <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button primary type="update">
            Update
        </Button>
    </Form>
</Container>
);
}

}
    
export default EditUserForm;