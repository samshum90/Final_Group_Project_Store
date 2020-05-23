import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import ItemDetail from './ItemDetail'

const ItemList = (props) => {

	if (props.items.length === 0){
		
	  return (
	  
		<Dimmer active inverted>
			<Loader inverted content='Loading' />
		</Dimmer>)
	}

	const items = props.items.map(item => {
	  return (
	    <ItemDetail item={item} key={item.id}/>
      )
	})

	return (
	  <ul className="admin-item-list">
	    {items}
	  </ul>
	)
}
 export default ItemList;

