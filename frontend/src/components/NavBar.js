import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../assets/icons/CodeClan_Logo.png';
import { Icon } from 'semantic-ui-react';
import LogInButton from './LogInButton'
import AuthenticationService from '../service/AuthenticationService'

function accountButton() {
	if(AuthenticationService.isUserLoggedIn()){
		return (
				<li>
					<Link to="/account">Account</Link>
				</li>
		)
	}
}

function adminButton(){
	if(AuthenticationService.getLoggedInUserName() === 'admin'){
		return(
		<li>
					<Link to="/admin/items">Admin</Link>
		</li>
		)}
}

function showOrderButton() { 
	if(AuthenticationService.isUserLoggedIn()){
	return(
			<li>
				<Link to="/orders">Orders</Link>
			</li>
	)
	}
}

function showCart(){
	if(AuthenticationService.isUserLoggedIn()){
	return(
			<li>
					<Link to="/cart">
						<Icon name="shopping cart" 
						size="large" 
						/>
					</Link>
			</li>
	)
}
}

const NavBar = (props) => {
	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<Link to="/">
						<img src={Logo} alt="Code Clan Logo" />
					</Link>
				</li>
				{adminButton()}
				{accountButton()}
				{showOrderButton()}
				<li>
					<LogInButton 
					checkLoginStatus={props.checkLoginStatus} 
					loggedIn={props.loggedIn}
					/>
				</li>
				{showCart()}
			</ul>
		</nav>
	);
};

export default NavBar;
