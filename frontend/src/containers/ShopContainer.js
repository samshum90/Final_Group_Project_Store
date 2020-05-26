import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Request from '../helpers/request';
import StoreNavBar from '../components/store/StoreNavBar';
import StoreItemList from '../components/store/StoreItemList';
import EditUserForm from '../components/user/EditUserForm';
import UserOrderList from '../components/user/UserOrderList';

import About from '../components/footer/About';
import WhereToFindUs from '../components/footer/WhereToFindUs';
import CustomerService from '../components/footer/CustomerService';
import StoreItemDetail from '../components/store/StoreItemDetail';
import NoMatch from '../components/NoMatch';
import LogIn from '../components/LogIn';
import AddUser from '../components/user/AddUser';
import Cart from '../components/order/Cart'

class ShopContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// loggedIn: this.props.loggedIn
		};
	}

	handlePost(user) {
		const request = new Request();
		const url = 'http://localhost:8080/users';

		request.post(url, user).then(() => {
			console.log(user)
			// window.location = '/';
		});
	}

	render() {
		return (
			<>
				<StoreNavBar 
					basket={this.props.basket}
					items={this.props.items}
					sendSearch={this.props.sendSearch}
				/>
				<Switch>
					<Route
						exact
						path="/"
						component={() => <StoreItemList 
							items={this.props.items}
							basket={this.props.basket}
							addToBasket={this.props.addToBasket}
							input={this.props.input}
							/>}
					/>
					<Route 
						path="/items/:itemId" 
						component={() => <StoreItemDetail 
							basket={this.props.basket}
							addToBasket={this.props.addToBasket}
							/>} 
					/>

					<Route
						path="/cart"
						render={() => <Cart
						basket={this.props.basket}
						removeFromBasket={this.props.removeFromBasket}
						/>}
					/>		

					<Route 
						path="/account" 
						component={() => <EditUserForm />} 
					/>
					
					<Route path="/orders" component={() => <UserOrderList />} />

					<Route  
						path="/log-in" 
						component={() => <LogIn 
								checkLoginStatus = {this.props.checkLoginStatus} 
								loggedIn={this.props.loggedIn}
								/>} 
					/>
					<Route 
						path="/sign-up" 
						component={() => <AddUser 
							onFormSubmit={this.handlePost}
						/>} 
					/>
					{/* <Route path="/cart" component={() =>< />} /> */}

					<Route path="/about" component={() => <About />} />
					<Route path="/where" component={() => <WhereToFindUs />} />
					<Route
						path="/customer-service"
						component={() => <CustomerService />}
					/>
					<Route path="*" component={() => <NoMatch />} />
				</Switch>
			</>
		);
	}
}

export default ShopContainer;
