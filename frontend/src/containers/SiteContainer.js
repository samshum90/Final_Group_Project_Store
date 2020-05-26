import React, { Component } from 'react';
import { 
	 BrowserRouter as Router,
	 Switch, 
	 Route,
	 Redirect,
	 useHistory,
	 useLocation 
	} from 'react-router-dom';
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
			filteredItems: [],
			user: null,
			loggedIn: false,
			basket: [],
			input: ''
		};
		this.getItems = this.getItems.bind(this);
		// this.checkLoginStatus = this.checkLoginStatus.bind(this);

	}

	componentDidMount() {
		this.getItems();
		this.checkLoginStatus()
	}

	sendSearch = (input) => {
    this.setState({input: input.input})
  }

	getItems() {
		const url = 'http://localhost:8080/items';
		const request = new Request();

		request.get(url).then((data) => {
			this.setState({ items: data, filteredItems: data });
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

	
		PrivateRoute = ({component: Component, ...rest}) => {
			return (
				<Route {...rest} render={props => (
					AuthenticationService.isUserLoggedIn() ?
						<Component {...props} />
					: <Redirect to="/log-in" />
				)} />
			);
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
								items={this.state.filteredItems} 
								basket={this.state.basket}
								addToBasket={this.addToBasket}
								sendSearch={this.sendSearch}
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
						<this.PrivateRoute
							path="/admin/items/edit/:itemId"
							component={() => <AdminContainer items={this.state.items} />}
						/>
						<this.PrivateRoute
							exact
							path="/admin/items"
							render={() => <AdminContainer items={this.state.items} />}
						/>
						<this.PrivateRoute
							path="/admin/new"
							component={() => <AdminContainer items={this.state.items} />}
						/>
						<this.PrivateRoute
							path="/account"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<this.PrivateRoute
							path="/admin/orders"
							component={() => <AdminContainer items={this.state.items} />}
						/>

						<this.PrivateRoute 
							path="/orders" 
							component={() => <ShopContainer />} 
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
