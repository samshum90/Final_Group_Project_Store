import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import OrderDetail from './OrderDetail'

const OrderList = (props) => {

	if (props.orders.length === 0){
		
      return (
      
        <Dimmer active inverted>
            <Loader inverted content='Loading' />
        </Dimmer>
        
        )
	}

	const orders = props.orders.map(order => {
	  return (
	    
            
	    <OrderDetail item={order} key={order.id}/>
	
	    
      )
      
	})

	return (
	  <ul className="admin-order-list">
	    {orders}
	  </ul>
	)
}
 export default OrderList;