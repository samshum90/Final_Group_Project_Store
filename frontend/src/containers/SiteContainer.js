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
			fetchItems: false,
			fetchOrders: false,
			filter: 'Alphabetical'
		};
		this.getItems = this.getItems.bind(this);
		this.loadOrders = this.loadOrders.bind(this);
		this.checkBasketInDatabase = this.checkBasketInDatabase.bind(this);
		this.checkLoginStatus = this.checkLoginStatus.bind(this);
		this.saveOrder = this.saveOrder.bind(this);

	}

	loadOrders() {
		console.log("loading orders start point")
		if (this.state.user != null && !this.state.basket && !this.state.fetchOrders) {
			this.setState({ fetchOrders: true })
			console.log("triggered 1st fetch request ")
			const URL = 'http://localhost:8080/orders?userId=' + sessionStorage.getItem('userId');
			const request = new Request();
			request.get(URL)
				.then((data) => {
					this.setState({ orders: data, fetchOrders: true }, () => { this.checkBasketInDatabase() })
				})

		} else {
			console.log("triggered fail state! Because User: " + this.state.user + " Basket: " + this.state.basket
				+ " Fetch: " + this.state.fetchOrders)
			return false;
		}
	}

	checkBasketInDatabase() {
		console.log("checking orders in state start point")
		if (this.state.fetchOrders && this.state.orders.length > 0) {
			console.log("has fetched & state has orders greater than zero")

			const basketArray = this.state.orders.filter(order => order.status.includes("basket"));
			if (basketArray.length === 0 && sessionStorage.getItem('userId') != null) {
				console.log("no basket in orders user is " + this.state.user)

				const payload = {
					user: sessionStorage.getItem('userId'),
					items: [],
					status: "basket",
					date: "date"
				}
				const URL = "http://localhost:8080/orders"
				const request = new Request();

				request.post(URL, payload)
					.then((res) => res.json())
					.then((data) => {
						this.setState({ basket: data, fetchOrders: true })
					})
			} else {
				console.log("basket in orders")
				this.setState({ basket: basketArray[0] })
			}


		} else if (this.state.fetchOrders && !this.state.orders.length && !this.state.basket) {
			console.log("has fetched no orders is an empty array no basket in state ")
			if (sessionStorage.getItem('userId') != null) {
				console.log("state has a User:" + sessionStorage.getItem('userId'))
				const payload = {
					user: sessionStorage.getItem('userId'),
					items: [],
					status: "basket",
					date: "date"
				}
				const URL = "http://localhost:8080/orders"
				const request = new Request();

				request.post(URL, payload)
					.then((res) => res.json())
					.then((data) => {
						this.setState({ basket: data })
					})
			} else {
				console.log("state has no user")
			}
		} else {
			console.log("checking orders in state failed")
		}
	}

	componentDidMount() {
		this.getItems();
		this.checkLoginStatus();
	}

	saveOrder() {

		const order = this.state.basket;
		order.status = "payment pending"
		this.saveBasketToDB(order)
		alert(`Your order ${this.state.basket.id} has been completed`) 
		this.setState({ basket: '' }, () => { this.checkBasketInDatabase() })
		window.location.replace("/")
		
	}

	sendSearch = (input) => {
		this.setState({ input: input.input }, () => { this.filterItems(this.state.input) })
	}

	filterItems = (input) => {
		const itemList = this.state.items.filter(item => item.name.toLowerCase().includes(`${input.toLowerCase()}`))
		this.setState({ filteredItems: itemList })
	}

	sendFilter = (filter) => {
		this.setState({ filter: filter.filter }, () => { this.arrangeItems(this.state.filter) })

	}

	arrangeItems = (filter) => {

		if (this.state.items) {
			if (filter === 'Alphabetical') {
				const sortedItems = this.state.items.sort(function (item1, item2) {
					var x = item1.name.toLowerCase();
					var y = item2.name.toLowerCase();
					if (x < y) { return -1; }
					if (x > y) { return 1; }
					return 0;
				});
				this.setState({ filteredItems: sortedItems })
			}
			if (filter === 'LowToHigh') {
				const sortedItems = this.state.items.sort(function (item1, item2) {
					var x = item1.currentSellPrice
					var y = item2.currentSellPrice
					if (x < y) { return -1; }
					if (x > y) { return 1; }
					return 0;
				});

				this.setState({ filteredItems: sortedItems })
			}

			if (filter === 'HighToLow') {
				const sortedItems = this.state.items.sort(function (item1, item2) {
					var x = item1.currentSellPrice
					var y = item2.currentSellPrice
					if (x < y) { return 1; }
					if (x > y) { return -1; }
					return 0;
				});
				this.setState({ filteredItems: sortedItems })

			}
			if (filter === 'Recommended') {
				const sortedItems = this.state.items.filter(item => item.highlighted === true);
				this.setState({ filteredItems: sortedItems })

			}
			if (filter === 'Clothing') {
				const sortedItems = this.state.items.filter(item => item.type === 'Clothing');
				this.setState({ filteredItems: sortedItems })
			}
			if (filter === 'Home') {
				const sortedItems = this.state.items.filter(item => item.type === 'Home');
				this.setState({ filteredItems: sortedItems })
			}
			if (filter === 'Courses') {
				const sortedItems = this.state.items.filter(item => item.type === 'Courses');
				this.setState({ filteredItems: sortedItems })
			}
		}

	}

	getItems() {
		const url = 'http://localhost:8080/items';
		const request = new Request();

		if (!this.state.fetchItems) {
			this.setState({ fetchItems: true })
			request.get(url)
				.then((data) => {
					this.setState({ items: data, filteredItems: data, fetchItems: true }, () => { this.arrangeItems('Alphabetical') })
				})
		}
	}

	checkLoginStatus = () => {
		if (AuthenticationService.isUserLoggedIn()) {
			console.log(sessionStorage.getItem('userId'));
			this.setState({ loggedIn: true, user: sessionStorage.getItem('userId') }, () => { this.loadOrders() })

		} else {

			this.setState({ loggedIn: false })
		}
	}

	saveBasketToDB = (basket) => {
		const URL = 'http://localhost:8080/orders/' + basket.id
		const request = new Request()

		request.patch(URL, basket)
	}

	addToBasket = (item) => {
		if (this.state.loggedIn) {

			const basket = this.state.basket;

			if (basket.items.includes(item)) {

				const index = basket.items.indexOf(item)
				basket.items.splice(index, 1)
				item.quantity++;
				basket.items.push(item)
				this.setState({ basket: basket })
			} else {
				item.quantity++;
				basket.items.push(item)
				this.setState({ basket: basket })
			}

			this.saveBasketToDB(basket)
		}
	}


	removeFromBasket = (item) => {

		const basket = this.state.basket;
		// console.log("i'm true or false: ", basket.items.includes(item))
		if (basket.items.includes(item)) {
			const index = basket.items.indexOf(item)
			basket.items.splice(index, 1)
			item.quantity--;
			if (item.quantity > 0) {
				basket.items.push(item)
				this.setState({ basket: basket })

			}
			this.setState({ basket: basket })
		}

		this.saveBasketToDB(basket)

	};


	PrivateRoute = ({ component: Component, ...rest }) => {
		return (
			<Route {...rest} render={props => (
				AuthenticationService.isUserLoggedIn() ?
					<Component {...props} />
					: <Redirect to="/log-in" />
			)} />
		);
	};

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
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}
								input={this.state.input}
							/>}
						/>
						<Route
							path="/items/:itemId"
							render={() => <ShopContainer
								items={this.state.items}
								basket={this.state.basket}
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}
								addToBasket={this.addToBasket}
							/>}
						/>
						<Route
							path="/cart"
							render={() => <ShopContainer
								basket={this.state.basket}
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}
								removeFromBasket={this.removeFromBasket}
							/>}
						/>

						<Route
							path="/check-out"
							component={() => <ShopContainer
								saveOrder={this.saveOrder}
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}
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
							component={() => <ShopContainer 
								items={this.state.items} 
								basket={this.state.basket}
							/>}
						/>
						<this.PrivateRoute
							path="/admin/orders"
							component={() => <AdminContainer items={this.state.items} basket={this.state.basket} sendFilter={this.sendFilter}
							sendSearch={this.sendSearch}/>}
						/>

						<this.PrivateRoute
							path="/orders"
							component={() => <ShopContainer basket={this.state.basket} sendFilter={this.sendFilter}
							sendSearch={this.sendSearch}/>}
						/>

						<Route
							path="/log-in"
							component={() => <ShopContainer
								checkLoginStatus={this.checkLoginStatus}
								loggedIn={this.state.loggedIn} 
								items={this.state.items}
								basket={this.state.basket}
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}
							/>}
						/>

						<Route
							path="/sign-up"
							component={() => <ShopContainer
								items={this.state.items}
								basket={this.state.basket}
								sendFilter={this.sendFilter}
								sendSearch={this.sendSearch}/>}
						/>

						<Route
							path="/about"
							component={() => <ShopContainer items={this.state.items} basket={this.state.basket}/>}
						/>
						<Route
							path="/where"
							component={() => <ShopContainer items={this.state.items} basket={this.state.basket}/>}
						/>
						<Route
							path="/customer-service"
							component={() => <ShopContainer items={this.state.items} basket={this.state.basket}/>}
						/>
						<Route
							path="*"
							component={() => <ShopContainer items={this.state.items} basket={this.state.basket}/>}
						/>
					</Switch>
					<Footer />

				</>
			</Router>
		);
	}
}


export default SiteContainer;
