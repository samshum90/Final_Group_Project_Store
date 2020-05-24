import React, { Component } from 'react';
import {
	Container,
	Button,
	Divider,
	Form,
	Grid,
	Segment,
	Image,
} from 'semantic-ui-react';
import Crest from '../assets/icons/Code-Clan-Crest.png';
import { Link } from 'react-router-dom';
import './LogIn.css'
import AuthenticationService from '../service/AuthenticationService'

class LogIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			hasLoginFailed: '',
      		showSuccessMessage: false
		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
   		this.loginClicked = this.loginClicked.bind(this)
	}

	loginClicked() {
	
	AuthenticationService
			.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((data) => {
				console.log(data.data.token)
				AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, this.state.password)
				console.log(sessionStorage)
				this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
                .then(this.props.history.push("/"))
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
	}

    handleUsernameChange(event) {
        this.setState(
            {username: event.target.value}
        )
		}
		
		handlePasswordChange(event) {
        this.setState(
            {password: event.target.value}
        )
    }

	render(){
	return (

	<Container fluid id="login-container">
		<Segment.Group raised className="login-segment">
			<Segment placeholder>
			<Image src={Crest} alt="Code Clan Crest"  size='medium' centered  />
			</Segment>

			<Segment placeholder color='blue'>
				<Grid columns={2} relaxed="very" stackable>
					<Grid.Column>
						<Form>
							<Form.Input
								icon="user"
								iconPosition="left"
								label="Username:"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleUsernameChange}
							/>
							<Form.Input
								icon="lock"
								iconPosition="left"
								label="Password:"
								type="password"
								value={this.state.password}
								onChange={this.handlePasswordChange}
							/>

							<Button content="Login" primary onClick={this.loginClicked} />
						</Form>


					{this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
					</Grid.Column>

					<Grid.Column verticalAlign="middle">
						<Link to="/sign-up">
							<Button content="Sign up" icon="signup" size="big" />
						</Link>
					</Grid.Column>
				</Grid>

				<Divider vertical />
					
			</Segment>
		</Segment.Group>
	</Container>
	);
	}
};

export default LogIn;
