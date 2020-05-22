import React from 'react';
import ItemDetail from './ItemDetail'

const ItemList = (props) => {
        console.log(props)
        console.log(props.items);
	if (props.items.length === 0){
		
	  return (<p>Loading...</p>)
	}

	const items = props.items.map((item, index) => {
        
	  return (
	    <li key={item.id}>
	    <ItemDetail item={item} />
	
	    </li>
      )
      
	})

	return (
	  <ul className="component-list">
	    {items}
	  </ul>
	)
}
 export default ItemList;

