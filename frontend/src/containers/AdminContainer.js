import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Request from '../helpers/request';
import AdminNavBar from '../components/admin/AdminNavBar';
import AddItemForm from '../components/admin/item/AddItemForm';
import ItemList from '../components/admin/item/ItemList';
import OrderList from '../components/admin/order/OrderList';
import ItemEditForm from '../components/admin/item/ItemEditForm';

class AdminContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
		};
	}
	handlePost(item) {
		const request = new Request();
		const url = 'http://localhost:8080/items';

		request.post(url, item).then(() => {
			window.location = '/admin/items';
		});
	}
	render() {
		return (
			<Router>
				<div>
					<AdminNavBar />
					<Switch>
						<Route
							path="/admin/new"
							component={() => <AddItemForm onFormSubmit={this.handlePost} />}
						/>
						<Route
							path="/admin/items/edit/:itemId"
							component={() => <ItemEditForm />}
						/>
						<Route
							path="/admin/items"
							component={() => <ItemList items={this.props.items} />}
						/>
						<Route
							path="/admin/orders"
							component={() => <OrderList orders={this.state.orders} />}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default AdminContainer;
