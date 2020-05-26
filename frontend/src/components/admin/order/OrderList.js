import React from 'react';
import { 
	// Dimmer, 
	// Loader, 
	Container } from 'semantic-ui-react'
import OrderDetail from './OrderDetail'

const OrderList = (props) => {

	// if (props.orders.length === 0){
		
    //   return (
      
    //     <Dimmer active inverted>
    //         <Loader inverted content='Loading' />
    //     </Dimmer>
        
    //     )
	// }

	const orders = props.orders.map(order => {
	  return (
	    
           
	    	<OrderDetail item={order} key={order.id}/>
	
	    
      )
      
	})

	return (
		<Container fluid className="main-container">
			<ul className="admin-order-list">
				{orders}
			</ul>
		</Container>
	)
}
 export default OrderList;