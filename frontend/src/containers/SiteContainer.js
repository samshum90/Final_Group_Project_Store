import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../helpers/request';
import NavBar from '../components/NavBar';
import Footer from '../components/footer/Footer';
import AdminContainer from '../containers/AdminContainer';
import ShopContainer from '../containers/ShopContainer';
import AuthenticationService from '../service/AuthenticationService';

class SiteContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			user: null,
			loggedIn: false,
			basket: []
		};
		this.getItems = this.getItems.bind(this);
		// this.checkLoginStatus = this.checkLoginStatus.bind(this);

	}

	componentDidMount() {
		this.getItems();
		this.checkLoginStatus()
	}
	getItems() {
		const url = 'http://localhost:8080/items';
		const request = new Request();

		request.get(url).then((data) => {
			this.setState({ items: data });
		});
	}

	checkLoginStatus = ( ) => {
		if(AuthenticationService.isUserLoggedIn()){
			this.setState({loggedIn: true})
		}else{
			this.setState({loggedIn: false})
		}
	}

	addToBasket = (item) => {
		this.setState(state => {
			const basket = [...state.basket, item];
			return {
				basket
			  };
		})
	}

	removeFromBasket = (id) => {
		this.setState(state => {
			  const basket = state.basket.filter(item => item.id !== id);
			  return {
				basket,
			  };
			});
		  };
	

	
	// handleClick = (event) => {
	// 		AuthenticationService.logout()
	// 		this.setState({loggedIn: false})
	// }

	render() {
		return (
			<Router>
				<>
					<NavBar 
						checkLoginStatus={this.checkLoginStatus} 
						loggedIn={this.state.loggedIn}
					/> 
					<Switch>
						<Route
							exact
							path="/"
							render={() => <ShopContainer 
								items={this.state.items} 
								basket={this.state.basket}
								addToBasket={this.addToBasket}
								/>}
						/>
						<Route
							path="/items/:itemId"
							render={() => <ShopContainer 
								items={this.state.items} 
								basket={this.state.basket}
								addToBasket={this.addToBasket}
								/>}
						/>
						<Route
							path="/cart"
							render={() => <ShopContainer 
								basket={this.state.basket}
								removeFromBasket={this.removeFromBasket}
								/>}
						/>
						<Route
							path="/admin/items/edit/:itemId"
							render={() => <AdminContainer items={this.state.items} />}
						/>
						<Route
							exact
							path="/admin/items"
							component={() => <AdminContainer items={this.state.items} />}
						/>
						<Route
							path="/admin/new"
							component={() => <AdminContainer items={this.state.items} />}
						/>
						<Route
							path="/account"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/admin/orders"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/log-in" 
							component={() => <ShopContainer 
								checkLoginStatus={this.checkLoginStatus} 
								loggedIn={this.state.loggedIn} items={this.state.items} 
								/>}
						/>
						<Route
							path="/sign-up"
							component={() => <ShopContainer items={this.state.items} />}
						/>

						<Route
							path="/about"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/where"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/customer-service"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="*"
							component={() => <ShopContainer items={this.state.items} />}
						/>
					</Switch>
					<Footer />
				</>
			</Router>
		);
	}
}

export default SiteContainer;
