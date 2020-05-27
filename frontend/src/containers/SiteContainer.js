import React, { Component } from 'react';
import { 
	 BrowserRouter as Router,
	 Switch, 
	 Route,
	 Redirect
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
			orders: '',
			basket: '',
			input: '',
			fetch: false
		};
		this.getItems = this.getItems.bind(this);
		this.loadOrders = this.loadOrders.bind(this);
		this.checkBasketInDatabase = this.checkBasketInDatabase.bind(this);
		this.checkLoginStatus = this.checkLoginStatus.bind(this);

	}

	loadOrders(){
		
		if(this.state.user != null && !this.state.basket  && !this.state.fetch){
			this.setState({fetch: true})
			const URL = 'http://localhost:8080/orders?userId='+sessionStorage.getItem('UserId');
			const request = new Request();
	
			request.get(URL)
			.then((data) => {
				this.setState({orders: data})
				this.checkBasketInDatabase()			
			})
		
		}else{
			return false;			
		}
	}

	checkBasketInDatabase(){
		if(this.state.fetch && this.state.orders.length > 0){
			const basketArray = this.state.orders.filter(order => order.status.includes("basket"));
			const basket = basketArray.pop();
			this.setState({basket: basket})
		}else if(this.state.fetch && !this.state.orders.length  && !this.state.basket){
			if (this.state.user != null) {

				const payload ={
					user: sessionStorage.getItem('UserId'),
					items: [],
					status: "basket",
					date: "date"
				}
				const URL = "http://localhost:8080/orders"
				const request = new Request();

				request.post(URL, payload)
				.then((res) => res.json())
				.then((data) => {
				this.setState({basket: data})	
				})
			}
		}
	}

	componentDidMount() {
		this.getItems();
		this.checkLoginStatus();

	}

	sendSearch = (input) => {
		this.setState({input: input.input})
		this.filterItems(input)
	}
	
	filterItems = (input) => {
		const itemList = this.state.items.filter(item => item.name.toLowerCase().includes(`${input.input.toLowerCase()}`))
		this.setState({filteredItems: itemList})
	}

	getItems() {
		const url = 'http://localhost:8080/items';
		const request = new Request();

		request.get(url)
		.then((data) => {
			this.setState({ items: data, filteredItems: data });
		});
	}

	checkLoginStatus = ( ) => {
		if(AuthenticationService.isUserLoggedIn()){
			this.setState({loggedIn: true})
			this.setState({user: sessionStorage.getItem('UserId')})
		}else{
			this.setState({loggedIn: false})
		}
	}

	saveBasketToDB = (basket) => {
		const URL = 'http://localhost:8080/orders/' + basket.id
		const request = new Request()
		request.patch(URL, basket)
	}

	addToBasket = (item) => {
		if(this.state.loggedIn){

			const basket = this.state.basket;
			
			if(basket.items.includes(item)){

				const index = basket.items.indexOf(item)
				basket.items.splice(index, 1)
				item.quantity ++;
				basket.items.push(item)
				this.setState({basket: basket})
			}else{
				item.quantity ++;
				basket.items.push(item)
				this.setState({basket: basket})
			}

			this.saveBasketToDB(basket)
		}
	}
	

	removeFromBasket = (item) => {

		const basket = this.state.basket;
		console.log("i'm true or false: ", basket.items.includes(item))
		if(basket.items.includes(item)){
			const index = basket.items.indexOf(item)
			basket.items.splice(index, 1)
			item.quantity --;
			if(item.quantity > 0){
				basket.items.push(item)
				this.setState({basket: basket})

			}
			this.setState({basket: basket})
		}

		this.saveBasketToDB(basket)

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
						loadOrders={this.loadOrders}
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
								input={this.state.input}
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
							path="/check-out"
							component={() => <ShopContainer 
								basket={this.state.basket}
								/>}
						/>

						<this.PrivateRoute
							path="/admin/items/edit/:itemId"
							component={() => <AdminContainer items={this.state.items} />}
						/>
						<this.PrivateRoute
							exact
							path="/admin/items"
							component={() => <AdminContainer items={this.state.items} />}
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
