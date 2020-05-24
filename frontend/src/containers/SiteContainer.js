import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../helpers/request';
import NavBar from '../components/NavBar';
import Footer from '../components/footer/Footer';
import AdminContainer from '../containers/AdminContainer';
import ShopContainer from '../containers/ShopContainer';

class SiteContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			user: null,
		};
		this.getItems = this.getItems.bind(this);
	}

	componentDidMount() {
		this.getItems();
	}
	getItems() {
		const url = 'http://localhost:8080/items';
		const request = new Request();

		request.get(url).then((data) => {
			this.setState({ items: data });
		});
	}

	render() {
		return (
			<Router>
				<>
					<NavBar />
					<Switch>
						<Route
							exact
							path="/"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/items/:itemId"
							component={() => <ShopContainer items={this.state.items} />}
						/>
						<Route
							path="/admin/items/edit/:itemId"
							component={() => <AdminContainer items={this.state.items} />}
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
							component={() => <ShopContainer items={this.state.items} />}
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
