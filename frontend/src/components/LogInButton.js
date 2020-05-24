import React from 'react';
import AuthenticationService from '../service/AuthenticationService'
import { Link } from 'react-router-dom';

const LoginButton = () => {

	function handleClick(event){
		AuthenticationService.logout()
	
	}
	

	if(AuthenticationService.isUserLoggedIn()){
	return(
		<Link onClick={handleClick}>Log out</Link>
	)} else {
		return(
		<Link to="/log-in">Log In</Link>
	)}

}

export default LoginButton;