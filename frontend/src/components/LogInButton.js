import React, {Component} from 'react';
import AuthenticationService from '../service/AuthenticationService'
import { Link } from 'react-router-dom';

// function handleClick(event){
// 	AuthenticationService.logout()
// 	window.location.reload(false);
// }

// if(!AuthenticationService.isUserLoggedIn()){
// return(
// 	<Link to="/log-in">Log In</Link>
// )} else {
// 	return(
// 		<Link to="/" onClick={handleClick}>Log out</Link>
	
// )}

// export default LoginButton;


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
			console.log(this.props)
			return(	

			<Link to="/" onClick={this.handleClick}>Log out</Link>
			
			)} else {
				console.log(this.props)
			return(
				<Link to="/log-in" >Log In</Link>
			
		)};
	};
}
export default LogInButton;