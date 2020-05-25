import React, {Component} from 'react';
import AuthenticationService from '../service/AuthenticationService'
import { Link } from 'react-router-dom';

class LogInButton extends Component {
	constructor(props){
		super(props)
		this.state = {
			loggedIn: this.props.loggedIn
		}


	}
	
	
	handleClick = (event) => {
			AuthenticationService.logout()
			this.props.checkLoginStatus();
	}

	render(){
	
		if(this.props.loggedIn){
			return(	
				<Link to="/" onClick={this.handleClick}>Log out</Link>
			)} else {
			return(
				<Link to="/log-in" >Log In</Link>
			)};
	};
}
export default LogInButton;