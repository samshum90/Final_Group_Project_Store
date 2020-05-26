import React, { Component } from 'react';
import { Button, Form, Container, Checkbox, Segment } from 'semantic-ui-react';
import Request from '../../helpers/request';

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

    componentDidMount() {
		const url = 'http://localhost:8080/users/' + sessionStorage.getItem('UserId');
        const request = new Request();
        console.log('useredit:', url)
		request
			.get(url)
			.then((data) => {
                this.setState(data);
            })
            .then(this.setState({password: ''}))
			.catch((err) => console.log(err));
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });
    
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
        <Segment raised>    
            <Form onSubmit={this.handleSubmit}>
            
                    <Form.Input
                        required
                        label="Username:"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <Form.Input
                        required
                        label="Password:"
                        type="password"
                        name="password"
                        // value={this.state.password}
                        onChange={this.handleChange}
                    />
                

                <Form.Input
                    required
                    label="Email:"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />


                    <Form.Input
                        label="Title:"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />

                    <Form.Input
                        required
                        label="First Name:"
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                    />

                    <Form.Input
                        required
                        label="Last Name:"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                    />

                <label> Address:</label>
            
                <Form.Input
                    required
                    label="First Line:"
                    type="text"
                    name="firstLine"
                    value={this.state.address.firstLine}
                    onChange={this.onChange}
                />

                <Form.Input
                    label="Second Line:"
                    type="text"
                    name="secondLine"
                    value={this.state.address.secondLine}
                    onChange={this.onChange}
                />



                <Form.Input
                    label="City:"
                    type="text"
                    name="townCity"
                    value={this.state.address.townCity}
                    onChange={this.onChange}
                />

                <Form.Input
                    label="County:"
                    type="text"
                    name="county"
                    value={this.state.address.county}
                    onChange={this.onChange}
                />

                <Form.Input
                    required
                    label="Post Code:"
                    type="text"
                    name="postCode"
                    value={this.state.address.postCode}
                    onChange={this.onChange}
                />

                <Form.Field required>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button primary type="update">
                    Update
                </Button>
            </Form>
        </Segment>  
    </Container>
    );
}

}
    
export default EditUserForm;